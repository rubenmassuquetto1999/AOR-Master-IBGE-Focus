import { auth, db } from "../firebase";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  collection,
  getDocs,
  query,
  where,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { AuthorizedInvite, AccessRequest } from "../types";

export enum OperationType {
  CREATE = "create",
  UPDATE = "update",
  DELETE = "delete",
  LIST = "list",
  GET = "get",
  WRITE = "write",
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  };
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo:
        auth.currentUser?.providerData?.map((provider) => ({
          providerId: provider.providerId,
          email: provider.email,
        })) || [],
    },
    operationType,
    path,
  };
  console.error("Firestore Error: ", JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

export const ADMIN_EMAIL = "rubenmassuquetto1999@gmail.com";

export function isUserAdmin(email?: string | null): boolean {
  if (!email) return false;
  return email.trim().toLowerCase() === ADMIN_EMAIL.toLowerCase();
}

/**
 * Check if the user is authorized to use the platform (Admin or active invite)
 */
export async function checkUserInviteStatus(
  email: string
): Promise<{ isAuthorized: boolean; isAdmin: boolean; inviteData?: AuthorizedInvite }> {
  const normalizedEmail = email.trim().toLowerCase();

  // The master admin is always authorized
  if (isUserAdmin(normalizedEmail)) {
    // Ensure admin record is in place
    try {
      const adminDocRef = doc(db, "authorizedInvites", normalizedEmail);
      const adminDoc = await getDoc(adminDocRef);
      if (!adminDoc.exists()) {
        await setDoc(adminDocRef, {
          email: normalizedEmail,
          name: "Ruben Massuquetto (Administrador)",
          invitedBy: "system",
          createdAt: new Date().toISOString(),
          status: "active",
          role: "admin",
        });
      }
    } catch {
      // Non-blocking for admin
    }
    return { isAuthorized: true, isAdmin: true };
  }

  // Check direct document ID lookup
  try {
    const inviteRef = doc(db, "authorizedInvites", normalizedEmail);
    const inviteSnap = await getDoc(inviteRef);

    if (inviteSnap.exists()) {
      const data = inviteSnap.data() as AuthorizedInvite;
      if (data.status === "active") {
        return { isAuthorized: true, isAdmin: data.role === "admin", inviteData: data };
      }
    }

    // Secondary fallback: query by email field
    const q = query(collection(db, "authorizedInvites"), where("email", "==", normalizedEmail));
    const querySnap = await getDocs(q);
    if (!querySnap.empty) {
      const data = querySnap.docs[0].data() as AuthorizedInvite;
      if (data.status === "active") {
        return { isAuthorized: true, isAdmin: data.role === "admin", inviteData: data };
      }
    }

    return { isAuthorized: false, isAdmin: false };
  } catch (error) {
    console.warn("Error checking authorization:", error);
    return { isAuthorized: false, isAdmin: false };
  }
}

/**
 * Fetch all authorized invites (Admin only)
 */
export async function fetchAllInvites(): Promise<AuthorizedInvite[]> {
  const path = "authorizedInvites";
  try {
    const invitesRef = collection(db, path);
    const snap = await getDocs(invitesRef);
    const list: AuthorizedInvite[] = [];
    snap.forEach((d) => {
      const data = d.data() as AuthorizedInvite;
      list.push({ ...data, id: d.id });
    });
    return list.sort((a, b) => (b.createdAt || "").localeCompare(a.createdAt || ""));
  } catch (error) {
    handleFirestoreError(error, OperationType.LIST, path);
    return [];
  }
}

/**
 * Add or update an authorized invite (Admin only)
 */
export async function saveAuthorizedInvite(
  email: string,
  name?: string,
  role: "admin" | "student" = "student"
): Promise<void> {
  const normalizedEmail = email.trim().toLowerCase();
  const path = `authorizedInvites/${normalizedEmail}`;
  try {
    const inviteRef = doc(db, "authorizedInvites", normalizedEmail);
    const payload: AuthorizedInvite = {
      email: normalizedEmail,
      name: name?.trim() || "",
      invitedBy: auth.currentUser?.email || ADMIN_EMAIL,
      createdAt: new Date().toISOString(),
      status: "active",
      role,
    };
    await setDoc(inviteRef, payload, { merge: true });
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }
}

/**
 * Toggle status of an invite (active <-> revoked) (Admin only)
 */
export async function updateInviteStatus(
  email: string,
  status: "active" | "revoked"
): Promise<void> {
  const normalizedEmail = email.trim().toLowerCase();
  const path = `authorizedInvites/${normalizedEmail}`;
  try {
    const inviteRef = doc(db, "authorizedInvites", normalizedEmail);
    await updateDoc(inviteRef, { status });
  } catch (error) {
    handleFirestoreError(error, OperationType.UPDATE, path);
  }
}

/**
 * Delete an invite permanently (Admin only)
 */
export async function deleteInvite(email: string): Promise<void> {
  const normalizedEmail = email.trim().toLowerCase();
  const path = `authorizedInvites/${normalizedEmail}`;
  try {
    const inviteRef = doc(db, "authorizedInvites", normalizedEmail);
    await deleteDoc(inviteRef);
  } catch (error) {
    handleFirestoreError(error, OperationType.DELETE, path);
  }
}

/**
 * Request access for an uninvited user
 */
export async function submitAccessRequest(
  name: string,
  message?: string
): Promise<void> {
  const user = auth.currentUser;
  if (!user || !user.email) throw new Error("Usuário não autenticado");

  const normalizedEmail = user.email.trim().toLowerCase();
  const path = `accessRequests/${normalizedEmail}`;

  try {
    const reqRef = doc(db, "accessRequests", normalizedEmail);
    const payload: AccessRequest = {
      email: normalizedEmail,
      name: name.trim() || user.displayName || normalizedEmail.split("@")[0],
      userId: user.uid,
      requestedAt: new Date().toISOString(),
      status: "pending",
      message: message?.trim() || "",
    };
    await setDoc(reqRef, payload, { merge: true });
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }
}

/**
 * Check if the current user has already submitted a pending request
 */
export async function checkExistingAccessRequest(
  email: string
): Promise<AccessRequest | null> {
  const normalizedEmail = email.trim().toLowerCase();
  const path = `accessRequests/${normalizedEmail}`;
  try {
    const reqRef = doc(db, "accessRequests", normalizedEmail);
    const snap = await getDoc(reqRef);
    if (snap.exists()) {
      return snap.data() as AccessRequest;
    }
    return null;
  } catch {
    return null;
  }
}

/**
 * Fetch all pending access requests (Admin only)
 */
export async function fetchAccessRequests(): Promise<AccessRequest[]> {
  const path = "accessRequests";
  try {
    const reqsRef = collection(db, path);
    const snap = await getDocs(reqsRef);
    const list: AccessRequest[] = [];
    snap.forEach((d) => {
      list.push({ ...(d.data() as AccessRequest), id: d.id });
    });
    return list.sort((a, b) => (b.requestedAt || "").localeCompare(a.requestedAt || ""));
  } catch (error) {
    handleFirestoreError(error, OperationType.LIST, path);
    return [];
  }
}

/**
 * Approve access request: create authorized invite & update request status
 */
export async function approveAccessRequest(
  request: AccessRequest
): Promise<void> {
  await saveAuthorizedInvite(request.email, request.name, "student");
  const path = `accessRequests/${request.email.toLowerCase()}`;
  try {
    const reqRef = doc(db, "accessRequests", request.email.toLowerCase());
    await updateDoc(reqRef, { status: "approved" });
  } catch (error) {
    handleFirestoreError(error, OperationType.UPDATE, path);
  }
}

/**
 * Reject access request
 */
export async function rejectAccessRequest(email: string): Promise<void> {
  const normalizedEmail = email.trim().toLowerCase();
  const path = `accessRequests/${normalizedEmail}`;
  try {
    const reqRef = doc(db, "accessRequests", normalizedEmail);
    await updateDoc(reqRef, { status: "rejected" });
  } catch (error) {
    handleFirestoreError(error, OperationType.UPDATE, path);
  }
}

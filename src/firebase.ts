import { initializeApp } from "firebase/app";
import { initializeFirestore, setLogLevel } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import firebaseConfig from "../firebase-applet-config.json";

// Silence verbose offline/connection transition warnings in iframe and sandbox environments
try {
  setLogLevel("silent");
} catch {
  // Ignore if already set
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Use experimentalAutoDetectLongPolling for smooth connectivity
export const db = initializeFirestore(
  app,
  {
    experimentalAutoDetectLongPolling: true,
  },
  firebaseConfig.firestoreDatabaseId
);

export const auth = getAuth(app);



<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

export const firebaseConfig = {
  apiKey: "AIzaSyAUTZtR_9sM-EXq-AChMtYNh-XBpHXFs3E",
  authDomain: "kalash2-2bf90.firebaseapp.com",
  projectId: "kalash2-2bf90",
  storageBucket: "kalash2-2bf90.firebasestorage.app",
  messagingSenderId: "462798382911",
  measurementId: "G-1LQG5W7ST6"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
</script>

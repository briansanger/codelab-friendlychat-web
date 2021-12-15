const firebaseConfig = {
    apiKey: "AIzaSyAD9ctH7SKlE50OF0_pk1wow1laHsInaN0",
    authDomain: "friendlychat-23903.firebaseapp.com",
    projectId: "friendlychat-23903",
    storageBucket: "friendlychat-23903.appspot.com",
    messagingSenderId: "1030195365763",
    appId: "1:1030195365763:web:f4964dda7dfa6a4971d8b6"
};

export function getFirebaseConfig() {
    if (!firebaseConfig || !firebaseConfig.apiKey) {
        throw new Error("No Firebase configuration object provided." + "\n" + "Add your web app's configuration object to firebase-config.js");
    } else {
        return firebaseConfig;
    }
}

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDgfQtmBdmLeC9Kpqkbn2qR755cIr_4q_k",
    authDomain: "react-js-e-commerce.firebaseapp.com",
    databaseURL: "https://react-js-e-commerce.firebaseio.com",
    projectId: "react-js-e-commerce",
    storageBucket: "react-js-e-commerce.appspot.com",
    messagingSenderId: "671047699865",
    appId: "1:671047699865:web:e9eb0be2d949a4e2db5708",
    measurementId: "G-5CS6PM0KRW"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user: ', error);
        }
    }

    return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase
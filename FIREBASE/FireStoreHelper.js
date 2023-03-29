import { uuidv4 } from "@firebase/util";
import { collection, addDoc, doc, deleteDoc, updateDoc } from "firebase/firestore"; 
import { auth, firestore } from "./firebase-setup";

const defaultCollectId = 'goals';

export async function writeToDB({ collectId, data }) {
    
    // Add a new document with a generated id.
    // pass the received data
    // rplc db w fb var exp
    // fix error
    try {
        // must have await to wait for return
        data.user = auth.currentUser.uid;
        const docRef = await addDoc(collection(firestore, defaultCollectId), data);
        console.log("Document written with ID: ", docRef.id);
    } catch (err) {
        console.error(err);
    }
};

export async function deletefromDb({ docid }) {
    try {
        await deleteDoc(doc(firestore, defaultCollectId, docid));
        console.log("Document deleted with ID: ", docid);
    } catch (error) {
        console.error(error);
    }
    
};

export async function updatefromDb({ docid, data }) {

}



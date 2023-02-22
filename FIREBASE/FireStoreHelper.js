import { collection, addDoc, doc, deleteDoc } from "firebase/firestore"; 
import { firestore } from "./firebase-setup";

const defaultCollectId = 'goals';

export async function writeToDB({ collectId, data }) {
    
    // Add a new document with a generated id.
    // pass the received data
    // rplc db w fb var exp
    // fix error
    try {
        // must have await to wait for return
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



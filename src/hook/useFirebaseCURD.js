import { useState } from "react"
import { db } from "@/firebase/config";
import { addDoc, getDoc, updateDoc, deleteDoc, doc, collection, serverTimestamp } from "firebase/firestore";

// add data
export const useAddDos = (fbCollection) => {

    const [addDocStatus, setAddDocStatus] = useState(false)
    const addData = async (doc) => {
        const userCollection = collection(db, fbCollection)
        try {
            await addDoc(userCollection, { ...doc, enQuiryDate: serverTimestamp() })
            setAddDocStatus(true)
        }
        catch (err) {
            console.log(err)
        }
    }
    return { addData, addDocStatus }
}

// get data
export const useGetDocs = (fbCollection) => {

    const [data, setData] = useState(null);
    const getDocsData  = async (id) => {
        const docRef = doc(db, fbCollection, id);
        try {
            const docSnap = await getDoc(docRef);
            const res = docSnap.data()
            setData(res)
        }
        catch (err) {
            console.log(err)
        }
    }
    return { getDocsData, data }
}
// update data
export const useUpdateDocs = (fbCollection) => {

    const [updateState, setupdateState] = useState(false);
    const updateBlogData = async (id, docRef) => {
        const updateRef = doc(db, fbCollection, id);
        try {
            await updateDoc(updateRef, { ...docRef })
            setupdateState(true)
            setTimeout(() => { setupdateState(false) }, 3000)
        }
        catch (err) {
            console.log(err)
        }
    }
    return { updateBlogData, updateState }
}

// delete data
export const useDeleteDocs = (fbCollection) => {

    const [deleteState, setDeleteState] = useState(false);
    const deleteBlogData = async (id) => {
        const docRef = doc(db, fbCollection, id);
        try {
            await deleteDoc(docRef)
            setDeleteState(true)
            setTimeout(() => { setDeleteState(false) }, 3000)
        }
        catch (err) {
            console.log(err)
        }
    }
    return { deleteBlogData, deleteState }
};



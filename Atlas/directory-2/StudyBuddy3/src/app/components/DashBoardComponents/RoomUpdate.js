import React from 'react'
import { CollectionReference, DocumentData, addDoc } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../firebase";
function RoomUpdate(room_no) {
    const handleAddCard = async () => {
        try {
          
          await addDoc(collection(db, "rooms"), { room_no });
          console.log("Data added successfully");
        } catch (error) {
          console.error("Error adding document: ", error);
        }
      };
    
  return (
   <>
   {handleAddCard}
   </>
  )
}

export default RoomUpdate
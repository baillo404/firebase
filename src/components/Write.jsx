import { useState } from 'react';
import { getDatabase, ref, set, push } from 'firebase/database';
// import { useNavigate } from 'react-router-dom'
import app from '../firebase.config';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Write() {

   // const navigate = useNavigate();

    let [inputValue1, setInputValue1] = useState("");
    let [inputValue2, setInputValue2] = useState("");

    const saveData = async () => {
        const db = getDatabase(app);
        const newDocRef = push(ref(db, "odc/programmation"));
        set(newDocRef, {
            langage: inputValue1,
            framework: inputValue2
        }).then(() => {
            alert("data saved successfully");
        }).catch((error) => {
            alert("error: ", error.message)
        })
    }

    return (
        <div className=' container mt-5 bg-secondary p-5 rounded col-6 shadow'>
            <h1 className='text-white'>Enregistrement dans firebase</h1>
            <div className="mb-5">
                <input type="text" className='form-control' placeholder='Enter the name of langage' value={inputValue1} onChange={(e) => setInputValue1(e.target.value)} />
            </div>
            <div className='mb-5'>
                <input type="text" className='form-control' placeholder='Enter the name of framework' value={inputValue2} onChange={(e) => setInputValue2(e.target.value)} />
            </div>
            <button type="submit" className='btn btn-primary' onClick={saveData}>Envoyer</button>
        </div>
    );
}
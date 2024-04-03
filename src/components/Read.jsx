import { useState } from 'react';
import { getDatabase, ref, get } from 'firebase/database';
import app from '../firebase.config';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Read() {

    let [programmationArray, setProgrammationArray] = useState([]);

    const fetchData = async () => {
        const db = getDatabase(app);
        const dbRef = ref(db, "odc/programmation");
        const snapshot = await get(dbRef);
        
        if(snapshot.exists()) {
            setProgrammationArray(Object.values(snapshot.val()));
        } else {
            alert("error");
        }
    }

    const handleMAJ = () => {
        
    }

    const handleSup = () => {
        
    }

    return (
        <div className=' container mt-5 bg-secondary p-5 rounded col-6'>
            <h1 className='text-white'>Les data de firebase</h1>
            <button type="submit" className='btn btn-primary' onClick={fetchData}>Afficher les données</button>
            <ul>
                {console.log(programmationArray)}
                {programmationArray.map( (item, index) => (
                    <li key={index} className='list-unstyled d-flex justify-content-between border rounded mt-3 p-3'>
                        {item.langage} , {item.framework}
                        <div className='d-flex gap-3'>
                            <button onClick={handleMAJ} className='btn btn-warning'>Modifier</button>
                            <button onClick={handleSup} className='btn btn-danger'>Supprimer</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
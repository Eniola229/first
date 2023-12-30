import React, { useState, useEffect } from 'react'
import { storage } from '../Firebase'
import {getDownloadUrl, ref, uploadBytesResumable } from 'firebase/storage';
const InitialState = {
    name:"",
    email:"",
    info:"",
    contact:"",
}


function AddEditUser() {
    const [data, setData] = useState(InitialState);
    const {name, email, info, contact} = data;
    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(null);
    const [errors, setErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    useEffect(() => {
        const uploadFile = () => {
            const name = new Date().getTime() + file.name;
            const storageRef = ref(storage,file.name);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on("state_changed",(snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes)
                setProgress(progress);
                switch (snapshot.state) {
                case "paused":
                    console.log("Upload is pause");
                    break;
                 case "running":
                    console.log("Upload is running");
                    break;

                default:
                    break;
                }
            }, (error) => {
                console.log(error)
            }, 
            () => {
                getDownloadUrl(uploadTask.snapshot.ref).then({downloadURL} => {
                   setData((prev) => ({...prev, img: downloadURL})); 
                });
            }
        }
        file && uploadFile();
    }, [file])

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <div>
        <div>
            <div>
                <h2>Add User</h2>
                <form method="post" onSubmit={handleSubmit}>
                    <input
                     placeholder='Name'
                     label="Name"
                     name='name'
                     onChange={handleChange} 
                    value={name}
                    autoFocus
                    required
                    /> <br/>
                     <input
                     placeholder='Email'
                     label="Email"
                     name='email'
                     onChange={handleChange} 
                    value={email}
                    required
                    />
                    <input
                     placeholder='Info'
                     label="Info"
                     name='info'
                     onChange={handleChange} 
                    value={info}
                    required
                    />
                    <input
                     placeholder='Contact'
                     label="Contact"
                     name='contact'
                     onChange={handleChange} 
                    value={contact}
                    required
                    />
                    <input type='file' onChange={(e) => setFile(e.target.files[0])} />
                    <button type="submit" disabled={progress !== null && progress < 100}>Add</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddEditUser
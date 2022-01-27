import React, { useState } from 'react';
import Button from '@mui/material/Button';
import firebase from 'firebase';
import { storage, db } from './firebase';
import "./ImageUpload.css"

function ImageUpload() {
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleUpload = () => {
       const uploadTask = storage.ref(`images/${image.name}`).put(image);
       uploadTask.on("state_change",
           (snapshot) => {
               const progress = Math.round(
                   (snapshot.bytesTransferred / snapshot.totalBytes) * 100
               );
               setProgress(progress)
           },
           (error) => {
               console.log(error);
               alert(error.message);
           },
           () => {
               storage
               .ref("images")
               .child(image.name)
               .getDownloadURL()
               .then(url => {
                   db.collection("post").add({
                       category: category,
                       description: description,
                       imageUrl: url,
                       name: name,
                       price: price,
                       type: type,                    
                   });
                   setProgress(0);
                   setCategory("");
                   setName("");
                   setPrice("");
                   setType("");
                   setDescription("");
                   setImage(null);
               })
           }
       )
    }
    return (
        <div className="imageupload">
            <progress className="imageupload__progress" value={progress} max="100" />
            <input type="text" onChange={event => setType(event.target.value)} value={type} placeholder='type' />
            <input type="text" onChange={event => setName(event.target.value)} value={name} placeholder='name' />
            <input type="text" onChange={event => setCategory(event.target.value)} value={category} placeholder='category' />
            <input type="text" onChange={event => setPrice(event.target.value)} value={price} placeholder='price' />
            <textarea type="text" onChange={event => setDescription(event.target.value)} value={description} placeholder='description' />
            <input type="file" onChange={handleChange} />
            <Button onClick={handleUpload}>Upload</Button>
        </div>
    )
}

export default ImageUpload

import React, { useEffect, useState } from 'react';
import * as sessionActions from '../../store/session';
import * as pictureActions from '../../store/picture';
import { useDispatch, useSelector } from 'react-redux';
import './PictureUploadForm.css';
import { Redirect } from 'react-router-dom';

// Form needs to contain input for
    //the image source
    //a title for the image (optional)
    //a description for the image (optional)
    //any tags associated with the image (optional)

    //posts to: TBD

const PictureUploadForm = () => {
    const sessionUser = useSelector((state) => state.session.user);

    const [imageLink, setImageLink] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState([]);

    const dispatch = useDispatch();
    const picture = useSelector((state) => state.picture);

    if (!sessionUser) return <Redirect to="/login" />;

    const userId = sessionUser.id;
    
    const handleSubmit = (e) => {
        e.preventDefault();
        return dispatch(pictureActions.uploadPicture({imageLink, title, description, tags, userId}))
    }

    return (
        <>
            <h1>Picture Upload!!!</h1>
            <form onSubmit={handleSubmit} action="/" method="POST">
                <label>
                    Upload an image!
                    <br></br>
                    <input 
                        type="file" 
                        id="avatar"
                        name="avatar"
                        accept="image/png, image/jpeg"
                        onChange={(e) => setImageLink(e.target.value)} 
                        value={imageLink} 
                    />
                    <img src={imageLink} alt="preview"/>
                </label>
                <br></br>
                <label>
                    Title:
                    <br></br>
                    <input 
                        type="text" 
                        onChange={(e) => setTitle(e.target.value)} 
                        value={title} 
                    />
                    <br></br>
                    <label>
                    Description:
                    <br></br>
                    <textarea 
                        type="text"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    />
                    </label>
                </label>
                <br></br>
                <button type="submit">Add your picture!</button>
            </form>
        </>
    )
}

export default PictureUploadForm;
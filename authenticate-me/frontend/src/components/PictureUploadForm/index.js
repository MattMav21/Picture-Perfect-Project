import React, { useEffect, useState } from 'react';
import * as sessionActions from '../../store/session';
import * as pictureActions from '../../store/picture';
import { useDispatch, useSelector } from 'react-redux';
import './PictureUploadForm.css';
import { Redirect, useHistory } from 'react-router-dom';

// Form needs to contain input for
    //the image source
    //a title for the image (optional)
    //a description for the image (optional)
    //any tags associated with the image (optional)

    //posts to: TBD

const PictureUploadForm = () => {
    const sessionUser = useSelector((state) => state.session.user);

    const [image, setImage] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    // const [tags, setTags] = useState([]);

    const dispatch = useDispatch();

    const history = useHistory();

    // const picture = useSelector((state) => state.picture);



    if (!sessionUser) return <Redirect to="/login" />;

    const userId = sessionUser.id;
    
    const handleSubmit = (e) => {
        e.preventDefault();
        return dispatch(pictureActions.uploadPicture({ image, title, description, userId }));
    }

    const updateFile = (e) => {
        const file = e.target.files[0];
        if (file) setImage(file);
    };

    return (
        <>
            <h1>Picture Upload!!!</h1>
            <form onSubmit={handleSubmit} className="picture-upload-form" action="/" method="POST">
                <label>
                    Upload an image!
                    <br></br>
                    <input 
                        type="file" 
                        accept="image/png, image/jpeg"
                        // onChange={(e) => setImage(e.target.value)} 
                        // onChange={(e) => setImage(`http://${e.target.files.name}`)} 
                        onChange={updateFile} 
                    />
                    
                    
                </label>
                <br></br>
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
                    <br></br>
                    <label>
                    Description:
                    <br></br>
                    <textarea 
                        className="description"
                        type="text"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    />
                    </label>
                </label>
                <br></br>
                <br></br>
                <button disabled={!image ? true : false} type="submit">Add your picture!</button>
            </form>
        </>
    )
}

export default PictureUploadForm;
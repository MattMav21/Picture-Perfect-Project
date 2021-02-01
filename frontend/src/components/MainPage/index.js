import React, { useEffect, useState } from 'react';
import * as sessionActions from '../../store/session';
import * as pictureActions from '../../store/picture';
import { useDispatch, useSelector } from 'react-redux';
import './MainPage.css';

//import data
// use effect to dispatch a thunk that fetches all images.
// use selector to subscribe to images/get access to pictures
// map over pictures to renders

//Needs to show all of the pictures that have been uploaded.
    //Preferably in order from newest to oldest.

const MainPage = () => {
    const dispatch = useDispatch();
    const { getPictures } = pictureActions;

    useEffect(() => {
        dispatch(getPictures())
    }, [dispatch, getPictures])
    const pictures = useSelector((state) => state.picture);

    return (
    <>
        <h1>Main Page!</h1>
            <div className="picture-cluster">
            { pictures !== undefined && pictures.length > 1 && pictures.map((pics) => 
                <a href={`/pictures/${pics.id}`}>
                    {/* <label>Uploaded by {pics.userId}</label> */}
                    <br></br>
                    <img className="uploaded-picture" src={pics.imageLink} alt="uploaded" />
                    <br></br>
                </a>
            )}
            </div>
    </>)
}

export default MainPage;
import React, { useEffect, useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import './UserPage.css';
import { useParams } from 'react-router-dom';
import * as pictureActions from '../../store/picture';

//Will use useParams to get the pictureId.
//Needs to display
//the image
//who uploaded it
//any descriptions or tags
//comments

const UserPage = () => {
    const { userId } = useParams();
    const dispatch = useDispatch();
    const picture = useSelector((state) => state.picture);

    const { getPictures, getOnePicture } = pictureActions;

    useEffect(() => {
        dispatch(getOnePicture(userId))
    }, [dispatch, getOnePicture, userId])


    // const correctPicture = pictures.find((pic) => pic.id === pictureId)

    console.log(picture)

    // const loadedPictures = pictures.length > 0 ? pictures : null;

    // console.log(loadedPictures)

    // if (loadedPictures > 0) {
    //     const correctPicture = loadedPictures.find((pic) => pic.id === pictureId)
    //     console.log(correctPicture)
    // }


    return (
        <>
            <h1>User Page for {userId}</h1>
            {/* <h1>Pictures!!!</h1> */}
            {/* { picture !== undefined && <img className="uploaded-picture" src={picture.imageLink} alt="uploaded" />} */}
            {/* { pictures !== undefined && pictures.length > 1 && pictures.map((pics) => <a href={`/pictures/${pics.id}`}><img className="uploaded-picture" src={pics.imageLink} alt="uploaded" /></a>)} */}
            {/* { pictures !== undefined && pictures.length > 1 && <img className="uploaded-picture" src={correctPicture.imageLink} alt="uploaded" /> } */}
        </>
    )
}

export default UserPage;
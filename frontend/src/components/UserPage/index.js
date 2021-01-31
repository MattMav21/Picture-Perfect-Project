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

//Will use useParams to get the userId.
    //Needs to display
        //the username
        //their pictures
        //their albums
            //If they are the logged in user:
                //a create an album button.

//THIS IS NOT THE CORRECT CODE

const UserPage = () => {
    const { userId } = useParams();
    const sessionUser = useSelector((state) => state.session.user);
    // const sessionUserId = sessionUser.id;

    const dispatch = useDispatch();
    const pictures = useSelector((state) => state.picture);
    const { getUserInfo } = pictureActions;
    // const { getPictures, getOnePicture } = pictureActions;
    useEffect(() => {
        dispatch(getUserInfo(userId))
    }, [dispatch, getUserInfo, userId])


    // const correctPicture = pictures.find((pic) => pic.id === pictureId)
    console.log(pictures)

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
            {/* {Number(userId) === Number(sessionUserId) && <h1>MY PAGE</h1>} */}
            {/* { picture !== undefined && <img className="uploaded-picture" src={picture.imageLink} alt="uploaded" />} */}
            { pictures !== undefined && pictures.length > 1 && pictures.map((pics) => <a href={`/pictures/${pics.id}`}><img className="uploaded-picture" src={pics.imageLink} alt="uploaded" /></a>)}
            {/* { pictures !== undefined && pictures.length > 1 && <img className="uploaded-picture" src={correctPicture.imageLink} alt="uploaded" /> } */}
        </>
    )
}

export default UserPage;
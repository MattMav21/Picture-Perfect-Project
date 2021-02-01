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

    const dispatch = useDispatch();
    const pictureArray = useSelector((state) => state.picture.pictures);
    const thisUser = useSelector((state) => state.picture.user);
    const [username, setUsername] = useState('')
    const [pictures, setPictures] = useState([]);
    const { getUserInfo } = pictureActions;


    // const { getPictures, getOnePicture } = pictureActions;
    useEffect(() => {
        dispatch(getUserInfo(userId))
    }, [dispatch, getUserInfo, userId])


    useEffect(() => {
        if (thisUser) {
            setUsername(thisUser.username || '');
        }
        if (pictureArray) {
            setPictures(pictureArray || [])
        }
    }, [thisUser, pictureArray])


    // const correctPicture = pictures.find((pic) => pic.id === pictureId)

    // const loadedPictures = pictures.length > 0 ? pictures : null;

    // if (loadedPictures > 0) {
    //     const correctPicture = loadedPictures.find((pic) => pic.id === pictureId)
    // }

    console.log(username)

    return (
        <>
            {username ? <h1>User Page for {username}</h1> : <h1>User not found!</h1>}
            {/* <h1>Pictures!!!</h1> */}
            {/* { picture !== undefined && <img className="uploaded-picture" src={picture.imageLink} alt="uploaded" />} */}
            { pictures !== undefined && pictures.length > 0 && pictures.map((pics) => <a href={`/pictures/${pics.id}`} className="user-pics"><img className="uploaded-picture" src={pics.imageLink} alt="uploaded" /></a>)}
            <br></br>
            {sessionUser && Number(userId) === Number(sessionUser.id) && <button>MY PAGE</button>}
            {/* { pictures !== undefined && pictures.length > 1 && <img className="uploaded-picture" src={correctPicture.imageLink} alt="uploaded" /> } */}
        </>
    )
}

export default UserPage;
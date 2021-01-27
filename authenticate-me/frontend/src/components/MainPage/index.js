import React, { useState } from 'react';
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
    const picture = useSelector((state) => state);
    return (
    <>
        <h1>Main Page!!!</h1>
    </>)
}

export default MainPage;
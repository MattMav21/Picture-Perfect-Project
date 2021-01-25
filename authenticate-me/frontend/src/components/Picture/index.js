import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import './Picture.css';
import { useParams } from 'react-router-dom';

//Will use useParams to get the pictureId.
//Needs to display
     //the image
     //who uploaded it
     //any descriptions or tags
     //comments

const Picture = () => {
    
    return (
        <>
            <h1>Pictures!!!</h1>
        </>
    )
}

export default Picture;
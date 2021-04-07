import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from "react-router-dom";
import * as pictureActions from "../../store/picture";

const DeletePictureButton = (props) => {
    const [loaded, setLoaded] = useState(false);
    const { destroyPicture, getPictures } = pictureActions;
    const dispatch = useDispatch()
    const history = useHistory()

    const { picId } = props;

    const deletePicture = async (e) => {
        if (window.confirm(`Are you sure you want to delete ${picId}?`)) {

            await dispatch(destroyPicture(picId)).then(() =>
                dispatch(getPictures())
                    .then(() => setLoaded(true)))
                .then(() => history.push(`/`))


            //dispatch action that deletes Roster_Member
            //then dispatch getOneRoster
            //then dispatch getMembers
            //then set loaded to true
        } else {
            return
        }

    };

    return <button onClick={deletePicture}> DELETE </button>;
};

export default DeletePictureButton;
import { fetch } from './csrf';

const LOAD = 'picture/LOAD';
const UPLOAD = 'picture/UPLOAD';
const PICTURE_LOAD = 'picture/PICTURE_UPLOAD';
const GET_USER_INFO = 'session/GET_USER_INFO';
const DELETE_PICTURE = 'picture/DELETE_PICTURE';

const load = pictures => ({
    type: LOAD,
    pictures,
});

export const addAPicture = (picture) => {
    return {
        type: UPLOAD,
        picture,
    }
}

export const loadOnePicture = (picture) => {
    return {
        type: PICTURE_LOAD,
        picture,
    }
}

const getInfo = (info) => {
    return {
        type: GET_USER_INFO,
        info,
    }
}

const deletePicture = (picture) => {
    return {
        type: DELETE_PICTURE,
        picture
    }
}

export const getPictures = () => async dispatch => {
    const response = await fetch(`/api/`)
    const responseData = response.data.pictures;
    dispatch(load(responseData));
};

export const getOnePicture = (pictureId) => async dispatch => {
    const response = await fetch(`/api/pictures/${pictureId}`);
    const responseData = await response.data;
    debugger
    dispatch(loadOnePicture(responseData))
}


// Code that can be used for something else
// const response = await fetch(`/api/pictures`, {
//     method: 'POST',
//     body: JSON.stringify({
//         image,
//         title,
//         description,
//         userId,
//     }),
// });

export const uploadPicture = (picture) => async (dispatch) => {
    const  { image, title, description, userId } = picture;
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("userId", userId);
    if (image) formData.append("image", image);

    let entryObj = {};

    for (let entry of formData.entries()) {
        let key = entry[0];
        let value = entry[1];
    }




    const response = await fetch(`/api/pictures/`, {
        method: "POST",
        headers: {
            "Content-Type": "multipart/form-data",
        },
        body: formData,
    });
    dispatch(addAPicture(response.data.picture));
};


export const getUserInfo = (userId) => async (dispatch) => {
    const response = await fetch(`/api/users/${userId}`, {
        method: 'GET',
    });
    const responseData = response.data;

    dispatch(getInfo(responseData))
    return responseData;
}

// if (response.ok) {
//     const picture = await response.json();
//     dispatch(addAPicture(picture));
//     return picture;
// }

export const destroyPicture = (id) => async (dispatch) => {
    const response = await fetch(`/api/pictures/${id}/delete`, {
        method: 'DELETE',
    });
    debugger

    if (response.ok) {
        debugger
        const deletedPicture = await response.data.picture;
        debugger
        dispatch(deletePicture(deletedPicture));
    }
}

//------

const intiialState = {}

const pictureReducer = (state = intiialState, action) => {
    let newState;
    switch(action.type) {
        case LOAD: {
            newState = [];
            action.pictures.forEach(pic => {
                newState[pic.id] = pic
            })
            return newState;
        }
        case UPLOAD: {
            newState = Object.assign({}, state);
            newState[action.picture.id] = action.picture
            return newState;
        }
        case PICTURE_LOAD: {
            newState = action.picture;
            return newState;
        }
        case GET_USER_INFO:
            newState = action.info;
            return newState;
        case DELETE_PICTURE:
            newState = action.picture;
            debugger
            return newState;
        default:
            return state;
    }
}

export default pictureReducer;
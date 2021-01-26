import { fetch } from './csrf';

const UPLOAD = 'picture/UPLOAD';

export const addAPicture = (picture) => {
    return {
        type: UPLOAD,
        picture,
    }
}

export const uploadPicture = (picture) => async (dispatch) => {
    // console.log(data);
    const  { imageLink, title, description, userId } = picture;
    const response = await fetch(`/api/pictures`, {
        method: 'POST',
        body: JSON.stringify({
            imageLink,
            title,
            description,
            userId,
        }),
    });
    dispatch(addAPicture(response.data.picture));
};

// if (response.ok) {
//     const picture = await response.json();
//     dispatch(addAPicture(picture));
//     return picture;
// }

//------

const intiialState = {}

const pictureReducer = (state = intiialState, action) => {
    // console.log(action);
    let newState;
    switch(action.type) {
        case UPLOAD: {
            newState = Object.assign({}, state);
            debugger
            newState[action.picture.id] = action.picture
            return newState;
        }
        default:
            return state;
    }
}

export default pictureReducer;
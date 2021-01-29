// CreateUser.js file
import { useState } from "react";
import { createUser } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import './CreateUser.css';
import logo from '../../assets/PicturePerfectLogo.png';
import * as sessionActions from "../../store/session";


const CreateUser = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [image, setImage] = useState(null);
    // for multuple file upload
    //   const [images, setImages] = useState([]);
    const [errors, setErrors] = useState([]);

    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user);

    const handleSubmit = (e) => {
        if (password === confirmPassword) {
            e.preventDefault();
            let newErrors = [];
            dispatch(createUser({ username, email, password, image }))
                .then(() => {
                    setUsername("");
                    setEmail("");
                    setPassword("");
                    setImage(null);
                })
                .catch((res) => {
                    if (res.data && res.data.errors) {
                        newErrors = res.data.errors;
                        setErrors(newErrors);
                    }
                });
        }
        return setErrors(['Confirm Password field must be the same as the Password field']);
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (password === confirmPassword) {
    //         setErrors([]);
    //         return dispatch(sessionActions.signup({ email, username, password }))
    //             .catch(res => {
    //                 if (res.data && res.data.errors) setErrors(res.data.errors);
    //             });
    //     }
    //     return setErrors(['Confirm Password field must be the same as the Password field']);
    // };


    const updateFile = (e) => {
        const file = e.target.files[0];
        if (file) setImage(file);
    };

    // for multiple file upload
    //   const updateFiles = (e) => {
    //     const files = e.target.files;
    //     setImages(files);
    //   };

    return (
        <div>
            <h1>AWS S3 Express-React Demo</h1>
            {errors.length > 0 &&
                errors.map((error) => <div key={error}>{error}</div>)}
            <form
                className="signup-form"
                style={{ display: "flex", flexFlow: "column" }}
                onSubmit={handleSubmit}
            >
            <img className="logo" src={logo} alt="logo" />
                <label>
                    Username
                    <br></br>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <label>
                    Email
                    <br></br>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label>
                    Password
                    <br></br>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <label>
                    Confirm Password
                <br></br>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </label>
                <label>
                    <input type="file" onChange={updateFile} />
                </label>
                {/* <label>
            Multiple Upload
            <input 
              type="file"
              multiple
              onChange={updateFiles} />
          </label> */}
                <button type="submit" className="signup-button">Create User</button>
            </form>
            <div>
                {user && (
                    <div>
                        <h1>{user.username}</h1>
                        <img
                            style={{ width: "150px" }}
                            src={user.profileImageUrl}
                            alt="profile"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default CreateUser;
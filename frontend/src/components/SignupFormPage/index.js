import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';
import logo from '../../assets/PicturePerfectLogo.png';

function SignupFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    // const [image, setImage] = useState(null);
    const [errors, setErrors] = useState([]);
    // const user = useSelector((state) => state.session.user);
    if (sessionUser) return <Redirect to="/" />;



    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setErrors([]);
            return dispatch(sessionActions.signup({ email, username, password, }))
                .catch(res => {
                    if (res.data && res.data.errors) setErrors(res.data.errors);
                });
        }
        return setErrors(['Confirm Password field must be the same as the Password field']);
    };

    // const updateFile = (e) => {
    //     const file = e.target.files[0];
    //     if (file) setImage(file);
    // };

    return (
        <>
        <form onSubmit={handleSubmit} className="signup-form">
            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <img className="logo" src={logo} alt="logo" />
            <label>
                Email
                <br></br>
        <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </label>
            <label>
                Username
                <br></br>
        <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </label>
            <label>
                Password
                <br></br>
        <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
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
                {/* THIS WILL BE IMPORTANT FOR POSTING PICTURES*/}
                {/* <label>
                    <input type="file" onChange={updateFile} />
                </label> */}
            <button type="submit" className="signup-button">Sign Up</button>
        </form>
        {/* <div>
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
            </div> */}
        </>
    );
}

export default SignupFormPage;
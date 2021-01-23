import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './Navigation.css';

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

    return (
        <>
            <button onClick={openMenu} className="user-button">
                <i className="fas fa-user-circle" />
            </button>
            {showMenu && (
                <div className="profile-dropdown" style={{ listStyleType: "none", alignItems: "center" }}>
                    <div>{user.username}</div>
                    <div>{user.email}</div>
                    <div>
                        <br></br>
                        <button onClick={logout} className="logout-button">Log Out</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default ProfileButton;
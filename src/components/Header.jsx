import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header >
            <Link to={"/"} >
                <img
                    src="/public/netflix_logo.png"
                    className="max-w-[150px] inline"
                    alt="netflix"
                />
            </Link>
        </header>
    );
};

export default Header;
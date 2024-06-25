import React from "react";
import classes from './Header.module.css'
import headerImg from '../../assets/headerImg.jpg';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) =>{
    return (
        <>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
                <img src={headerImg} alt="Header Image" />
            </div>
        </>
    )
}

export default Header;
import React, {Suspense, useContext, useState} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './styles/index.scss'
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {Theme, ThemeContext, ThemeContextProps} from "./theme/ThemeContext";


const MyComponent = () => {
    const {theme, setTheme} = useContext<ThemeContextProps>(ThemeContext)


    const toggleTheme = () => {
        setTheme((prevState: Theme) => prevState === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
    }

    return (
        <div className={`app ${theme}`}>
            <button type={"button"} onClick={toggleTheme}>Theme</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={<div>Загрузка...</div>}>
                <Routes>
                    <Route path='/about' element={<AboutPageAsync/>}/>
                    <Route path='/' element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default MyComponent;

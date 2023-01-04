import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './index.scss'
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";

const MyComponent = () => {
    return (
        <div className="app">
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

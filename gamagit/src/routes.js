import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Repositories from './Pages/Repositories';
import Home from './Pages/Home';

export default function Rota(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/repositories" element={<Repositories/>}/>
                <Route path='/' exact element={<Home/>} />;
            </Routes>
        </BrowserRouter>
    );
}
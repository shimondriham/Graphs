import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Graph1 from './graph1';
import Graph2 from './graph2';
import Home from './home';
import Layout from './layout';

export const AppGraph = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>} />
                    <Route path="/graph1" element={<Graph1/>} />
                    <Route path="/graph2" element={<Graph2/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

import React from 'react';
import { Route, Routes, BrowserRouter as Router} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';

const Rotas = () => {
    return (
        <Router>
            <Routes>
                <Route component={Home} path="/"/>
                <Route component={About} path="/about" />
                <Route component={Login} path="/login" />
            </Routes>
        </Router>
    );
}

export default Rotas;
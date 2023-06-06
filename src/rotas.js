import React from 'react';
import { Route, Routes, BrowserRouter as Router} from 'react-router-dom';

import Home from './home';
import About from './about';
import Users from './users';

const Rotas = () => {
    return (
        <Router>
            <Routes>
                <Route component={Home} path="/" exact/>
                <Route component={About} path="./about" />
                <Route component={Users} path="./users" />
            </Routes>
        </Router>
    );
}

export default Rotas;
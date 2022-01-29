import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PageNotFound from './PageNotFound.tsx';
import reportWebVitals from './reportWebVitals';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './contexts/ThemeContext';
import { LoadingProvider } from './contexts/LoadingContext';
import { setupHotjar } from './helpers/utils';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

function NotFound () {
    return (
        <a href="/">
            <PageNotFound/>
        </a>
    );
}

function Homepage () {
    return (
    <ThemeProvider>
        <LoadingProvider>
            <HelmetProvider>
                <App/>
            </HelmetProvider>
        </LoadingProvider>
    </ThemeProvider>
    );
}


reportWebVitals();
setupHotjar();

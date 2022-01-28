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
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

ReactDOM.render(
    <Router>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>,
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
    <React.StrictMode>
        <ThemeProvider>
            <LoadingProvider>
                <HelmetProvider>
                    <App/>
                </HelmetProvider>
            </LoadingProvider>
        </ThemeProvider>
    </React.StrictMode>
    );
}


reportWebVitals();
setupHotjar();

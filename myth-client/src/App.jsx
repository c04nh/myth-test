import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TestPage from "./pages/TestPage.jsx";
import ResultPage from './pages/ResultPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* 주소가 / 일 때 Home 컴포넌트를 보여줘라 */}
                <Route path="/" element={<Home />} />
                <Route path="/test" element={<TestPage />} />
                <Route path="/result" element={<ResultPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, ComingSoon } from './theme/container'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="home" element={<Landing />} />
          <Route path="*" element={<ComingSoon />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

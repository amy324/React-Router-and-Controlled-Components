import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './Form';
import Confirmation from './Confirmation';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import Header from "./components/layouts/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage";
import QuestionFormWrapper from "./components/layouts/QuestionFormWrapper";
import Footer from "./components/layouts/Footer";
import MaterialsPage from "./components/MaterialsPage";
import AddMaterialPage from "./components/AddMaterialPage";

const App = () => {
  return (
      <div className="main d-flex gap-sm-5">
          <BrowserRouter>
              <Header/>
              <Routes>
                  <Route path="/" element={<HomePage />}/>
                  <Route index path="/materials" element={<MaterialsPage/>}/>
                  <Route index path="/add-material" element={<AddMaterialPage/>}/>
                  <Route path="*" element={<HomePage/>}/>
              </Routes>
              <QuestionFormWrapper/>
              <Footer />
          </BrowserRouter>
      </div>
  )
}

export default App;

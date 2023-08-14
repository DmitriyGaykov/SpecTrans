import React, {useEffect} from 'react';
import Header from "./components/layouts/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage";
import QuestionFormWrapper from "./components/layouts/QuestionFormWrapper";
import Footer from "./components/layouts/Footer";
import MaterialsPage from "./components/MaterialsPage";
import AddMaterialPage from "./components/AddMaterialPage";
import RegPage from "./components/RegPage";
import AuthPage from "./components/AuthPage";
import {useSelector} from "react-redux";
import {RootState, useAppDispatch} from "./redux/store";
import {isGettedUser} from "./models/User";
import {signInWithToken} from "./redux/users/actions";
import {addCookie, getCookie} from "./scripts/cookieScripts";
import {token_name} from "./config";
import {setTokenValue} from "./redux/users/users";
import QuestionsWrapper from "./components/blocks/questionsPage/QuestionsWrapper";
import QuestionsPage from "./components/QuestionsPage";

const App = () => {
    const dispatch = useAppDispatch()

    const current = useSelector((state : RootState) => state.users.current)
    const token = useSelector((state : RootState) => state.users.token)

    useEffect(() => {
        dispatch(setTokenValue(getCookie(token_name)))
    }, []);

    useEffect(() => {
        if(token) {
            addCookie(token_name, token)
            dispatch(signInWithToken(token))
        }
    }, [token]);

    useEffect(() => {
        console.log(current)
    }, [current]);

  return (
      <div className="main d-flex gap-sm-5">
          <BrowserRouter>
              <Header/>
              <Routes>
                  <Route path="/" element={<HomePage />}/>
                  <Route index path="/materials" element={<MaterialsPage/>}/>

                  {
                      isGettedUser(current) ?
                      <>
                          <Route index path="/add-material" element={<AddMaterialPage/>}/>
                          <Route index path="/questions" element={<QuestionsPage/>}/>
                      </> :
                      <>
                          <Route index path="/auth/reg" element={<RegPage/>}/>
                          <Route index path="/auth/login" element={<AuthPage/>}/>
                      </>
                  }

                  <Route path="*" element={<HomePage/>}/>
              </Routes>
              <QuestionFormWrapper/>
              <Footer />
          </BrowserRouter>
      </div>
  )
}

export default App;

import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
// import {BrowserRouter, Route} from "react-router-dom";
import {Route, Routes} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {

    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                    <Route path='/profile' element={<ProfileContainer />} />// delete
                    <Route path="/dialogs" element={<DialogsContainer/>}/>
                    <Route path='/users' element={<UsersContainer/>}/>
                    {/*// messages={props.state.dialogsPage.messages}/>}/>*/}
                </Routes>
            </div>
        </div>
    );
}

export default App;

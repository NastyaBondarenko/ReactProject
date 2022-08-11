import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
// import {BrowserRouter, Route} from "react-router-dom";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

const App = (props) => {

    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/profile" element = {<Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />}/>
                        <Route path="/dialogs/*" element = {<Dialogs state={props.state.dialogsPage}/>}/>
                                                                     {/*// messages={props.state.dialogsPage.messages}/>}/>*/}
                    </Routes>
                </div>
            </div>
);
}

export default App;

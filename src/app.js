import React from 'react';

import { NavLink, Routes, Route, Navigate } from 'react-router-dom'

import Header from './header';
import Footer from './footer';
import Upload from './upload'
import Download from './download';
import MyUploads from './myUploads';
import NotFoundPage from './notFoundPage';
import Login from './login'

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
        }
    }

    render(){
        return(
            <div class="w-full h-full align-middle items-center justify-between">
                <Header></Header>
                <div class="flex flex-col align-middle items-center ">
                    <div class="qd-button-group qd-action-buttons">
                        <NavLink to="/upload" className="qd-action-btn" activeClassName="qd-action-btn__active">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                class="qd-action-btn-icon" data-name="Layer 1" 
                                viewBox="0 0 24 24" width="16" 
                                height="16">
                                    <path d="M18.348,7.23c-1.311-3.151-4.395-5.23-7.848-5.23C5.813,2,2,5.813,2,10.5c0,.551,.053,1.097,.157,1.633-1.347,1.032-2.157,2.646-2.157,4.367,0,3.032,2.243,5.5,5,5.5h11.5c4.136,0,7.5-3.364,7.5-7.5,0-3.467-2.344-6.436-5.652-7.27Zm-3.055,7.062l-2.293-2.293v6h-2v-6l-2.293,2.293-1.414-1.414,3.293-3.293c.779-.779,2.049-.779,2.828,0l3.293,3.293-1.414,1.414Z"/>
                            </svg>
                            Send
                        </NavLink>
                        <NavLink to="/download" className="qd-action-btn" activeClassName="qd-action-btn__active">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                class="qd-action-btn-icon" data-name="Layer 1" 
                                viewBox="0 0 24 24" 
                                width="16" height="16">
                                    <path d="M18.348,7.23c-1.311-3.151-4.395-5.23-7.848-5.23C5.813,2,2,5.813,2,10.5c0,.551,.053,1.097,.157,1.633-1.347,1.032-2.157,2.646-2.157,4.367,0,3.032,2.243,5.5,5,5.5h11.5c4.136,0,7.5-3.364,7.5-7.5,0-3.467-2.344-6.437-5.652-7.27Zm-4.934,10.184c-.39,.39-.902,.585-1.414,.585s-1.024-.195-1.414-.585l-3.293-3.293,1.414-1.414,2.293,2.293v-6h2v6l2.293-2.293,1.414,1.414-3.293,3.293Z"/>
                            </svg>
                            Receive
                        </NavLink>
                        <NavLink to="/shared" className="qd-action-btn" activeClassName="qd-action-btn__active">Shared files</NavLink>

                    </div>
                </div>
                <Routes>
                    <Route path="/upload" element={<Upload />} />
                    <Route path="/download" element={<Download />} />
                    <Route path="/shared" element={<MyUploads />} />     
                    <Route path="/login" element={<Login/>} />           
                    <Route
                        path="/"
                        element={<Navigate to="/upload" replace />}
                    />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
                
                <Footer></Footer>
            </div>
            
        );
    }
}


export default App;
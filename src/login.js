import React from 'react'
import { ReactComponent as LoginCardIcon } from './logincard.svg'
import { NavLink } from 'react-router-dom'

export default class Login extends React.Component {
    constructor(props) {
        super(props)
    }

    
    render() {
        return (
            <div className="flex flex-col align-middle items-center mb-10 mt-20">
                <div className="flex flex-col justify-center items-center w-96 h-64 bg-transparent rounded-lg border-2 qd-uploadbox border-0 bg-zinc-900 shadow-md">
                    <div className="container flex flex-col items-center qd-login">
                        <div class="qd-login-header">
                            <h1 class="text-2xl text-gray-400 font-semibold">Login</h1>
                        </div>
                        <div class="container flex flex-col qd-login-form">
                            <input className="qd-input" type="text" placeholder="Username" />
                            <input className="qd-input" type="password" placeholder="Password" />
                            <input className="qd-input" type="submit" value="Submit" />

                            <div className="text-center">
                                <NavLink to="/register" className="block text-xs text-gray-400 text-center">
                                    No account? <b className="font-semibold">Register</b>
                                </NavLink>
                                <NavLink to="/lostpwd" className="text-xs text-gray-400 text-center">
                                    Lost password? <b className="font-semibold">Click here</b>
                                </NavLink>
                            </div>
                        </div>

                        <LoginCardIcon className="qd-upload-icon" />
                    </div>
                </div>
            </div>
        )
    }

}
import React from 'react'
import { ReactComponent as RegisterIcon } from './register.svg'
import { NavLink } from 'react-router-dom'

export default class Register extends React.Component {
    constructor(props) {
        super(props)
    }

    
    render() {
        return (
            <div className="flex flex-col align-middle items-center mb-10 mt-20">
                <div className="flex flex-col justify-center items-center w-96 h-64 bg-transparent rounded-lg border-2 qd-uploadbox border-0 bg-zinc-900 shadow-md">
                    <div className="container flex flex-col items-center qd-login">
                        <div class="qd-login-header">
                            <h1 class="text-2xl text-gray-400 font-semibold">Register</h1>
                        </div>
                        <div class="container flex flex-col justify-evenly qd-login-form">
                            <input className="qd-input" type="text" placeholder="Username [alphanumerical]" />
                            <input className="qd-input" type="password" placeholder="Password [min 8 chars]" />
                            <input className="qd-input" type="email" placeholder="Electronic mail address [optional]" />
                            <input className="qd-input" type="submit" value="Submit" />
                        </div>
                        <RegisterIcon className="qd-upload-icon" />
                    </div>
                </div>
            </div>
        )
    }

}
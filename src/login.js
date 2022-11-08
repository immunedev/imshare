import React from 'react'
import { ReactComponent as LoginCardIcon } from './logincard.svg'
import { ReactComponent as QuestionMarkIcon } from './questionmark.svg'
import { ReactComponent as CheckmarkIcon } from './checkmark.svg'
import { NavLink } from 'react-router-dom'

function LoginFailed(props) {
    return (
        <div className="flex flex-col align-middle items-center mb-10 mt-20">
            <div className="flex flex-col justify-center items-center w-96 h-64 bg-transparent rounded-lg border-2 qd-uploadbox border-0 bg-zinc-900 shadow-md">
                <div className="container flex flex-col justify-center items-center qd-login qd-lostpwd-alignment">
                    <div class="qd-login-header mb-auto">
                        <h1 class="text-2xl text-gray-400 font-semibold">Login failed</h1>
                        <span class="text-sm text-gray-400">
                            error msg here
                        </span>
                    </div>
                    <div class="container flex flex-col qd-login-form mb-auto">
                        <a href="/login" onClick={props.reset} className="qd-input qd-input-btn">
                            Try again
                        </a>
                        <NavLink to="/lostpwd" className="qd-input qd-input-btn">
                            Reset password
                        </NavLink>
                    </div>
                    <QuestionMarkIcon className="qd-upload-icon qd-questionmark-icon" />
                </div>
            </div>
        </div>
    )
} 

function LoginSuccessful(props) {
    return (
        <div className="flex flex-col align-middle items-center mb-10 mt-20">
            <div className="flex flex-col justify-center items-center w-96 h-64 bg-transparent rounded-lg border-2 qd-uploadbox border-0 bg-zinc-900 shadow-md">
                <div className="container flex flex-col justify-center items-center qd-login qd-lostpwd-alignment">
                    <div class="qd-login-header mb-auto">
                        <h1 class="text-2xl text-gray-400 font-semibold">Logged in</h1>
                        <span class="text-sm text-gray-400">
                            You have been logged in successfully
                        </span>
                    </div>
                    <div class="container flex flex-col qd-login-form mb-auto">
                        <NavLink to="/" className="qd-input qd-input-btn">
                            Cool
                        </NavLink>
                    </div>
                    <CheckmarkIcon className="qd-upload-icon" />
                </div>
            </div>
        </div>
    )
} 

const LoginState = {
    LOGIN_FORM: 0,
    LOGIN_SUCCESSFUL: 1,
    LOGIN_FAILED: 2
}

export default class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            step: LoginState.LOGIN_FORM
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.resetState = this.resetState.bind(this)
    }

    resetState(e) {
        e.preventDefault()

        this.setState({
            step: LoginState.LOGIN_FORM
        })
    }

    onSubmit() {
        this.setState({
            step: LoginState.LOGIN_FAILED
        })
    }
    
    render() {
        if (this.state.step == LoginState.LOGIN_FORM) {
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
                                <input className="qd-input" type="submit" value="Submit" onClick={this.onSubmit}/>
    
                                <div className="text-center">
                                    <NavLink to="/register" className="block text-xs text-gray-400 text-center">
                                        No account? <b className="font-semibold">Register</b>
                                    </NavLink>
                                    <NavLink to="/lostpwd" className="text-xs text-gray-400 text-center">
                                        Lost password? <b className="font-semibold">Click here</b>
                                    </NavLink>
                                </div>
                            </div>
    
                            <LoginCardIcon className="qd-upload-icon qd-login-icon" />
                        </div>
                    </div>
                </div>
            )
        } else if (this.state.step == LoginState.LOGIN_FAILED) {
            return <LoginFailed reset={this.resetState}/>
        } else {
            return <LoginSuccessful />
        }

        
    }

}
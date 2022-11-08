import React from 'react'
import { ReactComponent as RegisterIcon } from './register.svg'
import { ReactComponent as QuestionMarkIcon } from './questionmark.svg'
import { ReactComponent as CheckmarkIcon } from './checkmark.svg'
import { NavLink } from 'react-router-dom'

function RegisterFailed(props) {
    return (
        <div className="flex flex-col align-middle items-center mb-10 mt-20">
            <div className="flex flex-col justify-center items-center w-96 h-64 bg-transparent rounded-lg border-2 qd-uploadbox border-0 bg-zinc-900 shadow-md">
                <div className="container flex flex-col justify-center items-center qd-login qd-lostpwd-alignment">
                    <div class="qd-login-header mb-auto">
                        <h1 class="text-2xl text-gray-400 font-semibold">Register failed</h1>
                        <span class="text-sm text-gray-400">
                            error msg here
                        </span>
                    </div>
                    <div class="container flex flex-col qd-login-form mb-auto">
                        <a href="/register" onClick={props.reset} className="qd-input qd-input-btn">
                            Try again
                        </a>
                    </div>
                    <QuestionMarkIcon className="qd-upload-icon qd-questionmark-icon" />
                </div>
            </div>
        </div>
    )
} 

function RegisterSuccessful(props) {
    return (
        <div className="flex flex-col align-middle items-center mb-10 mt-20">
            <div className="flex flex-col justify-center items-center w-96 h-64 bg-transparent rounded-lg border-2 qd-uploadbox border-0 bg-zinc-900 shadow-md">
                <div className="container flex flex-col justify-center items-center qd-login qd-lostpwd-alignment">
                    <div class="qd-login-header mb-auto">
                        <h1 class="text-2xl text-gray-400 font-semibold">Registered</h1>
                        <span class="text-sm text-gray-400">
                            You have been registered successfully, you may now log in
                        </span>
                    </div>
                    <div class="container flex flex-col qd-login-form mb-auto">
                        <NavLink to="/login" className="qd-input qd-input-btn">
                            Log in
                        </NavLink>
                    </div>
                    <CheckmarkIcon className="qd-upload-icon" />
                </div>
            </div>
        </div>
    )
} 


const RegisterState = {
    REGISTER_FORM: 0,
    REGISTER_SUCCESSFUL: 1,
    REGISTER_FAILED: 2
}

export default class Register extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            step: RegisterState.REGISTER_FORM
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.resetState = this.resetState.bind(this)
    }

    resetState(e) {
        e.preventDefault()

        this.setState({
            step: RegisterState.REGISTER_FORM
        })
    }

    onSubmit() {
        this.setState({
            step: RegisterState.REGISTER_SUCCESSFUL
        })
    }
    
    render() {
        console.log(this.state.step)
        if (this.state.step == RegisterState.REGISTER_FORM) {
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
                                <input className="qd-input" type="submit" value="Submit" onClick={this.onSubmit}/>
                            </div>
                            <RegisterIcon className="qd-upload-icon" />
                        </div>
                    </div>
                </div>
            )
        } else if (this.state.step == RegisterState.REGISTER_FAILED) {
            return <RegisterFailed reset={this.resetState}/>
        } else {
            return <RegisterSuccessful />
        }
    }

}
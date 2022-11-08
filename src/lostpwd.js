import React from 'react'
import { ReactComponent as QuestionMarkIcon } from './questionmark.svg'
import { ReactComponent as CheckmarkIcon } from './checkmark.svg'
import { NavLink } from 'react-router-dom'



function EmailInput(props) {
    return (
        <div className="flex flex-col align-middle items-center mb-10 mt-20">
            <div className="flex flex-col justify-center items-center w-96 h-64 bg-transparent rounded-lg border-2 qd-uploadbox border-0 bg-zinc-900 shadow-md">
                <div className="container flex flex-col justify-center items-center qd-login qd-lostpwd-alignment">
                    <div class="qd-login-header mb-auto">
                        <h1 class="text-2xl text-gray-400 font-semibold">Lost password</h1>
                    </div>
                    <div class="container flex flex-col qd-login-form mb-auto">
                        <input className="qd-input" type="text" placeholder="Electronic mail address" />
                        <input className="qd-input" type="submit" value="Submit" onClick={props.onSubmittedEmailInput} />
                    </div>
                    <QuestionMarkIcon className="qd-upload-icon qd-questionmark-icon" />
                </div>
            </div>
        </div>
    )
}

function EmailCode(props) {
    return (
        <div className="flex flex-col align-middle items-center mb-10 mt-20">
            <div className="flex flex-col justify-center items-center w-96 h-64 bg-transparent rounded-lg border-2 qd-uploadbox border-0 bg-zinc-900 shadow-md">
                <div className="container flex flex-col justify-center items-center qd-login qd-lostpwd-alignment">
                    <div class="qd-login-header mb-auto">
                        <h1 class="text-2xl text-gray-400 font-semibold">Email sent</h1>
                        <span class="text-sm text-gray-400">
                            Please check your email and input your reset code below
                        </span>
                    </div>
                    <div class="container flex flex-col qd-login-form mb-auto">
                        <input className="qd-input" type="text" placeholder="Reset code" />
                        <input className="qd-input" type="password" placeholder="New password" />
                        <input className="qd-input" type="submit" value="Submit" onClick={props.onSubmittedPasswordReset} />
                    </div>
                    <QuestionMarkIcon className="qd-upload-icon qd-questionmark-icon" />
                </div>
            </div>
        </div>
    )
}

function PasswordResetComplete(props) {
    return (
        <div className="flex flex-col align-middle items-center mb-10 mt-20">
            <div className="flex flex-col justify-center items-center w-96 h-64 bg-transparent rounded-lg border-2 qd-uploadbox border-0 bg-zinc-900 shadow-md">
                <div className="container flex flex-col justify-center items-center qd-login qd-lostpwd-alignment">
                    <div class="qd-login-header mb-auto">
                        <h1 class="text-2xl text-gray-400 font-semibold">Got your back!</h1>
                        <span class="text-sm text-gray-400">
                            You may now log in into your account using your new password
                        </span>
                    </div>
                    <div class="container flex flex-col qd-login-form mb-auto">
                        <NavLink to="/login" className="qd-input qd-input-btn">
                            Take me there!!
                        </NavLink>
                    </div>
                    <CheckmarkIcon className="qd-upload-icon" />
                </div>
            </div>
        </div>
    )
}


const ResetState = {
    EMAIL_INPUT: 0,
    EMAIL_CODE: 1,
    DONE: 2
}

export default class LostPassword extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            step: ResetState.EMAIL_INPUT
        }

        this.onSubmittedEmailInput = this.onSubmittedEmailInput.bind(this)
        this.onSubmittedPasswordReset = this.onSubmittedPasswordReset.bind(this)
    }

    onSubmittedEmailInput() {
        this.setState({
            step: ResetState.EMAIL_CODE
        })
    }

    onSubmittedPasswordReset() {
        this.setState({
            step: ResetState.DONE
        })
    }

    render() {
        console.log(this.state.step)
        if (this.state.step == ResetState.EMAIL_INPUT) {
            return <EmailInput onSubmittedEmailInput={this.onSubmittedEmailInput} />
        } else if (this.state.step == ResetState.EMAIL_CODE) {
            return <EmailCode onSubmittedPasswordReset={this.onSubmittedPasswordReset} />
        } else {
            return <PasswordResetComplete />
        }
    }

}
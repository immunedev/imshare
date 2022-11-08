import React from 'react'
import { ReactComponent as QuestionMarkIcon } from './questionmark.svg'
import { NavLink } from 'react-router-dom'

export default class LostPassword extends React.Component {
    constructor(props) {
        super(props)
    }

    
    render() {
        return (
            <div className="flex flex-col align-middle items-center mb-10 mt-20">
                <div className="flex flex-col justify-center items-center w-96 h-64 bg-transparent rounded-lg border-2 qd-uploadbox border-0 bg-zinc-900 shadow-md">
                    <div className="container flex flex-col justify-center items-center qd-login qd-lostpwd-alignment">
                        <div class="qd-login-header mb-auto">
                            <h1 class="text-2xl text-gray-400 font-semibold">Lost password</h1>
                        </div>
                        <div class="container flex flex-col qd-login-form mb-auto">
                            <input className="qd-input" type="text" placeholder="Electronical mail address" />
                            <input className="qd-input" type="submit" value="Submit" />
                        </div>
                        <QuestionMarkIcon className="qd-upload-icon qd-questionmark-icon" />
                    </div>
                </div>
            </div>
        )
    }

}
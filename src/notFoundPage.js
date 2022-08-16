import React from 'react';
import { NavLink } from 'react-router-dom'
import { ReactComponent as NotFoundImage } from './notfound.svg';

export default class NotFoundPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div class="flex flex-col align-middle items-center mb-10 mt-20">
                <NotFoundImage className="qd-notfound-img"/>
                <h2 class="text-white text-2xl font-bold mb-10">Where am I??</h2>
                <p class="text-gray-300">
                    The requested site was not found. <br />
                    <NavLink to="/upload" className="text-white font-bold"> Click here </NavLink>
                    to go to the main page.
                </p>
            </div>
        )
    }
}

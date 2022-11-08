import React from 'react';
import { ReactComponent as LoginIcon } from './login.svg'
import { NavLink } from 'react-router-dom'

export default function Header(){
    return(
        <header>
            <div class="px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8 w-full">
              <div class="sm:justify-between sm:items-center sm:flex">
                <div class="text-center sm:text-left">
                  <h1 class="text-2xl font-bold text-white sm:text-3xl">
                    Imshare
                  </h1>

                  <p class="mt-1.5 text-sm text-gray-500">
                    A quick temporary file sharing service
                  </p>
                </div>
                <div class="flex flex-col gap-4 mt-4 sm:flex-row sm:mt-0 sm:items-center">
                  <NavLink to="/login"
                    className="inline-flex items-center justify-center px-5 py-3 text-gray-300 transition bg-zinc-900 rounded-xl hover:text-gray-50 hover:bg-zinc-800 focus:outline-none focus:ring qd-login-btn"
                    type="button">
                    
                    <LoginIcon className="qd-action-btn-icon" width="16px" height="16px" />
                    <span class="text-sm font-medium"> Log in </span>
                  </NavLink>
                </div>
              </div>
            </div>
        </header>

    )
}
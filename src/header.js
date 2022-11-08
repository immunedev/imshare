import React from 'react';

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
                  <a href="/login"
                    class="inline-flex invisible sm:visible items-center justify-center px-5 py-3 text-gray-300 transition bg-zinc-900 rounded-xl hover:text-gray-50 hover:bg-zinc-800 focus:outline-none focus:ring"
                    type="button">
                    
                    <svg className="qd-action-btn-icon" width="16px" height="16px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" 
                        stroke-width="2" d="M9 3h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H9m6-9-4-4m4 4-4 4m4-4H5"/>
                    </svg>
                    <span class="text-sm font-medium"> Log in </span>
                  </a>
                </div>
              </div>
            </div>
        </header>

    )
}
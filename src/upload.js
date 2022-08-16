import React from 'react'

export default class Upload extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div class="flex flex-col align-middle items-center mb-10 mt-20">
                <label for="dropzone-file" class="flex flex-col justify-center items-center w-96 h-64 bg-transparent rounded-lg border-2 border-gray-300 border-dashedcursor-pointer    dark:hover:bg-bray-800  dark:border-gray-600">
                    <div class="flex flex-col justify-center items-center pt-5 pb-6 ">
                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400 animate-pulse "><span class="font-semibold">Click to upload</span> or drag and drop</p>
                    </div>
                    <input id="dropzone-file" type="file" class="hidden"></input>
                </label>
            </div>
        )
    }
}

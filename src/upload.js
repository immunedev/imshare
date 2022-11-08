import React from 'react'
import { ReactComponent as UploadIcon } from './upload.svg';
import { ReactComponent as CheckmarkIcon } from './checkmark.svg';
import { ReactComponent as CopyIcon } from './copy.svg';

function UploadCompleted(props) {
    return (
        <div className="container flex flex-col justify-center items-stretch qd-upload">
            <div class="qd-upload-header">
                <h1 class="text-2xl text-gray-400 font-semibold">All done!</h1>
                <span class="text-md text-gray-400">Access your file by:</span>
            </div>
            <div class="container flex flex-row justify-evenly qd-upload-data">
                <div class="mx-2 rounded-md flex flex-col items-center justify-evenly">
                    <span class="text-sm font-semibold text-gray-400">QR Code</span>
                    <img className="shadow-md mb-2 rounded-md" src="https://chart.googleapis.com/chart?chs=120x120&cht=qr&chl=Hello%20world&choe=UTF-8" />
                </div>
                <div class="flex flex-col mx-2 rounded-md text-center mt-1">
                    <div class="mb-2">
                        <span class="text-sm text-gray-400 font-semibold">Link:</span>
                        <br />
                        <a href="#" class="text-sm text-zinc-300 font-bold">
                            5sd82fG
                            <CopyIcon class="qd-copy-icon"></CopyIcon>
                        </a>
                    </div>
                    <div>
                        <span class="block text-sm text-gray-400 font-semibold">or use a word combo</span>

                        <span class="text-sm text-zinc-500 font-semibold">1. </span>
                        <span class="text-md text-zinc-300 font-bold">chapo</span>
                        <br />

                        <span class="text-sm text-zinc-500 font-semibold">2. </span>
                        <span class="text-md text-zinc-300 font-bold">to</span>
                        <br />

                        <span class="text-sm text-zinc-500 font-semibold">3. </span>
                        <span class="text-md text-zinc-300 font-bold">huj</span>
                    </div>
                </div>
            </div>

            <CheckmarkIcon className="qd-upload-icon"></CheckmarkIcon>
        </div>
    )
}

function UploadInProgress(props) {
    return (
        <div className="container flex flex-col justify-center items-center qd-upload">
            <span class="text-sm text-center mb-2 text-gray-500 dark:text-gray-400 animate-pulse font-semibold">Uploading...</span>
            <div class="qd-progressbar">
                <div class="qd-progressbar-box" style={{width: props.completedPercent+"%"}}></div>
            </div>
            <UploadIcon className="qd-upload-icon"></UploadIcon>
        </div>
    )
}

function WaitingForFile(props) {
    return (
        <div className="container flex flex-col justify-center items-center">
            <div class="flex flex-col justify-center items-center pt-5 pb-6 ">
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400 animate-pulse "><span class="font-semibold">Click to upload</span> or drag and drop</p>
            </div>
            <input id="dropzone-file" type="file" class="hidden" onChange={props.onChangeFile}></input>
        </div>
    )
}

const UploadState = {
    WAITING: 0,
    UPLOADING: 1,
    DONE: 2
};

export default class Upload extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            uploadState: UploadState.WAITING,
            // 0 - file not selected
            // 1 - uploading
            // 2 - finished
        }

        this.onChangeFile = this.onChangeFile.bind(this)
    }

    onChangeFile(e) {  
        this.setState({
            uploadState: UploadState.UPLOADING,
        });

        setTimeout(() => {
            this.setState({
                uploadState: UploadState.DONE
            })
        }, 2000)
    }

    render() {
        let styles = "flex flex-col justify-center items-center w-96 h-64 bg-transparent rounded-lg border-2 qd-uploadbox " + (this.state.uploadState >= 1 ?  "border-0 bg-zinc-900 shadow-md" : "border-dashed cursor-pointer hover:bg-gray-800 border-gray-600")

        return (
            <div class="flex flex-col align-middle items-center mb-10 mt-20">
                <label for="dropzone-file" className={styles}>
                {(() => {
                    if (this.state.uploadState == 0) {
                        return <WaitingForFile onChangeFile={this.onChangeFile}/>
                    } else if(this.state.uploadState == 1) {
                        return <UploadInProgress completedPercent="10" />
                    } else {
                        return <UploadCompleted />
                    }
                })()}
                </label>
            </div>
        )
    }
}

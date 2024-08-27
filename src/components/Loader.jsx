// import React from 'react'
import '../Css/Loader.css'

export default function Loader({message}) {
    return (
        <div className="loader-container flex flex-col">
            <span className='font-medium'>{message}</span>
            <div className="loadingspinner">
                <div id="square1"></div>
                <div id="square2"></div>
                <div id="square3"></div>
                <div id="square4"></div>
                <div id="square5"></div>
            </div>
        </div>
    )
}

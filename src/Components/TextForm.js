import React, { useState } from 'react'
import PropTypes from 'prop-types'


const TextForm = (props) => {

    const [text, setText] = useState('');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }


    const handleOnChange = (e) => {
        setText(e.target.value)
    }

    const handleLoClick = () => {
        let loText = text.toLowerCase();
        setText(loText)

    }


    const handleClClick = () => {
        setText('')
    }

    return (
        <div className="container" style={{ color: props.mode === 'light' ? 'white' : 'black' }}>
            <h2 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                {props.heading}
            </h2>
            <div className="mb-3"  >
                <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.label}</label>
                <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white' }} rows="8"></textarea>
            </div>
            <div className=''>
                <button className='btn btn-primary m-3' onClick={handleUpClick}>convert to uppercase</button>
                <button className='btn btn-secondary m-5' onClick={handleLoClick}>convert to Lowercase</button>
                <button className='btn btn-primary' onClick={handleClClick}>Clear Text</button>

            </div>
            <div className='container'>
                <h1>Your text Summary</h1>
                <p> {text.split(" ").length} words and charecters {text.length}</p>
                <p> {0.008 * text.split(" ").length} Minutes to read</p>
                <h2>Peview</h2>
                <p>{text.length > 0 ? text : "Enter something in the textbox to preview to it"}</p>

            </div>

        </div>
    )
}

TextForm.propTypes = { heading: PropTypes.string }

TextForm.defaultProps = { heading: 'WELCOME TO TEXT' }

export default TextForm

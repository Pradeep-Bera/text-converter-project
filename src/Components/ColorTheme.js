import React from 'react'

const ColorTheme = (props) => {


    return (
        <div>
            <div className={`form-check form-switch m-5 text-${props.mode === 'green' ? 'light' : 'green'} `}>
                <input className="form-check-input" onClick={props.toggleGreenMode} type="checkbox" id="flexSwitchCheckDefault" />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.ldText}</label>
            </div>

        </div>
    )
}

export default ColorTheme

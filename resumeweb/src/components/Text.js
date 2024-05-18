import React , {useState}from 'react'
// import PropTypes from 'prop-types'


export default function Text(props) {
    const handleUpClick = (event)=>{
        // console.log("uppercase was clicked")
        setText(event.target.value.toUpperCase())
    }
    const handleOnChange = (event)=>{
        // console.log("On change")
        setText(event.target.value)
    }
    const    [text, setText] = useState("Enter text here");
    // setText("mayurdadas")
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="mybox" className="form-label"></label>
                {/* <textarea className="form-control-3x-3y"  value={text} onChange={handleOnChange}id="mybox" rows="3" column = "4"></textarea> */}
                <textarea className="form-control"  value={text} onChange={handleOnChange}id="mybox" ></textarea>
            </div>
            <button className = "button.btn.btn-primary" value = {text} onClick={handleUpClick}>Covert to upper</button>
        </div>
    )
}

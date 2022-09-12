import React, { useState } from 'react'

export default function TextForm(Props) {
    const [text, setText] = useState('Enter text here...');

    // Convert to UpperCase
    const HandleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        Props.showAlert('Convert to uppercase!', 'Success')
    }

    // Convert to LowerCase
    const HandleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        Props.showAlert('Convert to LowerCase', 'Success')
    }

    // Remove text
    const RemoveText = () => {
        let RemoveText = '';
        setText(RemoveText);
        Props.showAlert('Remove all text', 'Success')
    }

    // Copy Text
    const CopyText = () => {
        let text = document.getElementById('MyBox');
        text.select();
        navigator.clipboard.writeText(text.value)
        Props.showAlert('Copy to Clipboard', 'Success')
    }

    // Event fired
    const HandleChange = (event) => {
        setText(event.target.value)
    }

    return (
        <>
            <div className='container' style={{ color: Props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>{Props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" onChange={HandleChange} value={text}
                        style={{ backgroundColor: Props.mode === 'dark' ? '#997100' : 'white', color: Props.mode === 'dark' ? 'white' : 'black' }}
                        id="MyBox" rows="6"></textarea>
                </div>
                <button className="btn mx-1" style={{ backgroundColor: Props.mode === 'dark' ? '#997100' : '#04503f', color: Props.mode === 'dark' ? 'white' : 'white' }} onClick={HandleUpClick}>UpperCase</button>
                <button className="btn mx-1" style={{ backgroundColor: Props.mode === 'dark' ? '#997100' : '#04503f', color: Props.mode === 'dark' ? 'white' : 'white' }} onClick={HandleLoClick}>LowerCase</button>
                <button className="btn mx-1" style={{ backgroundColor: Props.mode === 'dark' ? '#997100' : '#04503f', color: Props.mode === 'dark' ? 'white' : 'white' }} onClick={RemoveText}>Clear text</button>
                <button className="btn mx-1" style={{ backgroundColor: Props.mode === 'dark' ? '#997100' : '#04503f', color: Props.mode === 'dark' ? 'white' : 'white' }} onClick={CopyText}>Copy text</button>
            </div>
            <div className="container my-3" style={{ color: Props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your text Summary</h1>
                <p><strong>{text.split(' ').length}</strong> words And <strong>{text.length}</strong> characters</p>
                <p><strong>{0.008 * text.split(' ').length}</strong> Minutes Read</p>
                <h2>Preview</h2>
                <p><strong>{text}</strong></p>
                {/* <p><strong>{text.length > 0 ? text : "Enter something in the textbox above to preview it here!"}</strong></p> */}
            </div>
        </>
    )
}

// TextForm.defaultProps = {
//     heading: 'Enter the text to Analyze'
// }

TextForm.prototype = {
    heading: 'Enter the text to Analyze'
}
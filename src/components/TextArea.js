import React, { useState } from 'react'

export default function TextArea(props) {
    const [text, setText] = useState("Enter text...");


    const handleUpClick = () => {        
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("info","Text converted to Uppercase")
    }


    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("info","Text converted to Lowercase")
    }

    // const handleS1Click = (text) => {

    //     
    // }
    const chCount = ()=>{
        return text.length-(text.split(' ').length-1)
    }

    const clearText = () =>{
        setText('');
        props.showAlert("info","Text cleared")
    }

    const wCount = () =>{
        if (text.length===0) {
            return 0;
        }
        else{
            return text.split(' ').length;
        }
    }

    // This one just updates the values and let
    // us write the words
    const handleOnChange = (event) => {
        setText(event.target.value); // Adds the updated value
    }
    return (
        <>
            <div className={`container mt-5 bg-${props.mode}`}>
                <h1 className={` text-${props.mode==='light'?'dark':'light'}`}>{props.start}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="Textarea" rows="7"></textarea>
                </div>
                <button disabled={text.length===0} type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Uppercase</button>
                <button disabled={text.length===0} type="button" className="btn btn-primary mx-2" onClick={handleLoClick}>Lowercase</button>
                {/* <button type="button" className="btn btn-primary mx-2" onClick={handleS1Click(text)}>StYlE_1</button> */}
                <button disabled={text.length===0} type="button" className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
            </div>
            <div className={`container mt-4 bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`}>
                <h2>Counts</h2>
                <p className='mb-1'>The number of characters={chCount()}</p>
                <p className='mb-1'>The number of words={wCount()}</p>
            </div>
        </>
    )
}

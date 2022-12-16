import React, { useState } from 'react'

export default function TextArea(props) {
    const [text, setText] = useState("Enter text...");


    const handleUpClick = () => {        
        let newText = text.toUpperCase();
        setText(newText);
    }


    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    // const handleS1Click = () => {

    //     let count = text.length;
    //     let newText = "";
    //     for (let i = 0; i < count; i++) {
    //         if (i==0 && (i%2)==0) {
    //             let ChangeText = text.charAt(i).toUpperCase();
    //             newText = newText + ChangeText;
    //         }
    //         else{
    //             let ChangeText = text.charAt(i).toLowerCase();
    //             newText = newText + ChangeText;
    //         }
    //     }
    //     setText(newText);
    // }
    const chCount = ()=>{
        return text.length-(text.split(' ').length-1)
    }

    const clearText = () =>{
        setText('');
    }

    const wCount = () =>{
        if (text.length==0) {
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
            <div className='container mt-5'>
                <h1>{props.start}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="Textarea" rows="7"></textarea>
                </div>
                <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Uppercase</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handleLoClick}>Lowercase</button>
                {/* <button type="button" className="btn btn-primary mx-2" onClick={handleS1Click}>StYlE_1</button> */}
                <button type="button" className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
            </div>
            <div className="container mt-4">
                <h2>Counts</h2>
                <p className='mb-1'>The number of characters={chCount()}</p>
                <p className='mb-1'>The number of words={wCount()}</p>
            </div>
        </>
    )
}

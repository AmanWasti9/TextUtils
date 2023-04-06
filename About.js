import React, {useState} from 'react';

export default function About() {

    const [BtnText, setBtnText] = useState("Enable Dark Mode");

    const [myStyle, setmyStyle] = useState({
        color:'black',
        backgroundColor:'white'
    })
    const ToggleStyle = () =>{
        if(myStyle.color==='white'){
            setmyStyle({
                color:'black',
                backgroundColor:'white'
            })       
            setBtnText("Enable Dark Mode");
       }
       else{
            setmyStyle({
                color:'white',
                backgroundColor:'black',
                border:' 1px solid white'
            })
            setBtnText("Enable Light Mode");
        }
    }
  return (
    <div className='container' style={myStyle}>
        <h1 className='my-3'>About Us</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Character and Word Count</strong>
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    Our character and word count tool allows you to quickly and easily calculate the number of characters and words in your text. This can be useful for checking the length of a document or for meeting specific word count requirements.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Text Formatting</strong>
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    Our text formatting tools allow you to easily change the case of your text to uppercase, lowercase, title case, or sentence case. You can also add or remove line breaks, trim whitespace, and more. These tools are especially helpful for students, writers, and editors who need to quickly format their text for a specific purpose.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Commitment to User-Friendly and Efficient Experience and Free Tools</strong>
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    We are committed to providing our users with the most user-friendly and efficient experience possible. Our tools are free and easy to use, and we are constantly adding new features and updates to ensure that we are meeting the needs of our users.
                    Thank you for choosing TextUtils as your go-to website for all of your text-related needs. We hope you find our tools helpful and look forward to serving you in the future.
                    </div>
                </div>
            </div>
        </div>
        <button className="btn btn-primary my-3" onClick={ToggleStyle}>{BtnText}</button>
    </div>
  );
}

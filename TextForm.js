import React, {useState} from 'react';

export default function TextForm(props) {   
  const [text, setText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [replaceTerm, setReplaceTerm] = useState('');
  const [characterCount, setCharacterCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [readingTime, setReadingTime] = useState(0);

  const handleOnChange = (event) => {
    const inputText = event.target.value;
    setText(inputText);
    setCharacterCount(inputText.replace(/\s/g, '').length);
    setWordCount(inputText.trim().split(/\s+/).length);
    setReadingTime(0.008 * text.trim().split(/\s+/).length);
  }
  // Lorem Ipsum Generator
  const handleLoremIpsumClick = async () => {
    const response = await fetch('https://baconipsum.com/api/?type=all-meat&paras=3');
    const data = await response.json();
    setText(data.join('\n\n'));
  } 
  
  // Replace
  function handleReplace() {
    const regex = new RegExp(searchTerm, 'g');
    const newText = text.replace(regex, replaceTerm);
    setText(newText);
  }
  
  // Sentence Case
  const handleSentenceCase = () =>{
    setText(text.replace(/(^\w{1}|\.\s*\w{1})/gi, function(txt){
    return txt.toUpperCase();
    }));
    props.showAlert("Converted to Sentence Case!" , "success");
  }

  // Remove Extra Spaces
  const RemoveExtraSpaces = () =>{
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra Spaces!" , "success");
  }
  
  // Copy
  const handleCopyClick = () =>{
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!" , "success");
  }
    
  // Capitalize
  const handleCapClick = () => {        
    const capitalizedText = text.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    setText(capitalizedText);
    props.showAlert("Capitalized First letter of every word!" , "success");
    //In the code the map() method is used to iterate over an array of words and apply a transformation to each word.
    //Here's a breakdown of what the map() method does:
    //text.split(" ") splits the original string into an array of words, using a space as the separator.
    //.map(word => word.charAt(0).toUpperCase() + word.slice(1)) applies a transformation to each word in the array.
    //The arrow function takes each word as input and returns a new string with the first letter capitalized.
    //word.charAt(0) returns the first character of the word.
    //.toUpperCase() capitalizes the first character of the word.
    //+ word.slice(1) concatenates the capitalized first character with the rest of the word (starting from the second character).
    //.join(" ") joins the array of transformed words back into a string, using a space as the separator.
  }

  // Clear
  const handleClear = () => {
    setText('');
    setCharacterCount(0);
    setWordCount(0);
    setReadingTime(0);
    props.showAlert("Text has been clear!" , "success")
  }

  // LowerCase
  const handleLowClick = () => {
    let newText =  text.toLowerCase();
    setText(newText);
    props.showAlert("Coverted to Lower Case!" , "success")
  }

  // UpperCase
  const handleUpClick = () => {
    // console.log("Uppercase is click : " + text);
    let newText =  text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case!" , "success")
  }
   

  return (
    <>    
    <div className="MainConatiner">
      <div className="con">
        <div className='container' style={{color : props.handleSubmit}} >
          <h1 className='Text'>{props.heading}</h1>

          {/* TextArea */}
          <div className="mb-3">
            <textarea className="form-control" value={text} style={{backgroundColor : 'white' , color : 'black' }}  onChange={handleOnChange} id="myBox" rows="10" ></textarea>
          </div>

        </div>
        <div className="containerbtn"> 
        {/* All operations buttons */}
        <button className="btn btn-primary mx-2 functionbtn" onClick={handleUpClick} style={{ backgroundColor:'black', border:'2px solid white', color:'white'}}>Upper Case</button>
        <button className="btn btn-primary mx-2 functionbtn" onClick={handleLowClick} style={{ backgroundColor:'black', border:'2px solid white', color:'white'}}>Lower Case</button>
        <button className="btn btn-primary mx-2 functionbtn" onClick={handleCapClick} style={{ backgroundColor:'black', border:'2px solid white', color:'white'}}>Capitalized Case</button>
        <button className="btn btn-primary mx-2 functionbtn" onClick={handleSentenceCase} style={{ backgroundColor: 'black', border:'2px solid white', color:'white'}}>Sentence Case</button>
        <button className="btn btn-primary mx-2 functionbtn" onClick={handleLoremIpsumClick} style={{ backgroundColor:'black', border:'2px solid white', color:'white'}}>Generate Lorem Ipsum</button>
        <button className="btn btn-primary mx-2 functionbtn" onClick={handleCopyClick} style={{ backgroundColor:'black', border:'2px solid white', color:'white'}}>Copy Text</button>
        <button className="btn btn-primary mx-2 functionbtn" onClick={RemoveExtraSpaces} style={{ backgroundColor: 'black', border:'2px solid white', color:'white'}}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-2 functionbtn" onClick={handleClear} style={{ backgroundColor:'black', border:'2px solid white', color:'white'}}>Clear</button>
      </div>

        {/* WordCount , Reading Minutes */}
        <div className="containerText">

          <div className="container my-3" style={{color : props.handleSubmit}}>
            <h2 className='Text'>Text Summary</h2>
            <p>Word count: {wordCount}</p> 
            <p>Character count: {characterCount}</p>        
            <p>Reading time: {readingTime} minute(s)</p>
          </div>

          <div className='findandreplace'>
            <h2 className='Text'>Find & Replace</h2>
            <input className="contai my-2 inputfield" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search term" />
            <br/>
            <input className="contai my-2 inputfield" value={replaceTerm} onChange={(e) => setReplaceTerm(e.target.value)} placeholder="Replace term" />
            <br/>
            <button className="btn btn-primary functionbtn1" onClick={handleReplace} style={{ backgroundColor:'black', border:'2px solid white', color:'white'}}>Replace</button>
          </div> 
        

        </div>

      </div>

    </div>

    
    {/* Preview  */}
    <div className="container my-3" style={{color : props.handleSubmit}}>
      <h2 className='Text'>Preview</h2>
      <p >{ text.length>0?text:"Enter text in the textbox above to preview it here..."}</p>
    </div>

    </>
  );
}

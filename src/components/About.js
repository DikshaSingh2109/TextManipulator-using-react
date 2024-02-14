import React, { useState } from 'react'

export default function About() {
    const [myStyle ,setMyStyle ]= useState ( {
        color: 'black',
        backgroundColor: 'white'
    })
    const [btntext ,setBtntext ]= useState ( "enable dark Mode")
   

   const toggleStyle =()=>{
      if(myStyle.color==='black'){
        setMyStyle({
            color: 'white',
        backgroundColor: 'black',
        border: '1px solid-white'
        })
        setBtntext("enable dark Mode")
      }
      else {
        setMyStyle({
            color: 'black',
            backgroundColor: 'white'
        })
        setBtntext("enable light Mode")
    }
    }

  return (
   
    <div className="container" style={myStyle}>
        <h1 className="my-3">About Us</h1>
                <div className="accordion" id="accordionExample" style={myStyle}>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                   <strong> App description</strong> 
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    It is a Text Utility app. As the name suggests that this  <code>Text Manipulator app </code> is an app though which we can manipulate our text into various multiple formats.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                   <strong> Features</strong> 
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    It has many various features such as : Uppercase for capitalizing the words, lowercase for converting all the letters into lower letters, clearing all the text , inversing the text and copying the clipboard features.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                    <strong>Creator : </strong>
                   </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    Designed by :  <code> Diksha Singh </code>
                </div>
                </div>
            </div>
            </div>
            <div className="container my-3">
                <button type= "button" onClick={toggleStyle}  class="btn btn-primary">{btntext}</button>
            </div>
             
    </div>
    
  )
}

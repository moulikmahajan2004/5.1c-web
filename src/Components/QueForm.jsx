import React from 'react';
import './QueForm.css';


function QueForm()
{

  return (
    <div className='container'>
    <div className="QUESTIONS">
    
          <div className='class1'>
          <p className='text1'>WHAT DO YOU WANT TO ASK OR SHARE</p>
          </div>
  
          <span className='TITLE'>
            Title
            <input className='text2' type='text' placeholder='START YOUR QUESTION WITH, WHEN , WHY ?'/>
          </span>

          <h3 className='text3'>DESCRIBE YOUR PROBLEM</h3>

          <input className='text4' type='text' placeholder='ADD PROBLEM DESCRIPTION'/>

          <div>
          <span className='Tags'>

            TAGS
            <input className='Box' type='text' placeholder='PLEASE ADD MINIMUM THREE TAGS'/>
          </span>
          </div>
          
          <button className='Button' >POST</button>
        </div>
    
    </div>
  );
}

export default QueForm;

import React from 'react';
import './form.css';

function ArticleForm() 
{
  return (
    <div>
          <div className='class1'>
          <p className='point1'>WHAT DO YOU WANT TO SHARE OR ASK</p>
          </div>
  
          <span className='Title'>

            TITLE
            <input className='p2' type='text' placeholder='TITLE'
            />
          </span>

          <h3 className='p3'>ABSTRACT</h3>
          <input className='paragh' rows="1" placeholder='ADD ABSTRACT'/>

          <h3 className='article'>ARTICLE TEXT</h3>
          <input className='point3' rows="1" placeholder='ADD PARAGRAPH'></input>

          <span className='Tags'>
            TAGS
            <input className='font4' type='text' placeholder='ADD MINIMUM TREE TAGS '
            />
          </span>
          
          <button className='Btn'>POST</button>
        </div>
   
  );
  }

export default ArticleForm;

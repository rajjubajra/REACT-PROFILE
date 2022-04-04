import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import logo from '../yw-logo-240x240.png';
import gsap from 'gsap';

/**
 * THIS Component IS ONLY FOR WEBSITE PREVIEW BUTTON
 * ONCE PREVIEW IS PRESSED IT WILL NAVIGATE TO A PAGE
 * AND THIS PAGE WILL NO LONGER BE AVAILABLE
 * 
 * In order to use it, put this component at the bottom of the layout component.
 */

function Preview() {


  const [previewBtn, setPreviewBtn] = useState(true);

  const disapplerThePage = () => {

    gsap.to('.fadeout',{duration:2, opacity: 0, ease: 'power2'});

    setTimeout(()=>{
      setPreviewBtn(false);
    },2500)
    
  }
  
  return (
    <>
    {
      previewBtn &&
      <div className="fadeout w-full h-screen fixed top-0  flex justify-center items-center bg-yellow-500 z-50">
        <div>
          <div>
            <img className="w-20 h-auto m-20" src={logo} alt="yw logo" />
          </div>
          <Link 
          className="cursor-pointer border px-20 py-5 uppercase tracking-widest" 
          to="/" 
          onClick={()=> disapplerThePage()} >Preview</Link>
        </div>
      </div>
    }
    </>
    
  )
}

export default Preview
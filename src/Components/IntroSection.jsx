import React, {useState, useEffect} from "react";
import './Style.css';

function IntroSection() {
  const [resize, setResize] = useState(false);
  
  useEffect(() => {
    resizeIntro();
  }, []);
  
  function resizeIntro() {
    if(window.innerWidth >= 992) {
      setResize(true);
    }
    else {
      setResize(false);
    }
  }

  window.addEventListener('resize', resizeIntro);
  return (
    <div className="intro--section flex justify-center items-center">
      <div className="text--wrapper flex flex-col justify-center items-center text-center gap-6 order-2">
        <hr className="bg-gray-600 h-1/2 w-5" />
        <h1 className="heading font-bold">Humanizing your insurance</h1>
        <p>
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that’s right for
          you. Ensure you and your loved ones are protected.
        </p>
        <button className="plan-btn border-2 py-2 px-6 cursor-pointer tracking-wider font-bold transition duration-300 ease-in-out hover:border-transparent hover:bg-white">VIEW PLANS</button>
      </div>
      <div className="intro--img order-1 w-full h-1/2 flex">
        {resize ?
          <img src="./images/image-intro-desktop.jpg" alt="" />
          :
          <img src="./images/image-intro-mobile.jpg" alt="" />
        }
      </div>
    </div>
  );
}

export default IntroSection;

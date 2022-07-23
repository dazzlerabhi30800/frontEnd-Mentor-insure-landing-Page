import React, {useState, useEffect} from "react";
import './Style.css';

function Navbar() {
    const [click, setClick] = useState(false);
    useEffect(() => {
      resizeNavbar();
      // document.body.classList.remove('active');
    })
    function handleClick() {
        setClick(prevState => !prevState);
        if(click) {
            document.body.classList.remove('active');
        }
        else {
            document.body.classList.add('active');
        }
    }
    function resizeNavbar() {
      if(window.innerWidth >= 992) {
        document.body.classList.remove('active');
      }
    }

    window.addEventListener('resize', resizeNavbar)
  return (
    <nav className="navbar py-4 px-6 flex justify-between md:justify-evenly items-center shadow-md relative">
      <div className="logo--img cursor-pointer ">
        <img src="./images/logo.svg" alt="" />
      </div>
      <div className="p-8 link--container flex flex-col w-full gap-6 items-center absolute top-14 left-1/2">
        <ul className="nav--list flex flex-col items-center gap-6">
          <li className="cursor-pointer">HOW WE WORK</li>
          <li className="cursor-pointer mx-2">BLOG</li>
          <li className="cursor-pointer mx-2">ACCOUNT</li>
        </ul>
        <button>VIEW PLANS</button>
      </div>

    {click ?  
        <img  className="cursor-pointer menu--btn" onClick={handleClick} src="./images/icon-close.svg" alt="" />
        :
        <img className="cursor-pointer menu--btn" onClick={handleClick} src="./images/icon-hamburger.svg" alt="" />
    }
    </nav>
  );
}

export default Navbar;

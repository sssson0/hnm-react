import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
    const menuList =[
        "여성",
        "Divided",
        "남성",
        "신생아/유아",
        "아동",
        "H&M Home",
        "Sale",
        "지속가능성"
]
  return (
    <div>
      <div>
        <div className='login-button'>
            <FontAwesomeIcon icon={faUser}/>
            <div>로그인</div>
        </div>
      </div>
      <div className='nav-section'>
        <img width={100} src='https://assets.turbologo.com/blog/en/2021/07/07045753/hm-symbol-logo.png'/>
      </div>
      
      <div className='input-area'>
            <FontAwesomeIcon icon={faSearch}/>
            <input className='input-box' type='text'/>
         </div>

      <div className='menu-area'>
            <ul className='menu-list'>
                {menuList.map((menu)=>(
                    <li>{menu}</li>
                ))}
            </ul>
      </div>
      
    </div>

  );
}

export default Navbar;

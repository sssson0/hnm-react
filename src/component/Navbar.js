import React,{useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars,faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Navbar = ({ authenticate, setAuthenticate }) => {
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

  useEffect(()=>{
    
  },[authenticate])

let [width, setWidth] = useState(0);
const navigate = useNavigate()
   

const search=(event)=>{
    if(event.key==="Enter"){
        let keyword = event.target.value
        navigate(`/?q=${keyword}`)
    }
}
  return (
    <div>
      <div className="side-menu" style={{ width: width }}>
        <button className="closebtn" onClick={() => setWidth(0)}>
          &times;
        </button>
        <div className="side-menu-list" id="menu-list">
          {menuList.map((menu, index) => (
            <button key={index}>{menu}</button>
          ))}
        </div>
      </div>
      <div className="nav-header">
        <div className="burger-menu hide">
          <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
        </div>
        {authenticate ? (
          <div onClick={() => setAuthenticate(false)}>
            <FontAwesomeIcon icon={faUser} />
            <span style={{ cursor: "pointer" }}>로그아웃</span>
          </div>
        ) : (
          <div onClick={() => navigate("/login")}>
            <FontAwesomeIcon icon={faUser} />
            <span style={{ cursor: "pointer" }}>로그인</span>
          </div>
        )}
      </div>

      <div className='nav-section'>
        <Link to="/">
        <img width={150} src='https://assets.turbologo.com/blog/en/2021/07/07045753/hm-symbol-logo.png'/>
        </Link>
      </div>
      
      <div className='input-area'>
            <FontAwesomeIcon icon={faSearch}/>
            <input className='input-box' placeholder='제품검색' type='text' onKeyPress={(event)=>search(event)}/>
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

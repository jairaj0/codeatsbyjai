import React,{useState , useEffect , useContext} from 'react';
import './Nav.scss';
import logo from '../../Assets/logo.svg';
import logo1 from '../../Assets/logo1.svg';
import Context from '../../Context/Context';
import { FiSun } from 'react-icons/fi';
import { BsFillMoonStarsFill } from 'react-icons/bs';

const Nav = ({dmode}) => {
const {states , changeState} = useContext(Context)
  return (
    <nav className={dmode ? "nav_d" : "nav_l"}>
        <div className="container flex-between">
        <a className='flex-center logobox' href="/"><img className='logo' src={dmode ? logo : logo1} alt="logo" />Codeats</a>

        <div className="right flex-between">
          <div className="links">
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#Contact">Contact</a>
          </div>
          <div onClick={()=> states.dmode ? changeState(false) : changeState(true)} className="dmodeHandler flex-between">
            <div className={dmode ? "circle_d" : "circle_l"}></div>
            <div className="light flex-center"><FiSun /></div>
            <div className="dark flex-center"><BsFillMoonStarsFill /></div>
          </div>
        </div>
        </div>
    </nav>
  )
}

export default Nav
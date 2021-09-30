import React,{useState} from "react";
import {MenuItem} from './MenuItem'
import { Link } from "react-router-dom";
import './Dropdown.css'
import img1 from '../assets/img-1.jpg'
import img2 from '../assets/img-2.jpg'
import img3 from '../assets/img-3.jpg'
import img4 from '../assets/img-5.png'

function Dropdown(){

    const [click,setClick]=useState(false)
    const handleClick=()=>setClick(!click)

    return (
        <>
        <div className='container'>
                <div onClick={handleClick} className={click? 'dropdown-menu clicked':'dropdown-menu'}>
                    <div className='left'>
                        {MenuItem.map((item,index)=>{
                        return (
                                <li key={index}>
                                    <Link className={item.cName} to={item.path} onClick={()=>setClick(false)}>
                                        {item.title} 
                                    </Link>
                                </li>
                            )
                        })}
                    </div>

                    <li className='line'></li>
                    
                    <div className='right'>
                       <li><img src={img1} alt="" className='drop-img'/></li> 
                       <li><img src={img2} alt="" className='drop-img'/></li> 
                       <li><img src={img3} alt="" className='drop-img'/></li> 
                       <li><img src={img4} alt="" className='drop-img'/></li> 
                    </div>
                </div>
        </div>
        
            
            
        </>
    )
}

export default Dropdown;
import React,{useState,useEffect} from 'react';
import './Navbar.css';

const Navbar = () => {
    
 const [show, setShow] = useState(false);

    useEffect(() => {
       window.addEventListener('scroll', () =>{
           if(window.scrollY > 100){
               setShow(true)
           }else setShow(false)
        })
       return () =>{
        window.removeEventListener('scroll')
    }
    }, [])

    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <img 
            alt='Netflix Logo'
            className='nav__logo'
            src='https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=49'/>
             
            <img 
            alt='Netflix Logo'
            className='nav__avatar'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjfpx625r56ij1MfrEPCAgvgmWnzw0S29xQ&usqp=CAU'/>
        </div>
    )
}

export default Navbar

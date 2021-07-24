import React, {useState} from 'react';
import ToolBar from '../components/ToolBar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import About from '../components/About/index';
import { AboutObj } from '../components/InfoSection/data';




const Aumy = () => {

    const[isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <> 
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <ToolBar toggle={toggle} />
        <About {...AboutObj} />
        <Footer />
        
       </> 
    )
}

export default Aumy

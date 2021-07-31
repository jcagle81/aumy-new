import React, {useState} from 'react';
import ToolBar from '../components/ToolBar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Junior from '../components/Junior';
import { JuniorObj } from '../components/InfoSection/data';


const JuniorClass = () => {

    const[isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <> 
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <ToolBar toggle={toggle} />
        <Junior {...JuniorObj} />
        <Footer />
        
       </> 
    )
}

export default JuniorClass

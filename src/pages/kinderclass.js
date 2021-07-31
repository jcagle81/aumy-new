import React, {useState} from 'react';
import ToolBar from '../components/ToolBar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Kinder from '../components/Kinder';
import { KinderObj } from '../components/InfoSection/data';


const KinderClass = () => {

    const[isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <> 
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <ToolBar toggle={toggle} />
        <Kinder {...KinderObj} />
        <Footer />
        
       </> 
    )
}

export default KinderClass

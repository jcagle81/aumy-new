import React, {useState} from 'react';
import ToolBar from '../components/ToolBar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Senior from '../components/Senior';
import { SeniorObj } from '../components/InfoSection/data';


const SeniorClass = () => {

    const[isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <> 
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <ToolBar toggle={toggle} />
        <Senior {...SeniorObj} />
        <Footer />
        
       </> 
    )
}

export default SeniorClass

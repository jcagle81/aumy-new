import React, {useState} from 'react';
import ToolBar from '../components/ToolBar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Classes from '../components/Classes/index';



const ClassesPage = () => {

    const[isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <> 
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <ToolBar toggle={toggle} />
        <Classes />
        <Footer />
        
       </> 
    )
}

export default ClassesPage
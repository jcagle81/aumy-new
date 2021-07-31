import React, {useState} from 'react';
import Info from '../components/InfoSection';
import { homeObjOne,} from '../components/InfoSection/data';
import Landing from '../components/LandingSection';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Services from '../components/Services';
import Footer from '../components/Footer';
import LandingPhotos from '../components/LandingPhotos';
import News from '../components/NewsSection';

const Home = () => {
    const[isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };



    return (
       <> 
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <Landing />
        <Info {...homeObjOne} />
        <Services />
        <LandingPhotos />
        <News />
        <Footer />
       </> 
    );
};

export default Home;

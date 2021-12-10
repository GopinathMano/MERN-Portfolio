import React,{useState} from 'react'
import About from '../components/AboutSection'
import Contact from '../components/ContactSection'
import HeroSection from '../components/HomeSection'
import Navbar from '../components/Navbar'
import Portfolio from '../components/PortfolioSection'
import Sidebar from '../components/Sidebar'
import Skills from '../components/SkillsSection'

function Main() {
    const [isOpen,setIsOpen] = useState(false)
    const toggle = () => {
        console.log(isOpen)
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <About />
            <Skills />
            <Portfolio />
            <Contact />
        </>
    )
}

export default Main

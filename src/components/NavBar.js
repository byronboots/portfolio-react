import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { useEffect, useState } from 'react';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';


function NavBar() {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }

    return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
            {/* <img src = {logo} alt='logo' /> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav"> 
            <span className='navbar-toggler-icon'/>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/byronboots/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt='LinkedIn' /></a>
                <a href="https://github.com/byronboots" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt='GitHub' /></a>
                <a href="https://www.youtube.com/@byron_boots" target="_blank" rel="noopener noreferrer"><img src={navIcon4} alt='YouTube' /></a>
            </div>
            {/* <button className='vvd' onClick={() => console.log('connect')}><span>Let's Connect</span></button> */}
        </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export {NavBar};
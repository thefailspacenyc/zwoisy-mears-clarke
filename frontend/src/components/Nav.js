import { useState } from 'react';
import { BrowserRouter as Router,
    Routes,
    Route,
    Link } from "react-router-dom";

// === Pages


    function Nav() {
        
        const [open, setOpen] = useState(false)
        const [navHeight, setNavHeight] = useState('0vH')

        const menuToggle = () => {
     
            if (open == true) {
                setNavHeight('0vH')
                setOpen(false)
            }    

            if (open == false) {
                console.log(window.innerWidth)
                setNavHeight('100%')
                setOpen(true)
                }
            }
            

        return (
            <Router>
                <div className="flex space-between border-box nav-wrapper"> 
                    <div className="flex column center">
                        <label class="switch">
                            <input type="checkbox"/>
                            <span class="slider round"></span>
                        </label>
                    </div>
                    <div className="flex c-gap-20">
                        <a href="/about"><h4>zwoisy mears-clarke</h4></a>
                        <a href="/projects"><h4>about me</h4></a>
                        <a href="/contact"><h4>projects</h4></a>
                        <a href="/contact"><h4>calendar</h4></a>
                        <a href="/contact"><h4>contact</h4></a>
                    </div>
                </div>
                <Routes>
                    {/* <Route path="/" element={<Landing />} /> */}
                </Routes>
            </Router>
        );
    }
    
    export default Nav;
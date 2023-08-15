import { BrowserRouter } from "react-router-dom";

import {About, Contact, Experience, Navbar, Tech, Works } from './components';
import Cover from "./components/Cover";

const App =() => {
    return (
        <BrowserRouter>
            <div className="relative z-0 bg-primary">
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                    <Navbar/>
                    <Cover/>
                </div>
                
                <About/>
                <Experience/>
                <Tech/>
                <Works/>
                
                <div className="relative z-0">
                    <Contact/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
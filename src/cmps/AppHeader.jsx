// import { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';

// export function AppHeader() {
//     const [isScrolled, setIsScrolled] = useState(false);
//     const location = useLocation();

//     useEffect(() => {
//         const handleScroll = () => {
//             if (window.scrollY > 50) {
//                 setIsScrolled(true);
//             } else {
//                 setIsScrolled(false);
//             }
//         };

//         window.addEventListener('scroll', handleScroll);

//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     const showNav = location.pathname === "/";

//     return (
//         <section className={`app-header ${isScrolled ? 'scrolled' : ''}`}>
//             <Link to="/">
//                 <div>
//                     <h1>Mia <br /> Darvasi <hr /> </h1>
//                 </div>
//             </Link>

//             {showNav && (
//                 <nav>
//                     <a href="#about">About</a>
//                     <a href="#skills">Skills</a>
//                     <a href="#projects">Projects</a>
//                 </nav>
//             )}

//             <a href="#connect"><button>Let's Connect</button></a>
//         </section>
//     );
// }


import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function AppHeader() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false); // State to detect mobile screens
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        const handleResize = () => {
            // Check if the screen width is less than 650px
            setIsMobile(window.innerWidth < 650);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        // Initial check for mobile screen size
        handleResize();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const showNav = location.pathname === "/";

    return (
        <section className={`app-header ${isScrolled ? 'scrolled' : ''}`}>
            <Link to="/">
                <div>
                    <h1>Mia <br /> Darvasi <hr /> </h1>
                </div>
            </Link>

            {showNav && !isMobile && (
                <nav>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                </nav>
            )}

            <a href="#connect"><button>Let's Connect</button></a>
        </section>
    );
}

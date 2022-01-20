import { useState, useEffect } from 'react';

import { ConnectButton } from 'celeste-framework';

import { animated, useSpring } from 'react-spring';

import Link from 'next/link';

const Navbar = (props) => {
    //change color of navbar when scrolling
    const [scroll, setScroll] = useState(10);
    const styles = useSpring({ background: scroll > 100 ? '#0B0C22' : 'rgba(0,0,0,0)' });

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY);
        });
    }, []);

    const [isOpen, setIsOpen] = useState(false);

    const onBurgerClicked = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    };

    const onBurgerClicked2 = () => {
        setIsOpen(!isOpen);
    };

    return (
        <animated.nav
            className="navbar is-fixed-top custom-navbar "
            role="navigation"
            aria-label="main navigation"
            style={styles}
        >
            <div className="container ">
                <div className="navbar-brand">
                    {/* <Link href="/">
                        <a className="navbar-item">
                            {/* <Image src={logo64} alt="Crypto Family Logo" width={32} height={32}/> 
                            <h1 className="title is-5 has-text-white mb-0 has-font-tesla is-italic">&nbsp; RABOLABS </h1>
                        </a>
                    </Link> */}

                    <a
                        role="button"
                        className={`navbar-burger ${isOpen ? 'is-active' : ''}`}
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbar"
                        onClick={onBurgerClicked}
                    >
                        <span className="has-text-white" aria-hidden="true"></span>
                        <span className="has-text-white" aria-hidden="true"></span>
                        <span className="has-text-white" aria-hidden="true"></span>
                    </a>
                </div>

                <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
                    <div className="navbar-start has-text-centered">
                        <a href="#home" className="navbar-item has-text-white">
                            Home
                        </a>

                        <a href="#benefitst" className="navbar-item has-text-white">
                            Benefits
                        </a>

                        <a href="#services" className="navbar-item has-text-white">
                            Gallery
                        </a>

                        <a href="#team" className="navbar-item has-text-white">
                            Road Map
                        </a>

                        <a className="navbar-item has-text-white ">Team</a>

                        <a href="#faq" className="navbar-item has-text-white">
                            FAQ's
                        </a>
                    </div>

                    <div className="navbar-end has-text-centered">
                        <div className="navbar-item px-1">
                            <a
                                role="button"
                                className="button has-background-hwhite-o-2 is-borderless "
                                href="https://opensea.io/collection/surrealsociety-official"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={onBurgerClicked2}
                            >
                                <span className="icon has-text-white">
                                    <i className="fab fa-twitter"></i>
                                </span>
                            </a>
                        </div>
                        <div className="navbar-item px-1">
                            <a
                                role="button"
                                className="button has-background-hwhite-o-2 is-borderless "
                                href="https://www.instagram.com/asurrealsociety/"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={onBurgerClicked2}
                            >
                                <span className="icon has-text-white">
                                    <i className="fab fa-instagram"></i>
                                </span>
                            </a>
                        </div>
                        <div className="navbar-item px-1">
                            <a
                                role="button"
                                className="button has-background-hwhite-o-2 is-borderless "
                                href="https://discord.com/invite/surrealsociety"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={onBurgerClicked2}
                            >
                                <span className="icon has-text-white">
                                    <i className="fab fa-discord"></i>
                                </span>
                            </a>
                        </div>
                        <div className="navbar-item px-1">
                            <a
                                role="button"
                                className="button has-background-hwhite-o-2 is-borderless "
                                href="https://twitter.com/ASurrealSociety"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={onBurgerClicked2}
                            >
                                <span className="icon has-text-white">
                                    <i className="fab fa-twitter"></i>
                                </span>
                            </a>
                        </div>

                        <div className="navbar-item">
                            <ConnectButton className="button is-hgra1 has-text-white is-medium" />
                        </div>
                    </div>
                </div>
            </div>
        </animated.nav>
    );
};

export default Navbar;

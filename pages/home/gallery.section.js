import Image from 'next/image';
import dynamic from 'next/dynamic';

import { Fragment } from 'react';

// const Splide = dynamic(() => import('src/components/splide'), { ssr: false });
import { Splide, SplideSlide } from 'splide-nextjs/react-splide';

import data from 'src/static/gallery.data';

import styles from './home.module.scss';

const options = {
    type: 'loop',
    rewind: false,
    arrows: 'true',
    perPage: 4,
    isNavigation: false,
    pagination: true,
    perMove: 1,
    breakpoints: {
        1200: {perPage: 3},
        800: {perPage: 2},
        600: {perPage: 1}
    }
}

const GallerySection = () => {


    return(
        <Fragment>
            <h1 className={`title has-text-white has-text-centered mb-6 is-size-2 ${styles.title}`} data-title="GALLERY">GALLERY</h1>
            <br/><br/><br/>

            <div className="container">
                    
                 <Splide options={options}> 

                    {
                        data.map((item, i) =>                                 
                            <SplideSlide key={i}>
                                <div className="mx-3">
                                    <video src={item.src} autoPlay loop muted playsInline/>
                                </div>                                
                            </SplideSlide>
                        )
                        
                    }                    
                  </Splide> 
            </div>
            <br/><br/><br/>
        </Fragment>
    );
}

export default GallerySection;
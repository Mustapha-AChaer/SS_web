import { useEffect, useState } from 'react';
import Particles from 'react-tsparticles';

import options from './particles-options.js';

const ParticlesBanner = () => {
    const particlesInit = (main) => {
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
        const canvas = container.canvas;

        canvas.element.style.position = 'relative';
        canvas.element.style.height = '180vh';
    };

    return <Particles id="tsparticles" options={options} init={particlesInit} loaded={particlesLoaded} />;
};

export default ParticlesBanner;

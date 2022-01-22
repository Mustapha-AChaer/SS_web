const options = {
    background: {
        color: {
            value: '#0B0C22',
        },
    },
    fpsLimit: 30,
    interactivity: {
        events: {
            onClick: {
                enable: false,
                mode: 'push',
            },
            onHover: {
                enable: false,
                mode: 'repulse',
            },
            resize: true,
        },
        modes: {
            bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
            },
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: '#ffffff',
        },
        links: {
            color: '#ffffff',
            distance: 150,
            enable: true,
            opacity: 0.08,
            width: 1,
        },
        collisions: {
            enable: true,
        },
        move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 2,
            straight: false,
        },
        number: {
            density: {
                enable: false,
                area: 1000,
            },
            value: 40,
        },
        opacity: {
            value: 0.08,
            random: false,
        },
        shape: {
            type: 'circle',
        },
        size: {
            random: true,
            value: 5,
        },
    },
    detectRetina: true,
};

export default options;

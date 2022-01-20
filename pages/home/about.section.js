const { Fragment } = require('react');

import styles from './home.module.scss';

import aboutData from 'src/static/about.data';

const AboutSection = () => {
    return (
        <Fragment>
            <h1
                className={`title has-text-white has-text-centered mb-6 is-size-2 ${styles.title}`}
                data-title="THE SOCIETY"
            >
                THE SOCIETY
            </h1>
            <br />

            <div className="container">
                <div className="columns">
                    {aboutData.map((item, i) => (
                        <div className="column" key={i}>
                            <div className={`box has-background-hdeepblue ${styles.box}`}>
                                <h1 className="title has-text-white mb-5" style={{ fontSize: '55px' }}>
                                    {item.icon}
                                </h1>
                                <h1 className="title has-text-white mb-5 is-size-4">{item.title}</h1>
                                <p className="has-text-white">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    );
};

export default AboutSection;

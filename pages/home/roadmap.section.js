const { Fragment } = require('react');

import styles from './home.module.scss';

import roadmapData from 'src/static/roadmap.data';

import logo from 'src/media/logo.gif';

const AboutSection = () => {
    return (
        <Fragment>
            <h1
                className={`title has-text-white has-text-centered mb-6 is-size-2 ${styles.title}`}
                data-title="ROADMAP"
            >
                ROADMAP
            </h1>
            <br />

            <div className="container" style={{ overflow: 'visible' }}>
                <div className="columns" style={{ overflow: 'visible' }}>
                    <div className="column is-5" style={{ overflow: 'visible' }}>
                        <img src={logo.src} alt="" width="350" style={{ position: 'sticky', top: '20rem' }} />
                    </div>
                    <div className="column">
                        <div className="timeline">
                            {roadmapData.map((item, i) => (
                                <div className={'timeline-item ' + styles.timeline_item} key={i}>
                                    <div
                                        className={
                                            'timeline-marker has-background-white is-image is-32x32 ' +
                                            styles.timeline_marker
                                        }
                                    >
                                        <i className={`fa-solid fa-${i}`}></i>
                                    </div>
                                    <div className="timeline-content " style={{ width: '100%', paddingLeft: '3rem' }}>
                                        <div
                                            className={`box has-background-hdeepblue ${styles.box}`}
                                            style={{ width: '100%', padding: '2.5rem' }}
                                        >
                                            <h1 className="title has-text-white is-uppercase mb-5">{item.title}</h1>
                                            <p className="has-text-white">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default AboutSection;

const { Fragment } = require("react");

import faqData from 'src/static/faq.data';

import styles from './home.module.scss';

const FaqSection = () => {
    return(
        <Fragment>
            <h1 className={`title has-text-white has-text-centered mb-6 is-size-2 ${styles.title}`} data-title="FAQ">FREQUENTLY ASKED QUESTIONS</h1>
            <br/><br/><br/>

            <div className="container is-max-desktop">
                <ul>
                    {
                        faqData.map((item, i) =>
                            <details style={{borderBottom: '1px solid #3C3D4E'}} key={i}>
                                <summary className="has-text-white is-size-6  pr-5">{item.question}</summary>
                                <div className="has-text-white pl-5"><item.answer/></div>
                            </details>
                        )
                    }
                </ul>
            </div>            
        </Fragment>
    );
}

export default FaqSection;
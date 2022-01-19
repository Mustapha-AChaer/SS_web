const { Fragment } = require("react");

import teamData from 'src/static/team.data';
import styles from './home.module.scss';

const TeamSection = () => {
    return(
        <Fragment>
            <h1 className={`title has-text-white has-text-centered mb-6 is-size-2 ${styles.title}`} data-title="TEAM">TEAM</h1>
            <br/><br/><br/>

            <div className="container ">

                <div className="columns is-multiline">
                    {
                        teamData.map((member, i) =>
                            <div className="column is-4-fullhd is-6-desktop is-6-tablet is-12-mobile" key={i}>
                                <div className={styles.team_box}>                                    
                                    <div className="media">
                                        <div className="media-left" style={{height: '170px'}}>
                                            
                                            <img src={member.image} alt="Image" width="170"/>
                                            
                                        </div>
                                        <div className="media-content pt-6">
                                            
                                            <h1 className="title is-size-4 has-text-white">{member.name}</h1>
                                            <h1 className="subtitle is-size-6 has-text-white mb-2">{member.position}</h1>
                                            <h1 className="subtitle is-size-6"><a className="has-text-white">Read more </a></h1>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </Fragment>
    );
}

export default TeamSection;
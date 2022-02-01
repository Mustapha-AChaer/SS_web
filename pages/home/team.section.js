const { Fragment } = require('react');

import { useDispatch } from 'react-redux';
import { open_modal } from 'src/redux/actions/modalActions';
import teamData from 'src/static/team.data';
import styles from './home.module.scss';

const TeamSection = () => {
    const dispatch = useDispatch();

    const openTeamModal = e => {
        const modalData = e.currentTarget.dataset.member;
        dispatch(open_modal('teamModal', JSON.parse(modalData)));
    };

    return (
        <Fragment>
            <h1 className={`title has-text-white has-text-centered mb-6 is-size-2 ${styles.title}`} data-title="TEAM">
                TEAM
            </h1>
            <br />

            <div className="container ">
                <div className="columns is-multiline">
                    {teamData.map((member, i) => (
                        <div className="column is-4-fullhd is-6-desktop is-6-tablet is-12-mobile" key={i}>
                            <div className={styles.team_box}>
                                <div className="media">
                                    <div className="media-left" style={{ height: '170px' }}>
                                        <img src={member.image} alt="Image" width="170" />
                                    </div>
                                    <div className="media-content pt-6">
                                        <h1 className="title is-size-4 has-text-white">{member.name}</h1>
                                        <h1 className="subtitle is-size-6 has-text-white mb-2">{member.position}</h1>
                                        <h1 className="subtitle is-size-6" data-member={JSON.stringify(member)}>
                                            <div className={`${styles.icons}`}>
                                                {member.discord && (
                                                    <a className={styles.icon} title={member.discord}>
                                                        <i class="fab fa-discord"></i>
                                                    </a>
                                                )}
                                                {member.twitter && (
                                                    <a
                                                        className={styles.icon}
                                                        title={member.twitter}
                                                        href={member.twitter}
                                                    >
                                                        <i class="fab fa-twitter"></i>
                                                    </a>
                                                )}
                                                {member.linkedin && (
                                                    <a
                                                        className={styles.icon}
                                                        title={member.linkedin}
                                                        href={member.linkedin}
                                                    >
                                                        <i class="fab fa-linkedin"></i>
                                                    </a>
                                                )}
                                                {member.instagram && (
                                                    <a
                                                        className={styles.icon}
                                                        title={member.instagram}
                                                        href={member.instagram}
                                                    >
                                                        <i class="fab fa-instagram"></i>
                                                    </a>
                                                )}
                                                {member.website && (
                                                    <a
                                                        className={styles.icon}
                                                        title={member.website}
                                                        href={member.website}
                                                    >
                                                        <i class="fas fa-satellite-dish"></i>
                                                    </a>
                                                )}
                                            </div>
                                            {/* onClick={openTeamModal} */}
                                            {/* <a className="has-text-white">Read more </a> */}
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    );
};

export default TeamSection;

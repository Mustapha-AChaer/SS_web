import Modal from 'src/components/modal';

import { useSelector } from 'react-redux';

const TeamModal = (props) => {
    const { teamModal } = useSelector((state) => state.modalReducer);
    const { data } = teamModal;

    return (
        <Modal isOpen={teamModal.isOpen}>
            <div className="box has-background-hgra2 p-0" style={{ borderRadius: '0px', border: '10px solid white' }}>
                <div className="columns is-vcentered is-marginless">
                    <div className="column p-0 has-text-centered-touch" style={{ height: '100%' }}>
                        <figure className="image is-square">
                            <img src={data.image} alt="Image" />
                        </figure>
                    </div>
                    <div className="column px-5">
                        <h1 className="title is-size-2 has-text-white has-text-centered-touch">{data.name}</h1>
                        <h1 className="subtitle is-size-6 has-text-white has-text-centered-touch">{data.position}</h1>
                        <p
                            className="has-text-white has-text-justified coolscroll pr-3"
                            style={{ maxHeight: '200px', overflowY: 'auto' }}
                        >
                            {data.description}
                        </p>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default TeamModal;

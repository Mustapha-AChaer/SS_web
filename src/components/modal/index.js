import PropTypes from 'prop-types';
import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { close_modal } from 'src/redux/actions/modalActions';

const Modal = (props) => {
    const { currentModal } = useSelector((state) => state.modalReducer);
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(close_modal(currentModal));
    };

    //close modal on esc key press
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') dispatch(close_modal(currentModal));
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [dispatch, currentModal]);

    return (
        <div className={`modal is-above-glasspanel ${props.isOpen ? 'is-active' : ''}`} onClick={onClick}>
            <div className="modal-background has-background-hpurple-o-2 has-bg-blur-2"></div>
            <div className="modal-content px-4">{props.children}</div>
            <button className="modal-close is-large" aria-label="close" onClick={onClick}></button>
        </div>
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    children: PropTypes.node,
};

export default Modal;

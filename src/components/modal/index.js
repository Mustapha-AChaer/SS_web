import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { close_modal } from 'src/redux/actions/modalActions';

const animateCSS = (element, animation, prefix = 'animate__') =>
    // We create a Promise and return it
    new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`;
        const node = document.querySelector(element);

        node.classList.add(`${prefix}animated`, animationName);

        // When the animation ends, we clean the classes and resolve the Promise
        function handleAnimationEnd(event) {
            event.stopPropagation();
            node.classList.remove(`${prefix}animated`, animationName);
            resolve('Animation ended');
        }

        node.addEventListener('animationend', handleAnimationEnd, { once: true });
    });

const Modal = (props) => {
    const { currentModal } = useSelector((state) => state.modalReducer);
    const dispatch = useDispatch();

    const modal = useRef(null);

    const closeAfterAnimation = async () => {
        await animateCSS('#____modal', 'fadeOutDown');
        dispatch(close_modal(currentModal));
    };

    //close modal on esc key press
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') closeAfterAnimation();
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [dispatch, currentModal]);

    animateCSS('#____modal', 'fadeInDown');

    return (
        <div className={`modal is-above-glasspanel ${props.isOpen ? 'is-active' : ''} `} onClick={closeAfterAnimation}>
            <div className="modal-background has-background-hpurple-o-2 has-bg-blur-2"></div>
            <div id="____modal" className="modal-content px-4 animate__faster" ref={modal}>
                {props.children}
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={closeAfterAnimation}></button>
        </div>
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    children: PropTypes.node,
};

export default Modal;

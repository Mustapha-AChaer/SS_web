import { useEffect, useRef } from 'react';

import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { close_modal } from 'src/redux/actions/modalActions';

const Modal = props => {

    const dispatch = useDispatch();

    let ref = useRef(null);

    useEffect(
        () => {

            const handleClickOutside = e => {        
                if (ref.current && !ref.current.contains(e.target))
                    dispatch(close_modal(props.modalName));
            };
        
            const closeOnEsc = e => {
                if(e.keyCode === 27)
                    dispatch( close_modal(props.modalName) );
            }

            if(props.isOpen){
                document.addEventListener('mousedown', handleClickOutside);
                window.addEventListener('keydown', closeOnEsc);
            }
                

            return () =>{
                document.removeEventListener('mousedown', handleClickOutside);
                window.removeEventListener('keydown', closeOnEsc);
            } 

        }, [props.isOpen, dispatch, props.modalName]
    );

    return(
        <div ref={ref} className={` panel-modal resize-manager is-above-glasspanel ${props.isOpen ? 'isOpen' : ''}`}>
            { props.children }
        </div>
    );
}

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    modalName: PropTypes.string.isRequired,
    children: PropTypes.node
};


export default Modal;
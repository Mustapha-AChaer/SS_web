import { useDispatch, useSelector } from 'react-redux';
import { close_modal } from 'src/redux/actions/modalActions';

import styles from './style.module.scss';

const GlassPanel = (props) => {
    const { glassPanel, currentModal } = useSelector((state) => state.modalReducer);
    const dispatch = useDispatch();

    const onClick = () => {
        console.log('clicked');
        dispatch(close_modal(currentModal));
    };

    return <div className={`${styles.glass_panel} ${glassPanel.isOpen ? styles.isOpen : ''}`} onClick={onClick}></div>;
};

export default GlassPanel;

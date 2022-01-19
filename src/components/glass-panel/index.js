import { useSelector } from 'react-redux';
import styles from './style.module.scss';

const GlassPanel = props => {

    const {glassPanel} = useSelector(state => state.modalReducer);
    
    return(
        <div className={`${styles['glass-panel']} ${glassPanel.isOpen ? styles.isOpen : ''}`}></div>
    );
}

export default GlassPanel;
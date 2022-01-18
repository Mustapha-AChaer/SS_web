import PropTypes from 'prop-types';
import styles from './section.module.scss';

const SectionLayout = ({className, children, ...rest}) => {        
    return(
        <section className={`${styles.section_layout} ${className}`} {...rest}>
            <div className="container px-5">
                {children}
            </div>
        </section>
    );
}

SectionLayout.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired
}

export default SectionLayout;
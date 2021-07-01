import React from 'react';
import styles from './CSSModule.module.scss';

const CSSMoudle = () => {
    return (
        <div className={`${styles.wrapper} ${styles.inverted}`}>
            안녕하세요, 저는 <span className="something">CSS Moudle!</span>
        </div>
    );
};

export default CSSMoudle;
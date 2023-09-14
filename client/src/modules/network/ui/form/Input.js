import React from 'react';
import './styles.css';
import { useSelector } from 'react-redux';
const Input = ({ label, ...rest }) => {
    const { settings } = useSelector((store) => store.mainReducer);
    return (
        <div className="custom-input-container">
            <label id="custom-input-label" className={settings?.darkTheme && 'white-text'}>
                {label}
            </label>
            <input
                id={'custom-input'}
                {...rest}
                className={settings?.darkTheme ? `${rest.className}  white-text` : rest.className}
            />
        </div>
    );
};

export default Input;

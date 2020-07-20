import React from 'react';
import PropTypes from 'prop-types';

import css from './style.module.css';

const Input = ({ input, label, type, meta: { touched, error } }) => (
  <div className={css.inputWrapper}>
    <label className={css.inputLabel}>{label}</label>
    <div className={css.inputFieldWrapper}>
      <input {...input} className={css.inputField} placeholder={label} type={type} />
      {touched && error && <span className={css.inputError}>{error}</span>}
    </div>
  </div>
);

Input.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object,
};

export { Input };

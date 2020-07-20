import React from 'react';
import PropTypes from 'prop-types';

import css from './style.module.css';

const TextArea = ({ input, label, meta: { touched, error } }) => (
  <div className={css.inputWrapper}>
    <label className={css.inputLabel}>{label}</label>
    <div className={css.inputFieldWrapper}>
      <textarea {...input} className={css.inputField} placeholder={label} rows="4" cols="30" />
      {touched && error && <span className={css.inputError}>{error}</span>}
    </div>
  </div>
);

TextArea.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object,
};

export { TextArea };

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import css from './style.module.css';

const Button = ({ children, primary, secondary, disabled, onClick, className }) => {
  const buttonClassName = cn(css.button, {
    [css.primary]: primary,
    [css.secondary]: secondary,
    [css.disabled]: disabled,
    [className]: className,
  });

  return (
    <button onClick={onClick} className={buttonClassName}>
      {children}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node,
};

export { Button };

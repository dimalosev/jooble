import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import css from './style.module.css';

const Button = ({ children, primary, secondary, disabled, onClick, className, type }) => {
  const buttonClassName = cn(css.button, {
    [css.primary]: primary,
    [css.secondary]: secondary,
    [css.disabled]: disabled,
    [className]: className,
  });

  const buttonElementProps = {
    type,
    disabled,
    onClick,
    className: buttonClassName,
  };

  return <button {...buttonElementProps}>{children}</button>;
};

Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node,
};

export { Button };

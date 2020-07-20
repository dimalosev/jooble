import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import css from './style.module.css';

const Plus = ({ onClick, className }) => (
  <button onClick={onClick} className={cn(css.plus, { [className]: className })} />
);

Plus.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export { Plus };

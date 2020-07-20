import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const Portal = ({ children }) => {
  const rootContainer = document.getElementById('root');
  const divElement = document.createElement('div');

  useEffect(() => {
    rootContainer.appendChild(divElement);
    return () => rootContainer.removeChild(divElement);
  }, [divElement, rootContainer]);

  return createPortal(children, divElement);
};

Portal.propTypes = {
  children: PropTypes.node,
};

export { Portal };

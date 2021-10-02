import React from 'react';
import PropTypes from 'prop-types';
import LoadingScreen from '../loading-screen/loading-screen';

function LoadWrapper({ isLoad, children, Spinner = LoadingScreen }) {
  return (isLoad && children) || <Spinner />;
}

LoadWrapper.propTypes = {
  isLoad: PropTypes.bool.isRequired,
  children: PropTypes.any,
  Spinner: PropTypes.func,
};

export default LoadWrapper;

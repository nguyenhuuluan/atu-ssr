/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
// nodejs library that concatenates classes
import classNames from 'classnames';

// @material-ui/core components
import Button from '@material-ui/core/Button';

// core components

import style from './MyButton.module.scss';

const MyButton = React.forwardRef((props, ref) => {
  const {
    color,
    round,
    children,
    fullWidth,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    className,
    ...rest
  } = props;

  const btnClasses = classNames({
    [style.button]: true,
    [style[size]]: size,
    [style[color]]: color,
    [style.round]: round,
    [style.fullWidth]: fullWidth,
    [style.disabled]: disabled,
    [style.simple]: simple,
    [style.block]: block,
    [style.link]: link,
    [style.justIcon]: justIcon,
    [className]: className,
  });
  console.log(btnClasses);
  return (
    <Button {...rest} ref={ref} className={btnClasses}>
      {children}
    </Button>
  );
});

MyButton.propTypes = {
  color: PropTypes.oneOf([
    'primary',
    'info',
    'success',
    'warning',
    'danger',
    'brightYellow',
    'red',
    'blueGreen',
    'rose',
    'white',
    'facebook',
    'twitter',
    'google',
    'github',
    'transparent',
  ]),
  size: PropTypes.oneOf(['sm', 'lg']),
  simple: PropTypes.bool,
  round: PropTypes.bool,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  link: PropTypes.bool,
  justIcon: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default MyButton;

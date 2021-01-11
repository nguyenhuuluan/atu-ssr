/* eslint-disable react/require-default-props */
import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// @material-ui/core components
// @material-ui/icons

import style from './CardHeader.module.scss';

const CardHeader = (props) => {
  const { className, children, color, plain, ...rest } = props;
  const carHeaderClass = `${color}CardHeader`;
  const cardHeaderClasses = classNames({
    [style.cardHeader]: true,
    [style[carHeaderClass]]: color,
    [style.cardHeaderPlain]: plain,
    [className]: className !== undefined,
  });
  return (
    <div className={cardHeaderClasses} {...rest}>
      {children}
    </div>
  );
};

CardHeader.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['warning', 'success', 'danger', 'info', 'primary', 'brightYellow']),
  plain: PropTypes.bool,
  children: PropTypes.node,
};

export default CardHeader;

/* eslint-disable react/require-default-props */
import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// @material-ui/core components
// @material-ui/icons

const style = {
  cardFooter: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: '0.9375rem 1.875rem',
  },
};

const CardFooter = (props) => {
  //   const classes = useStyles();
  const { className, children, ...rest } = props;
  const cardFooterClasses = classNames({
    [className]: className !== undefined,
    [style.cardFooter]: true,
  });
  return (
    <div className={cardFooterClasses} {...rest}>
      {children}
    </div>
  );
};

CardFooter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default CardFooter;

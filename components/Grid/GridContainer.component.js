import { Grid, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  grid: {
    marginRight: '-15px',
    marginLeft: '-15px',
    width: 'auto',
  },
});

const GridContainer = (props) => {
  const { children, className, ...rest } = props;
  const classes = useStyles();
  return (
    <Grid container {...rest} className={`${classes.grid} ${className}`}>
      {children}
    </Grid>
  );
};

GridContainer.defaultProps = {
  className: '',
  children: '',
};

GridContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default GridContainer;

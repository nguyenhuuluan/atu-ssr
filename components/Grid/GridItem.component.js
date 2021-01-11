// import { Grid } from "@material-ui/core";
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  grid: {
    position: 'relative',
    width: '100%',
    minHeight: '1px',
    paddingRight: '15px',
    paddingLeft: '15px',
    flexBasis: 'auto',
  },
});

const GridItem = (props) => {
  const classes = useStyles();
  const { children, className, ...rest } = props;
  return (
    <Grid item {...rest} className={`${classes.grid} ${className}`}>
      {children}
    </Grid>
  );
};

GridItem.defaultProps = {
  className: '',
  children: '',
};

GridItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
export default GridItem;

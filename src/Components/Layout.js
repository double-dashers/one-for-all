import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import { useWindowDimensions } from '../utils/WindowDimensionsProvider';
import Header from './Header';

const useStyles = createUseStyles({
  main: {
    padding: '2vw',
  },
});

const Layout = props => {
  const { width } = useWindowDimensions();

  const { children, breakpoint } = props;
  const classes = useStyles();
  return (
    <div>
      {width > breakpoint ? <Header /> : <div>Mobile Header goes here</div>}
      {/* <Header /> */}
      <div>
        <main className={classes.main}>{children}</main>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  breakpoint: PropTypes.number.isRequired,
};

export default Layout;

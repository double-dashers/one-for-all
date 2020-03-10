import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import Header from './Header';

const useStyles = createUseStyles({
  main: {
    padding: '2vw',
  },
});

const Layout = props => {
  const { children } = props;
  const classes = useStyles();
  return (
    <div>
      <Header />
      <div>
        <main className={classes.main}>{children}</main>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;

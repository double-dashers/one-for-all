import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

const Layout = props => {
  const { children } = props;
  return (
    <div>
      <Header />
      <div>
        <main style={{ padding: '2vw' }}>{children}</main>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;

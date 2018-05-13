import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Header, Container } from 'semantic-ui-react';

const MainLayout = ({ children }) => (
  <Container>
    <Logo/>
    {children}
    <Footer/>
  </Container>
);

const Logo = () => (
  <Segment>
    <Header>
      Header
    </Header>
  </Segment>
);

const Footer = () => (
  <Segment>
    Footer
  </Segment>
);

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;

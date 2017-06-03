/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Header from 'components/Header';
import Footer from 'components/Footer';
import withProgressBar from 'components/ProgressBar';
import 'react-select/dist/react-select.css';


const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  margin-top: 100px;
  margin-bottom: 50px;
`;

export function App(props) {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - DibitPanel"
        defaultTitle="DibitPanel"
        meta={[
          {name: 'description', content: 'A highly scalable reservation system'},
        ]}
      />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
      <link rel="stylesheet" href="https://bootswatch.com/flatly/bootstrap.min.css"/>
      <link rel="stylesheet" href="https://npmcdn.com/react-selectize@2.1.0/dist/index.min.css"/>
      <div className="container">
        <Header />
        <ContentWrapper>
          {React.Children.toArray(props.children)}
        </ContentWrapper>
      </div>
      <Footer />
    </AppWrapper>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default withProgressBar(App);

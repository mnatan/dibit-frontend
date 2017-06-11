/*
 * SelectPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Helmet from 'react-helmet';

export class SelectPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <article>
        <Helmet
          title="Select Example"
          meta={[
            {name: 'description', content: 'React-Select presentation'},
          ]}
        />
        <div>
          test
        </div>
      </article>
    );
  }
}

SelectPage.propTypes = {};

export default SelectPage;

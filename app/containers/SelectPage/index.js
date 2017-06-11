/*
 * SelectPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Helmet from 'react-helmet';
import {createStructuredSelector} from 'reselect';
import {makeSelectRepos, makeSelectLoading, makeSelectError} from 'containers/App/selectors';

export class SelectPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    const {loading, error, repos} = this.props;
    const reposListProps = {
      loading,
      error,
      repos,
    };

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

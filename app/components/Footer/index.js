import React from 'react';
import {FormattedMessage} from 'react-intl';

import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';
import {Children} from 'react';
import styled from 'styled-components'

const StyledFooter = styled.footer`
  margin-left: -16px;
  position: fixed;
  padding: 5px 0;
  color: white;
  height: 30px;
  bottom: 0;
  width: 100%;
`;

const PaddedSection = styled.section`
  &:not(:first-child){
    margin-left: 20px;
  }
`;

function FooterSectionLeft(props) {
  return (
    <PaddedSection className="pull-left">
      {Children.toArray(props.children)}
    </PaddedSection>
  )
}

function FooterSectionRight(props) {
  return (
    <PaddedSection className="pull-right">
      {Children.toArray(props.children)}
    </PaddedSection>
  )
}

function Footer() {
  return (
    <StyledFooter className="navbar-default">
      <div className="container">
        <FooterSectionLeft>
          <FormattedMessage {...messages.licenseMessage} />
        </FooterSectionLeft>
        <FooterSectionRight>
          <FormattedMessage
            {...messages.authorMessage}
            values={{
              author: <A href="https://github.com/mnatan">Marcin Natanek</A>,
            }}
          />
        </FooterSectionRight>
        <FooterSectionRight>
          <LocaleToggle />
        </FooterSectionRight>
      </div>
    </StyledFooter>
    // < Wrapper >
    // < section >
    // <FormattedMessage {...messages.licenseMessage} />
    // < / section >
    // < section >
    // <LocaleToggle />
    // < / section >
    // < section >
    // <FormattedMessage
    //       {...messages.authorMessage}
    //       values={{
    //         author: <A href="https://twitter.com/mxstbr">Max Stoiber</A>,
    //       }}
    //     />
    //   </section>
    // </Wrapper>
  );
}

export default Footer;

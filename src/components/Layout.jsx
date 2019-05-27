import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import { createGlobalStyle } from 'styled-components';
import Footer from './Footer';
import Header from './Header';

const GlobalStyle = createGlobalStyle`
  ::selection {
    /* TODO: Update Selection Color */
    background: deeppink;
    color: white;
  }
  /* TODO: Add scrollbar styles */
`;

const Layout = ({ children }) => (
  <div>
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              title
              language
            }
          }
        }
      `}
      render={data => (
        <Helmet
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          defaultTitle={data.site.siteMetadata.title}
        >
          <html lang={data.site.siteMetadata.language} />
        </Helmet>
      )}
    />
    <GlobalStyle />
    <Header />

    <div>{children}</div>

    <Footer>
      <div>Lane Lourcey | 2019 | WIP</div>
    </Footer>
  </div>
);

export default Layout;

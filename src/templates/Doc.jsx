import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';

const DocHeader = ({ title, description }) => {
  return (
    <header>
      <h1>{title}</h1>
      <p>{description}</p>
    </header>
  );
};

const DocToc = ({ tableOfContents }) => (
  <aside dangerouslySetInnerHTML={{ __html: tableOfContents }} />
);

const DocContent = ({ html }) => (
  <div dangerouslySetInnerHTML={{ __html: html }} />
);

const StyledDocTemplate = styled.div`
  display: flex;
  flex-direction: row;
`;

// eslint-disable-next-line react/prefer-stateless-function
export default class DocTemplate extends React.Component {
  render() {
    const { location } = this.props;
    const post = this.props.data.markdownRemark;
    const { section, slug } = post.fields;
    const { title, description } = post.frontmatter;
    const { tableOfContents } = post;

    return (
      /* TODO: Add SEO Component
        <SEO
          title={title}
          description={description}
          slug={slug}
          article />
      */
      <Layout location={location}>
        <StyledDocTemplate>
          <nav>
            <Sidebar
              location={location}
              sidebar={section}
              tableOfContents={tableOfContents}
            />
          </nav>
          <main>
            <article>
              <DocHeader title={title} description={description} />
              <DocToc tableOfContents={tableOfContents} />
              <DocContent html={post.html} />
              {/* // ? TODO: DocFooter - prev&next ? */}
            </article>
          </main>
        </StyledDocTemplate>
      </Layout>
    );
  }
}

export const query = graphql`
  query DocBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      tableOfContents
      html
      frontmatter {
        title
        description
      }
      fields {
        section
        slug
      }
    }
    allSectionsYaml {
      edges {
        node {
          title
          description
          link
        }
      }
    }
  }
`;

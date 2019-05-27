import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

export default ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <div>
        <h1>My Site's Files</h1>
        <table>
          <thead>
            <tr>
              <th>path</th>
              <th>componentPath</th>
            </tr>
          </thead>
          <tbody>
            {data.allSitePage.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.path}</td>
                <td>{node.componentPath}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allSitePage {
      edges {
        node {
          path
          componentPath
        }
      }
    }
  }
`;

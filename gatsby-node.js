/* eslint-disable no-console */
const path = require(`path`);
const { createFilePath } = require('gatsby-source-filesystem');
// TODO: Redirects for first items in a section?

// Modifies nodes after creation
// Used here to create slug & section fields on markdown nodes based on folders
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  // Modify only markdown files
  if (node.internal.type === 'MarkdownRemark') {
    // Gets the file node of the folder the markdown node resides in
    const fileNode = getNode(node.parent);
    // Gets the relative path of said folder
    const parsedFilePath = path.parse(fileNode.relativePath);

    let slug = createFilePath({ node, getNode, basePath: 'content' });
    let section = parsedFilePath.dir;

    if (node.frontmatter.slug) {
      ({ slug } = node.frontmatter);
    }
    if (node.frontmatter.section) {
      ({ section } = node.frontmatter);
    }
    createNodeField({ node, name: 'slug', value: slug });
    createNodeField({ node, name: 'section', value: section });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(
        `
          query {
            allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "/content/" } }
            ) {
              edges {
                node {
                  fields {
                    slug
                    section
                  }
                  frontmatter {
                    title
                    description
                  }
                }
              }
            }
          }
        `,
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const docTemplate = path.resolve(`./src/templates/Doc.jsx`);
        const posts = result.data.allMarkdownRemark.edges;

        // Create Doc pages
        posts.forEach(post => {
          createPage({
            path: `${post.node.fields.slug}`,
            component: docTemplate,
            context: {
              slug: post.node.fields.slug,
              section: post.node.fields.section,
            },
          });
        });
        // ? Create redirects ?
        /*  redirects.forEach(({ from, to }) => {
              createRedirect({
                fromPath: from,
                redirectInBrowser: true,
                toPath: to
              })
              console.log(`Create redirect: ${  from  } --> ${  to}`)
            })
        */
      }),
    );
  });
};

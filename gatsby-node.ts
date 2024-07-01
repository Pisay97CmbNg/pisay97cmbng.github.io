import type { GatsbyNode } from "gatsby"
import { resolve } from 'path';

export const createPages : GatsbyNode['createPages'] = async ({ graphql, actions }) => {
    const { createPage } = actions
    const allMarkdown: {
        errors?: any;
        data?: { allMarkdownRemark: { nodes: { id: string, frontmatter: { slug?: string } }[] } };
    } = await graphql(`
          query AllArticles {
              allMarkdownRemark( filter: {fileAbsolutePath: {regex: "/articles/.*[.]md$/"}} )
              {
                  nodes
                  {
                      id
                      fileAbsolutePath
                      frontmatter {
                          title
                          slug
                      }
                  }
              }
          }
      `)

      const template = resolve('src/templates/article.tsx')
      allMarkdown.data?.allMarkdownRemark.nodes.forEach(node => {
        const { slug } = node.frontmatter
        if (!slug) return

        createPage({
          path: `${slug}`,
          component: template,
          context: { id: node.id }
        });
      })
}

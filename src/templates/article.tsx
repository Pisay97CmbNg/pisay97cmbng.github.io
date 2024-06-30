import * as React from "react"
import { graphql, HeadFC, PageProps } from "gatsby"
import TopNav from "../components/TopNav"

const ArticleTemplate = ({ data } : any) => {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark    

    return (
        <main>
            <TopNav selected={frontmatter.slug}></TopNav>

            <h1>{ frontmatter.title }</h1>
            <div
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </main>
    )
  }

export default ArticleTemplate

export const query = graphql`
  query TypegenPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }`

export const Head: HeadFC = ({ data }: any) => 
(
    <>
        <title>CMB - NG - {data.markdownRemark.frontmatter.title}</title>
        <link rel="stylesheet" href="/lib/bootstrap/css/bootstrap.css" />
        <link rel="stylesheet" href="/lib/bootstrap/css/bootstrap-reboot.css" />
        <link rel="stylesheet" href="/css/site.css" />
        <script src="/lib/bootstrap/js/bootstrap.bundle.min.js" />
    </>
)
    
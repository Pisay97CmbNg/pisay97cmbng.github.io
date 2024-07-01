import * as React from "react"
import { graphql, HeadFC, PageProps } from "gatsby"
import TopNav from "../components/TopNav"

const ArticleTemplate = (pageProps: PageProps<Queries.ArticleMarkdownPageQuery>) => {
    const { data } = pageProps
    const { markdownRemark } = data
    const { html, frontmatter } : any = markdownRemark

    return (
        <main>
            <TopNav path={pageProps.path}></TopNav>

            <h1>{ frontmatter.title }</h1>
            <div
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </main>
    )
  }

export default ArticleTemplate

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

export const query = graphql`
  query ArticleMarkdownPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }`
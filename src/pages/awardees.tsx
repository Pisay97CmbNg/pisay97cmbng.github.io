import * as React from "react"
import { graphql, type HeadFC, type PageProps } from "gatsby"
import TopNav from "../components/TopNav"

const IndexPage: React.FC<PageProps<Queries.AwardeesPageQuery>> = (pageProps) => {
  const { data } = pageProps

  return (
    <main>
      <TopNav path={pageProps.path}></TopNav>

      <div className="container">
        <div className="p-5 mb-4">
          <h1>
          Awardees
          </h1>
        </div>
        {
          data.allAwardeesYaml.nodes.map(awardYear => (
            <div className="card text-center my-3">
            <div className="card-body">
              <h5 className="card-title">{awardYear.year}</h5>
              <div className="row">
                <div className="col">
                <p><b>Awardees</b></p>
                {
                  awardYear?.awardees?.map(a => (
                      <div>{a?.name} - {a?.campus} <span className="badge bg-info">{a?.cluster}</span></div>
                  ))
                }
                </div>
              </div>
              <p className="card-text"></p>
            </div>
          </div>
          ))
        }
      </div>

    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => 
(
  <>
    <title>Past Awardees</title>
    <link rel="stylesheet" href="/lib/bootstrap/css/bootstrap.css" />
    <link rel="stylesheet" href="/lib/bootstrap/css/bootstrap-reboot.css" />
    <link rel="stylesheet" href="/css/site.css" />
    <script src="/lib/bootstrap/js/bootstrap.bundle.min.js" />
    </>
)

export const query = graphql`
  query AwardeesPage  {
    allAwardeesYaml {
      nodes {
        year
        ordinal
        awardees {
          name
          campus
          cluster
        }       
      }
    }
  }`
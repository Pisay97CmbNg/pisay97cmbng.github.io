import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import TopNav from "../components/TopNav"

const IndexPage: React.FC<PageProps> = (pageProps) => {
  return (
    <main>
      <TopNav path={pageProps.path}></TopNav>

      <h1>
      6th Natatanging Guro Awards 2024
      </h1>

      <p>
      The Philippine Science High School - Main Campus Batch of 1997 announces its partnership with the PSHS Foundation Inc. and PSHS Batch 1982, with support from the PSHS National Alumni Association and the PSHS System Administration, in the stewardship of the Dr. CLEOFE M. BACUÑGAN NATATANGING GURO Endowment Fund. The endowment fund is used primarily as the seed fund for the Dr. CLEOFE M. BACUÑGAN NATATANGING GURO Awards. 
      </p>
      <p>
      Established in 2007 by PSHS Batch 1982, the Dr. CLEOFE M. BACUÑGAN NATATANGING GURO Awards aims to maintain high teaching excellence in Science, Mathematics and Humanities in the PSHS System across all 16 campuses in the country.
      </p>
      <p>
      PSHS-MC Batch 1997 will be spearheading this year's 6th Dr. CLEOFE M. BACUÑGAN NATATANGING GURO Awards slated to be awarded in November 2024.
      </p>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => 
(
  <>
    <title>CMB - Natatanging Guro</title>
    <link rel="stylesheet" href="/lib/bootstrap/css/bootstrap.css" />
    <link rel="stylesheet" href="/lib/bootstrap/css/bootstrap-reboot.css" />
    <link rel="stylesheet" href="/css/site.css" />
    <script src="/lib/bootstrap/js/bootstrap.bundle.min.js" />
    </>
)
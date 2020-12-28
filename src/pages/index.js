import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Betbnb24" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
              <Image />
            </div>
    <h1>YOU set the price!</h1>
    <p>The future of rental.</p>
    <p>...coming soon</p>

  </Layout>
)

export default IndexPage

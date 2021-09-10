// Step 1: Import React
import { Link } from 'gatsby'
import * as React from 'react'
import Layout from './layout'

// Step 2: Define your component
const AboutHomePage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}

// Step 3: Export your component
export default AboutHomePage
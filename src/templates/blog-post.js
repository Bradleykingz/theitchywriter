import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Title from "../components/title"
import Footer from "../components/footer/footer";

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <div>
      <Layout>
        <Title as="h2">
          {post.frontmatter.title}
        </Title>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Layout>
      <Footer></Footer>
    </div>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
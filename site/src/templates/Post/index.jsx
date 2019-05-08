import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../../layout";
import UserInfo from "../../components/UserInfo/UserInfo";
import Disqus from "../../components/Disqus/Disqus";
import PostTags from "../../components/PostTags/PostTags";
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import SEO from "../../components/SEO/SEO";
import config from "../../../data/SiteConfig";
import "../b16-tomorrow-dark.css";
import s from "./s.module.scss";

export default class PostTemplate extends React.Component {
  render() {
    const { slug } = this.props.pageContext;
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }
    return (
      <Layout>
        <div>
          <Helmet>
            <title>{`${post.title} | ${config.siteTitle}`}</title>
            <meta
              property="og:image"
              content="https://i.imgur.com/rgfaPu6.jpg"
            />
            <meta
              property="twitter:image"
              content="https://i.imgur.com/rgfaPu6.jpg"
            />
          </Helmet>
          <SEO postPath={slug} postNode={postNode} postSEO />
          <article className={s.article}>
            <h1 className={s.title}>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
            <div className={s.postMeta}>
              <PostTags tags={post.tags} />
            </div>
          </article>
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
      }
      fields {
        nextTitle
        nextSlug
        prevTitle
        prevSlug
        slug
        date
      }
    }
  }
`;

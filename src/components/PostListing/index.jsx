import React from "react";
import { Link } from "gatsby";
import s from "./s.module.scss";

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }

  render() {
    const postList = this.getPostList();
    return (
      <div>
        {/* Your post list here. */
        postList.map(post => (
          <div key={post.title}>
            <Link to={post.path} className={s.title}>
              <h1>{post.title}</h1>
            </Link>
            <p>{post.excerpt}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default PostListing;

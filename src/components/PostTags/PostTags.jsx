import React, { Component } from "react";
import _ from "lodash";
import { Link } from "gatsby";
import s from "./styles.module.scss";

class PostTags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <div>
        {tags &&
          tags.map(tag => (
            <div className={s.wrapper}>
              <Link
                key={tag}
                style={{ textDecoration: "none" }}
                to={`/tags/${_.kebabCase(tag)}`}
              >
                <button className={s.tag}>{tag}</button>
              </Link>
            </div>
          ))}
      </div>
    );
  }
}

export default PostTags;

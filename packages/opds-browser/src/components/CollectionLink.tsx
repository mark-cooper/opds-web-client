import * as React from "react";
import Link from "./Link";

export default class CollectionLink extends Link<CollectionLinkProps> {
  processClick() {
    this.props.setCollectionAndBook(this.props.url, null);
  }

  href() {
    if (this.props.url.match(/complaints$/)) {
      console.log(this.props.pathFor(this.props.url, null));
    }
    if (this.props.pathFor) {
      return this.props.pathFor(this.props.url, null);
    }
  }
}
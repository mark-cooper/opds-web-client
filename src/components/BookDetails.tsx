import * as React from "react";

export default class BookDetails extends React.Component<BookProps, any> {
  render(): JSX.Element {
    let bookDetailsStyle = {
      position: "fixed",
      top: "200px",
      left: "50%",
      width: "800px",
      marginLeft: "-400px",
      padding: "30px",
      backgroundColor: "#fff",
      fontFamily: "Arial, Helvetica, sans-serif",
      zIndex: 20
    };

    let screenStyle = {
      position: "fixed",
      zIndex: 10,
      top: "0",
      bottom: "0",
      width: "100%",
      backgroundColor: "rgba(128, 128, 128, 0.8)"
    };

    return (
      <div>
        <div
          className="bookDetailsScreen"
          onClick={this.props.clearBook}
          style={screenStyle}></div>
        <div className="bookDetails" style={bookDetailsStyle}>
          <div style={{ float: "right" }}>
            <a href="javascript:void(0)"
              className="bookDetailsCloseLink"
              style={{ fontSize: "1em" }}
              onClick={this.props.clearBook}>
              Close
            </a>
          </div>
          <div className="bookImage" style={{ width: "150px", float: "left", textAlign: "right" }}>
            <img src={this.props.book.imageUrl} style={{ height: "150px" }}/>
          </div>
          <div className="bookDetailsTop" style={{ marginLeft: "1em", width: "550px", float: "left" }}>
            <h1 className="bookDetailsTitle" style={{ margin: 0 }}>{this.props.book.title}</h1>
            <h2 className="bookDetailsAuthors" style={{ marginTop: "0.5em", fontSize: "1.2em" }}>{this.props.book.authors.join(", ")}</h2>
            <div style={{ marginTop: "2em", color: "#888", fontSize: "0.9em" }}>
              <div className="bookDetailsPublished">Published: {this.props.book.published}</div>
              <div className="bookDetailsPublisher">Publisher: {this.props.book.publisher}</div>
            </div>
          </div>
          <div style={{ clear: "both" }}></div>
          <div
            className="bookDetailsSummary"
            style={{ marginTop: "1em", marginBottom: "1em", paddingTop: "1em", borderTop: "1px solid #ccc" }}
            dangerouslySetInnerHTML={{ __html: this.props.book.summary }}></div>
        </div>
      </div>
    );
  }
}
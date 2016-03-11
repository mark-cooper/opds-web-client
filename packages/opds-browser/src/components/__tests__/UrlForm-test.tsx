jest.dontMock("../UrlForm");

import * as React from "react";
import * as ReactDOM from "react-dom";
import * as TestUtils from "react-addons-test-utils";

import UrlForm from "../UrlForm";

describe("UrlForm", () => {
  it("shows the form", () => {
    let setCollectionAndBook = jest.genMockFunction();
    let form = TestUtils.renderIntoDocument(
      <UrlForm setCollectionAndBook={setCollectionAndBook} />
    );

    let input = TestUtils.findRenderedDOMComponentWithTag(form, "input");
    let button = TestUtils.findRenderedDOMComponentWithTag(form, "button");

    expect(input).toBeTruthy;
    expect(button).toBeTruthy;
  });

  it("fetches the url", () => {
    let setCollectionAndBook = jest.genMockFunction();
    let urlForm = TestUtils.renderIntoDocument(
      <UrlForm setCollectionAndBook={setCollectionAndBook} />
    );

    let form = TestUtils.findRenderedDOMComponentWithTag(urlForm, "form");
    let input = TestUtils.findRenderedDOMComponentWithTag(urlForm, "input");

    input["value"] = "some url";
    TestUtils.Simulate.submit(form);

    expect(setCollectionAndBook.mock.calls.length).toEqual(1);
    expect(setCollectionAndBook.mock.calls[0][0]).toEqual("some url");
  });
});
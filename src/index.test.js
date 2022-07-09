import React from 'react'
import ReactDOM from 'react-dom'
import App from './pages/App/App'
import StoreProvider  from './Context/store'

jest.mock("react-dom", () => ({ render: jest.fn() }))

describe("Application root", () => {
  it("should render without crashing", () => {
    const div = document.createElement("div")
    div.id = "root"
    document.body.appendChild(div)
    require("./index.js")
    expect(ReactDOM.render).toHaveBeenCalledWith(<StoreProvider><App /></StoreProvider>, div)
  });
});

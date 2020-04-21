import React from "react";
import "./App.css";
const marked = require("marked");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown:
        "# H1 Element\r\n" +
        "## H2 Element\r\n" +
        "[View my freeCodeCamp portfolio](https://www.freecodecamp.org/jondparadise)\r\n\r\n" +
        '`ReactDOM.render(<App />, document.getElementById("root")) //this call rendered my React app`\r\n' +
        "```javascript\r\n" +
        "function returnCodeFromCodeblock() { return true; }\r\n" +
        "```\r\n" +
        "1. This is a list item\r\n" +
        ">Quote from w3schools.com on blockquote usage:<br/><br/>For 50 years, WWF has been protecting the future of nature. The world&apos;s leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.&apos;\r\n" +
        "![alt-text](https://www.animalfactsencyclopedia.com/images/315xNxserval-cat-portrait.jpg.pagespeed.ic.fLn0kKXiy1.jpg)\r\n" +
        "**This is a cat**",
    };
    this.Change = this.Change.bind(this);
  }

  Change(e) {
    let type = e.target.value;
    this.setState({ markdown: type });
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <textarea
          id='editor'
          value={this.state.markdown}
          onChange={this.Change}
        ></textarea>

        <div
          id='preview'
          dangerouslySetInnerHTML={{ __html: marked(this.state.markdown) }}
        ></div>
      </div>
    );
  }
}

export default App;

import * as React from "react";
import * as ReactDOM from "react-dom";

class MyComponent extends React.Component<{}, {}> {
    render() {
        return <div>
            <h1>Hello World</h1>
            <p> This is my first React Component</p><span>Build by using ES6</span>
        </div>
    }
}

ReactDOM.render(<MyComponent />, document.getElementById('body'));

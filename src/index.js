import {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends Component {
  state = {  }

  render() { 
    return ( 
      <h1>Hello World</h1>
     );
  }
}
 
ReactDOM.render(<App/>, document.getElementById("root"));


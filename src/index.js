import {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Title from "./components/title";
import Text from "./components/text";
import Markdown from "./components/markdown";

class App extends Component {
  state = { 
    markdownText: "",
    inputText:""
   }

   HandleChange = (event) =>{
     this.setState({
      inputText: event.target.value
     })
   }

  render() { 
    return ( 
      <div>
        <Title />
        <Text value={this.state.inputText} onChange={this.HandleChange} />
        <Markdown input={this.state.markdownText}/>
      </div>
     );
  }
}
 
ReactDOM.render(<App/>, document.getElementById("root"));



import {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Title from "./components/title";
import Text from "./components/text";
import Markdown from "./components/markdown";

class App extends Component {
  constructor(){
    super();
    this.state = { 
      inputText: '',
     };
  
     this.HandleChange = this.HandleChange.bind(this);
    }

   HandleChange = (event) =>{
     this.setState({
      inputText: event.target.value
     })
   }

   SetPlaceholder = () => {
    const placeholder = "# Welcome to my React Markdown Previewer! \n ## This is a sub-heading... \n ### And here's some other cool stuff: \n **You can also make text bold... whoa!** \n *Or italic.* \n > blockquote \n 1. And there are numbered lists too. \n 2. Use just 1s if you want! \n 3. Third item \n - First item \n - Second item \n - Third item \n `code` \n --- \n [freeCodeCamp](https://www.freecodecamp.com) \n ---  \n ![freeCodeCamp Logo](https://cdn.iconscout.com/icon/free/png-256/free-codecamp-3521437-2944881.png)" ;

    return placeholder;
   }

   componentDidMount() {
     this.setState({
       inputText: this.SetPlaceholder()

     })
   }

  render() { 
    return ( 
      <div>
        <Title />
        <div id="main-container">
          <Text onChange={this.HandleChange} initial={this.state.inputText} />
          <Markdown input={this.state.inputText}/>
        </div>
      </div>
     );
  }

}
 
ReactDOM.render(<App/>, document.getElementById("root"));



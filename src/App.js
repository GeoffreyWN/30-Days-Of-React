import { Component } from 'react';
import Header from './components/header/header.component';
import './App.css';
import Number from './components/number/number.component';
import Hexadecimal from './components/hexadecimal/hexadecimal.component';
import Population from './components/population/population.component';

class App extends Component {
 state= {
   title: '30 days of React',
   numberstitle: 'NUMBER GENERATOR',
   numbers: Array.from(Array(100).keys()).map((i)=> ( i+ 1)),
   hexatitle: 'Hexadecimal Colours',
   color_array: Array.from(Array(32), (_, i) =>i + 1),
   testArray: Array(50).fill().map((_, i)=>(i +1)),
   populationTitle: 'World Population'
 }

 
  render() {
    return (
      <div className="App">
        <Header title={this.state.title} />
        <Number numbers={this.state.numbers} numberstitle={this.state.numberstitle} />
        <Hexadecimal  hexatitle={this.state.hexatitle} color_array={this.state.color_array}/>
        <Population populationTitle={this.state.populationTitle} />
      </div>
    );
  }
  
}

export default App;

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
   populationTitle: 'World Population',
 }


  render() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const Spring = [ "March", "April", "May"]
    const Summer = ["June", "July", "August",]
    const Autumn = ["September", "October", "November"]
    const Winter = ["December", "January", "February"]
    const month = new Date().getMonth()
    // const month = "January"

    const findCurrentSeason =() => {
      let season;
      if (Spring.includes(months[month])) {
        season = 'Spring' 
     }
      else if (Summer.includes(months[month])) {
        season = 'Summer'
     }
      else if (Autumn.includes(months[month])) {
        season = 'Autumn'
     }
      else if (Winter.includes(months[month])) {
        season = 'Winter'
     }
     console.log(season)
     return season
    }
    
 
    // const Autumn = new
    return (
      <div className={`App ${findCurrentSeason()}`}>
        <Header title={this.state.title} />
        <Number numbers={this.state.numbers} numberstitle={this.state.numberstitle} />
        <Hexadecimal  hexatitle={this.state.hexatitle} color_array={this.state.color_array}/>
        <Population populationTitle={this.state.populationTitle} />
      </div>
    );
  }
  
}

export default App;

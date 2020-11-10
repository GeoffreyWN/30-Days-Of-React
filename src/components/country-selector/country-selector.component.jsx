import React, {Component} from 'react';
import Button from '../button/button.component';

import countries from '../../data/countries';


class CountrySelector extends Component {
    state ={
      capital: countries[Math.floor(Math.random() * countries.length + 1) ].capital,
      name: countries[Math.floor(Math.random() * countries.length + 1) ].name,
      languages: countries[Math.floor(Math.random() * countries.length + 1) ].languages,
      population: countries[Math.floor(Math.random() * countries.length + 1) ].population,
      currency: countries[Math.floor(Math.random() * countries.length + 1) ].currency,
      flag: countries[Math.floor(Math.random() * countries.length + 1) ].flag
    }

    randomCountry = () => {
      let rndCountry = countries[Math.floor(Math.random() * countries.length + 1) ]

      this.setState({ 
        capital: rndCountry.capital,
        name: rndCountry.name,
        languages: rndCountry.languages,
        population: rndCountry.population,
        currency: rndCountry.currency,
        flag: rndCountry.flag,
      });
    }
    
  render() {
    // console.log(countries)

    const formatCapital = this.state.capital.length > 0 ? ( 
      <>
        <b>Capital: </b>
        {this.state.capital}
      </>
    ) : (  ''  )
  const formatLanguage = this.state.languages.length > 1 ? `Languages` : `Language`

    return(
      <div>

        <img src={this.state.flag} alt={this.state.name} height="400px" width="450px"/>
        <h3>{this.state.name.toUpperCase()}</h3>
        <ul>
          <li>{formatCapital}</li>
          <li><b>{formatLanguage}</b> : {this.state.languages.join(', ')}</li>
          <li><b>Population</b> : {this.state.population.toLocaleString()}</li>
          <li><b>Currency</b> : {this.state.currency}</li> 
        </ul>
        <Button text="Random Country" IWasClicked={this.randomCountry} />        
      </div>
    )
  }
    
  }


export default CountrySelector

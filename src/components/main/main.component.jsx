import React from 'react';
import CountrySelector from '../country-selector/country-selector.component';
import HexaColor from '../hexacolor/hexacolor.component';
import PersonAge from '../person-age/person-age.component';
import Result from '../result/result.component';
import Subscribebox from '../subscribe-box/subscribe-box.component';
import Techimages from '../techimages/techimages.component';
import TechsFormatted from '../techs/techs.component';
import Usercard from '../user-card/user-card.component';


const Main = ({techs, user}) => (
    <main>
      <div className='main-wrapper'>
        <p>
          Prerequisite to get started{' '}
          <strong>
            <em>react.js</em>
          </strong>
          :
        </p>
        
        <ul><TechsFormatted techs={techs} /></ul>
        <Result />
        <PersonAge user={user} />
        <Techimages />
        <Subscribebox />
        <Usercard user={user} techs={techs}/>
        <HexaColor></HexaColor>
        <HexaColor></HexaColor>
        <HexaColor></HexaColor>
        <CountrySelector></CountrySelector>
        
      </div>
    </main>
  )


export default Main

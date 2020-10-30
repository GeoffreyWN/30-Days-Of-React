// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



// index.js
import React from 'react'
import ReactDOM from 'react-dom'
// To get the root element from the HTML document
import kid from './images/kid.jpg';
import htmllogo from './images/html-5.png';
import csslogo from './images/css.svg';
import jslogo from './images/js-logo.png';
import reactlogo from './images/react.png'

// JSX element, header



// JSX element, header
const headerStyles = {backgroundColor: 'aliceblue', padding: '20'}
const Header = (props) => (
  <header>
    <div style={headerStyles}>
      <h1>{props.data.welcome}</h1>
      <h2>{props.data.title}</h2>
      <h3>{props.data.subtitle}</h3>
      <p>
        Instructor: {props.data.author.firstName} {props.data.author.lastName}
      </p>
      <small>Date: {showDate(props.data.date)}</small>
    </div>
  </header>
)

const numOne = 3
const numTwo = 2

const Result = () => (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
)

const yearBorn = 1820
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const PersonAge = (props) => (
  <p>
    {' '}
    {props.data.author.firstName} {props.data.author.lastName} is {props.age} years old
  </p>
)

// JSX element, main
const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)

const imagestyle={margin: '20px auto'};
const Techimages = () => (
  <div style={{ borderTop: 'aliceblue 2px solid', backgroundColor: 'lightgrey', display: 'flex', justifyContent: 'space-around', margin: '40px  auto', width: '80%'}}>
    <img style={imagestyle} src={htmllogo} alt="techimage" height="100px" width="100px"/>
    <img style={imagestyle} src={csslogo} alt="techimage" height="100px" width="100px"/>
    <img style={imagestyle} src={jslogo} alt="techimage" height="100px" width="100px"/>
    <img style={imagestyle} src={reactlogo} alt="techimage" height="100px" width="100px"/>
  </div>
)

const inputStyles = { border: 'none', padding: '10px', borderRadius: '5px'}
const Subscribebox = () => (
  <div style={{borderRadius: '10px', backgroundColor: 'aliceblue', margin: '20px auto', padding: '20px',  textAlign: 'center' }}>
    <h1>Subscribe</h1>
    <p>Sign up with your emal address to receive news and updates</p>
    <div style={{ display: 'flex', justifyContent: 'space-around', width: '50%', margin: '20px auto' }}>
      <input style={inputStyles} type="text" placeholder="firstname"/>
      <input style={inputStyles} type="text" placeholder="lastname"/>
      <input style={inputStyles} type="email" placeholder="email"/>
    </div>
      <div>
      <button style={{backgroundColor:"orange", color: 'white', border: 'none', padding: '10px', borderRadius: '5px'}}>Subscribe</button>
      </div>

    
  </div>
)

const userpicStyle = { height: '200px', width: '200px', borderRadius: '50%' }
const buttonStyle = { padding: '10px', marginRight: '10px', color: 'white', backgroundColor: '#2ACFCF', border: 'none', borderRadius: '5px'}
const skills = ['HTML', 'CSS', ' JS', ' REACT', 'ANGULAR', 'NODE', 'LARAVEL', 'MONGO']
const Usercard = (props) => (
  <div style={{ border: '5px solid #F0F1F7', backgroundColor: "aliceblue", padding: "10px"}}>
    <img style={userpicStyle} src={kid} alt="coolimage"/>
    <div>
      <p>{props.data.author.firstName.toUpperCase()} {props.data.author.lastName.toUpperCase()} &#9989;</p>
      <br/>
      <p>{props.data.author.title} {props.data.author.location}</p>

      <p>SKILLS</p>

      {skills.map((skill) => ( <button style
      ={buttonStyle} key={skill}>{skill}</button> ))}
    </div>

      <p>Joined on {new Date().getDate() + '-' + new Date().getMonth() + '-' + new Date().getFullYear()} </p>
  </div>
)

//hexacolor


const HexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''

  let arr = []

  for(let i = 0; i < 6 ; i++ ) {
    let index = Math.floor( Math.random() * str.length)

    color += str[index]

  } 

  return  ( <div style={{backgroundColor: `#${color}`, height: '60px', textAlign: 'center', color: 'white', margin: '10px'}}> <p style={{padding: '5px' }}>{'#'+color}</p> </div>)
    
  }

// JSX element, main
const Main = (props) => (
  <main>
    <div className='main-wrapper'>
      <p>
        Prerequisite to get started{' '}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ul>{techsFormatted}</ul>
      <Result />
      <PersonAge data={props.data} />
      <Techimages />
      <Subscribebox />
      <Usercard data={props.data}/>
      <HexaColor></HexaColor>
      <HexaColor></HexaColor>
      <HexaColor></HexaColor>
      <HexaColor></HexaColor>
      <HexaColor></HexaColor>
      <HexaColor></HexaColor>
      
    </div>
  </main>
)

const copyRight = 'Copyright 2020'

// JSX element, footer
const Footer = () => (
  <footer>
    <div className='footer-wrapper'>
      <p>{copyRight}</p>
    </div>
  </footer>
)

const showDate =(time) => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
   const month = months[time.getMonth()].slice(0, 3);
   const year = time.getFullYear();
   const date = time.getDate();
  return `${month},  ${date}, ${year}, `
}

const Button = props => (<button onClick={props.IWasClicked}>{props.text}</button>)
// JSX element, app
const App = () => {
const handleTime = () => {
  alert(showDate(new Date()));
}
  const data = {
    welcome :'Welcome to 30 Days Of React',
    title : 'Getting Started React',
    subtitle: 'JavaScript Library',
    author : {
    firstName: 'Sam',
    lastName: 'Jeff',
    title: 'Senior Dev',
    location: 'Kenya'
  },
   date : new Date()
  }
  

  return ( <div className='app'>
    <Header data={data} />
    <Main data={data}/>
    <Button text="show time" IWasClicked={handleTime}/>
    <Footer />
    
  </div>)}


const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement)
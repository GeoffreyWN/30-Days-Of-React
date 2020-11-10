import React, {Component} from 'react';
import kid from './assets/images/kid.jpg';
import Button from './components/button/button.component';
import Footer from './components/footer/footer.component';
import Header from './components/header/header.component';
import Main from './components/main/main.component';


class App extends Component  {

  state ={
    day: true,
    lightstyles: {
      backgroundColor: '',
      color: ''
    },
    darkmodestyles: {
      backgroundColor: '#152632',
      color: 'white'
    }
  }

   

 handleTime = () => {
  alert(this.showDate(new Date()));
  }

  changeBackgroundColor = () => {
    this.setState({ day: !this.state.day})
  }

  render() {
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
  
    const techs = ['HTML', 'CSS', ' JS', ' REACT', 'ANGULAR', 'NODE', 'LARAVEL', 'MONGO']
    const user = {...data.author, image: kid}
    const date = new Date()
    return (
        <div className='app' style={this.state.day? this.state.lightstyles : this.state.darkmodestyles}>
            <Header data={data} />
            <Main techs={techs} user={user}/>
            <Button text="show time" IWasClicked={this.handleTime}/>
            <Button text="CHANGE BACKGROUND" IWasClicked={this.changeBackgroundColor} />
            <Footer date={date} />
        </div>
       )}

      }


      export default App
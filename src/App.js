import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import ProfileCard from './components/ProfileCard';
import NaveBar from './components/NaveBar';

class App extends React.Component {

  state = {
    Person: {
      fullName:"gouissem hamza",
      bio:"BE a Web developer  is my way",
      profession:"Software Engineer ,web developer",
      imgSrc:"/my_profile_pic.jpg",
    },
    
  }

  toggleVisibility = () => {
    this.setState({
      shows: !this.state.shows
    })
  }

  render() {
    return (
      <div className="App">
        <NaveBar />
        <h2 style={{ marginTop: "100px" }}>Welcome to my profile home</h2>
        <Button style={{ marginTop: '20px' }} className='visibility-btn' onClick={this.toggleVisibility}>{this.state.shows ? "Hide profile" : "Show profile"} </Button>

        {this.state.shows ?
          (<div>
            <ProfileCard data={this.state.Person} />
          </div>
          ) : (<h6 style={{ marginTop: '20px' }}> show my profile <i style={{color:'yellowgreen'}} className="fa-solid fa-face-laugh-wink fa-2x"></i></h6>
          )
        }
        <h6 style={{ marginTop: '20px', color:'green' }}>This component was mounted </h6>
      </div>  
    );
  }

  componentDidMount(){
    this.setState({
      intervall:setInterval(() => {
        this.setState({timer:this.state.timer +1});
      }, 1000)
    });
  }



}

export default App;

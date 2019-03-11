import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import Gift from './components/Gift';
import './App.css';

class App extends Component {

  constructor(){
    super();
    
    this.state = {
      gifts:[]
    }

    this.addGift = this.addGift.bind(this);
  }
  addGift(e) {

    this.setState({gifts:[...this.state.gifts,{"id":1}]});
  }

  removeGift(id) {
    const ids = this.state.gifts.filter(gift => gift.id !== id)
    this.setState({gifts:[...ids]});
  }

  render() {
    
    const {gifts} = this.state;

    return (
      <div className="App">
        <header className="App-header">
        </header>
        <h2>gift</h2>
        
        <div className='gift-list'>
          {
            gifts.map((gift,i)=>{
              return (<Gift key={i} {...gift}/>)
            })
          }
        </div>
        <Button className='btn-add' onClick={this.addGift}>Add Gift</Button>
      </div>
    );
  }
}

export default App;

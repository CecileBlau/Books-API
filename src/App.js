import React, { Component } from 'react';
import Search from './Search'
import DisplayBooks from './DisplayBooks'
import Newest from './Newest'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from 'react-bootstrap'



class App extends Component {
  constructor() {
    super();
    this.state={
      arr:[],
      text:''
    }

  }
 handleChange=(e)=>{  
    this.setState({text:e.target.value})  
  }

  handleClick=(e)=> {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.text}&printType=all&filter=partial&projection=full&key=AIzaSyBCF-8XNuS5UuTXMx46-lkX5VQFsBcmrA4`)
    .then(res=>res.json())
    .then(res=>{this.setState({arr:res.items})})
  }

  


 handleNewest=(e)=>{
   if(this.state.arr){
     if(e.target.value == 'oldest'){
     console.log('hello')
     this.state.arr.sort((a,b) => (a.volumeInfo.publishedDate > b.volumeInfo.publishedDate) ? 1 : ((b.volumeInfo.publishedDate > a.volumeInfo.publishedDate) ? -1 : 0))
     this.setState({arr:[...this.state.arr]})
   } else if(e.target.value == 'newest'){
    this.state.arr.sort((a,b) => (a.volumeInfo.publishedDate < b.volumeInfo.publishedDate) ? 1 : ((b.volumeInfo.publishedDate < a.volumeInfo.publishedDate) ? -1 : 0))
    this.setState({arr:[...this.state.arr]})
   }
   
   } 
 }

  render() {
    console.log(this.state.arr)
    return (
      <>
      <Navbar className='navbar'>
        <h1>Cecile's Books API</h1>
        <h6 style={{marginTop:'10px'}}>Search for your favorite books</h6>
        <div className='searchNewest'>
          <Search handleChange={this.handleChange} handleClick={this.handleClick}/>
          <Newest handleNewest={this.handleNewest}/>
        </div>
        
        
      </Navbar>
    
      
      <div className='container'>
      <DisplayBooks arrBooks={this.state.arr}/>
      </div>
      
   
        
      </>
    );
  }
}



export default App;
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap'

function Books(props) {
  function renderAuthors(){
    return (
       props.value.volumeInfo.authors.map((item)=>{
        return (<p>{item}</p>)
      })
       
    )
    
  }

  if(props.value.volumeInfo.publishedDate){
    return (
      <>
      <Card className='bookDiv'>
        
         <Card.Img src={props.value.volumeInfo.imageLinks.thumbnail} className='imageStyle'></Card.Img>
         <Card.Body>
            <Card.Title> {props.value.volumeInfo.title}</Card.Title>
            <Card.Text> {props.value.volumeInfo.authors.length &&  renderAuthors()}</Card.Text>
            <Card.Text>Published: {props.value.volumeInfo.publishedDate.substring(0,4)} </Card.Text>
          </Card.Body>
        </Card>
          
          
  
        </>
    );
  }else{return null}
    
}

export default Books;

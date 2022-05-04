import React, { useState, useEffect } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Modal, ModalTitle, ModalBody } from 'react-bootstrap'

function Books(props) {

  const [info, setInfo] = useState(null)
  const [buttonX, setButtonX] = useState(null)
  const [title, setTitle] = useState(null)

  function handleInfo(e) {
    console.log(e.volumeInfo.description)
    if (e.volumeInfo.description && e.volumeInfo.description.length != 0) {
      setTitle(e.volumeInfo.title)
      setInfo(e.volumeInfo.description)
      setButtonX('x')
    } else {
      setTitle(e.volumeInfo.title)
      setInfo('Description not available')
      setButtonX('x')
    }

  }

  function handleExit(e) {
    setInfo(null)
    setButtonX(null)
  }



  if (props.value.volumeInfo.publishedDate) {
    //console.log(props.value.volumeInfo.authors)

    const author = props.value.volumeInfo.authors
    console.log(author)

    return (
      <>
        <Card className='bookDiv'>

          <Card.Body>
            <div className='upperBodyCard'>
              <Card.Img src={props.value.volumeInfo.imageLinks.thumbnail} className='imageStyle'></Card.Img>

              <Card.Title> {props.value.volumeInfo.title}</Card.Title>
              {author ?
                author.map((item) => {
                  return (<Card.Text> {item}</Card.Text>)
                }) : null}

              <Card.Text>Published: {props.value.volumeInfo.publishedDate.substring(0, 4)} </Card.Text>
            </div>


            <div className='infoAndPurchase'>
              <span className='buttonInfo' onClick={() => { handleInfo(props.value) }}>Description</span>

              {props.value.saleInfo.buyLink ? <a href={`${props.value.saleInfo.buyLink}`} target="_blank" class="btn btn-warning" >Purchase </a> : <p>Not in stock</p>}

            </div>

          </Card.Body>

        </Card>

        {info != '' && buttonX != null && title != null ?

          <div className='infoDescription'>

            <Button onClick={handleExit} className='buttonInfoDescription'> {buttonX}  </Button>




            <div className='cardTitle'>
              <h4> {title} </h4>


            </div>

            <p className='informationDescription'>
              {info}
            </p>


          </div >


          : null
        }
      </>
    );

  } else {
    return (
      <>
        <Card className='bookDiv'>

          <Card.Body>
            <div className='upperBodyCard'>
              <Card.Img src={props.value.volumeInfo.imageLinks.thumbnail} className='imageStyle'></Card.Img>
             
              <Card.Title> {props.value.volumeInfo.title}</Card.Title>

               {props.value.volumeInfo.authors ?
                props.value.volumeInfo.authors.map((item) => {
                  return (<Card.Text> {item}</Card.Text>)
                }) : null}
            </div>


            <div className='infoAndPurchase'>
              <span className='buttonInfo' onClick={() => { handleInfo(props.value) }}>Description</span>

              {props.value.saleInfo.buyLink ? <a href={`${props.value.saleInfo.buyLink}`} target="_blank" class="btn btn-warning" >Purchase </a> : <p>Not in stock</p>}

            </div>

          </Card.Body>

        </Card>
        {info != '' && buttonX != null && title != null ?
          <div className='infoDescription'>
            <div>
              <Button onClick={handleExit} className='buttonInfoDescription'> {buttonX}  </Button>

            </div>
            <div>
              <Card.Title>
                <div className='cardTitle'>
                  <div className='cardTitleJustName' >
                    {title}
                  </div>


                </div>


              </Card.Title>
              <Card.Text>
                {`Description: ${info}`}
              </Card.Text>


            </div>

          </div > : null}

      </>
    )

  }

}



export default Books;

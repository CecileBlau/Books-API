import React, { useState, useEffect } from 'react';
import Search from './Search'
import DisplayBooks from './DisplayBooks'
import Newest from './Newest'
import Pagination from './Pagination'
import Purchase from './Purchase'
import Modal from './Modal'
import SearchTypeIn from './SearchTypeIn'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap'


function App() {
  const [arr, setArr] = useState([]);
  const [text, setText] = useState('');
  const [maxResults, setMaxResults] = useState('10');
  const [onlyAvailable, setOnlyAvailable] = useState([]);
  const [showSortAvailable, setShowSortAvailable] = useState(null);


  const handleChange = (e) => {
    setText(e.target.value)

    console.log(text)
    if (text.length <= 1) {
      setShowSortAvailable(null)
    }

  }


  // -------- 10, 20 or 40 RESULTS --------
  const handlePagination = (e) => {

    if (e.target.value === 'twenty') {
      setMaxResults('20')
      console.log('20 results')


    } else if (e.target.value === 'forty') {
      setMaxResults('40')
      console.log('40 results')

    } else {
      setMaxResults('10')
      console.log('10 results')

    }


  }



  const handleClick = (e) => {
    if (text.length > 0) {

      fetch(`https://www.googleapis.com/books/v1/volumes?q=${text}&printType=all&maxResults=${maxResults}&filter=partial&projection=full&key=AIzaSyBCF-8XNuS5UuTXMx46-lkX5VQFsBcmrA4`)
        .then(res => res.json())
        .then(res => { setArr(res.items); setOnlyAvailable([]) })
        .catch(error => console.error(error))


      setShowSortAvailable(true)



    }



  }





  const handleNewest = (e) => {
    if (arr || onlyAvailable) {
      if (e.target.value === 'oldest') {

        arr.sort((a, b) => (a.volumeInfo.publishedDate > b.volumeInfo.publishedDate) ? 1 : ((b.volumeInfo.publishedDate > a.volumeInfo.publishedDate) ? -1 : 0))
        setArr([...arr])
          ||
          onlyAvailable.sort((a, b) => (a.volumeInfo.publishedDate > b.volumeInfo.publishedDate) ? 1 : ((b.volumeInfo.publishedDate > a.volumeInfo.publishedDate) ? -1 : 0))
        setOnlyAvailable([...onlyAvailable])

      } else if (e.target.value === 'newest') {
        arr.sort((a, b) => (a.volumeInfo.publishedDate < b.volumeInfo.publishedDate) ? 1 : ((b.volumeInfo.publishedDate < a.volumeInfo.publishedDate) ? -1 : 0))
        setArr([...arr])
          ||
          onlyAvailable.sort((a, b) => (a.volumeInfo.publishedDate < b.volumeInfo.publishedDate) ? 1 : ((b.volumeInfo.publishedDate < a.volumeInfo.publishedDate) ? -1 : 0))
        setOnlyAvailable([...onlyAvailable])

      }

    }
  }





  const handleAvailable = (e) => {
    if (e.target.value === "available") {



      arr.map((item, key) => {
        if (item.saleInfo.buyLink) {
          setOnlyAvailable(onlyAvailable => [...onlyAvailable, item]);
          console.log('wwwwwwwwwww', item)

        }







      })
    } else {


      setOnlyAvailable([])


    }
  }




  console.log(onlyAvailable.length)
  console.log(onlyAvailable)
  console.log(arr)

  return (

    <div>

      <Navbar className='navbar'>
        <h1>Online Library</h1>
        <h6 style={{ marginTop: '10px' }}>Search and buy your favorite books</h6>
        <div className='searchNewest'>
          <div className='searchNewestUpper' style={{ display: 'flex' }}>
            <SearchTypeIn handleChange={handleChange} />

            <Search handleClick={handleClick} />
          </div>

          <div className='newestAndPurchaseDiv'>
            <Pagination handlePagination={handlePagination} />
            <Newest handleNewest={handleNewest} showSortAvailable={showSortAvailable} />
            <Purchase handleAvailable={handleAvailable} showSortAvailable={showSortAvailable} />

          </div>




        </div>


      </Navbar>


      <div className='container'>
        <DisplayBooks arrBooks={arr} onlyAvailable={onlyAvailable} />
      </div>


    </div>


  );


}




export default App;
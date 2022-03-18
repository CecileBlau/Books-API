import React from 'react';
import Books from './Books'

function DisplayBooks(props) {
    
   if(props.arrBooks){
       return (
        <>
            {props.arrBooks.map((item,i)=>{
            return  <Books key={i} value={item}/> 
            
            
        })}  


        </>
    )
   }else{return null
   }
    
}

export default DisplayBooks;



 
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap'

function Newest(props) {

  return (
    <>
    {props.showSortAvailable?
    <Form.Select onChange={props.handleNewest} className='formselect'>
        <option value=''>Sort</option>
        <option value='newest' >Newest</option>
        <option value='oldest'>Oldest</option>
      </Form.Select>:null
  }

      


    </>
  );
}

export default Newest;
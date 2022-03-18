import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap'
import Form from 'react-bootstrap/Form'

function Search(props) {

    return (
        <div className='SearchButton'>
            <Form.Control onChange={props.handleChange}></Form.Control>
            
            <Button variant="primary" onClick={props.handleClick}> Search! </Button>
        </div>
    );
}

export default Search;
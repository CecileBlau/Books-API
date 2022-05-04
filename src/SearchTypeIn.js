import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Form from 'react-bootstrap/Form'

function SearchTypeIn(props) {

    return (
        <div className='SearchButton'>
            <Form.Control   onChange={props.handleChange} placeholder="Type here"></Form.Control>
            
            
        </div>
    );
}

export default SearchTypeIn;
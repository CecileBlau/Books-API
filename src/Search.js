import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap'
import Form from 'react-bootstrap/Form'

function Search(props) {

    return (
        <div style={{marginLeft:'20px', width:'70px'}}>
            
            <Button class="btn btn-primary" onClick={props.handleClick} style={{width:'100px'}}> Search! </Button>
        </div>
    );
}

export default Search;
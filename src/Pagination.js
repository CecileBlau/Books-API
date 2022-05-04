import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap'

function Pagination(props) {

    return (
        <>
            <Form.Select onChange={props.handlePagination} className='formselect'>
                <option value='ten' > # Results </option>
                <option value='ten' >10</option>
                <option value='twenty' >20</option>
                <option value='forty'>40</option>
            </Form.Select>
        </>
    );
}

export default Pagination;
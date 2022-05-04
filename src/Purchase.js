import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap'

function Purchase(props) {
    return (

        <div>

            {props.showSortAvailable ?
                <Form.Select onChange={props.handleAvailable} style={{marginLeft:'4px'}} >
                    <option value='all'>All</option>
                    <option value='available' >Available</option>

                </Form.Select> : null
            }

        </div>
    );
}

export default Purchase;
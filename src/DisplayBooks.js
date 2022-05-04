import React from 'react';
import Books from './Books'

function DisplayBooks(props) {
//     let arrtodisplay = []
//     if (props.onlyAvailable.length > 0 || props.arrBooks.length > 0) {
//         arrtodisplay = props.arrBooks.map((item, i) => {
//             return <Books key={i} value={item} />


//         })
//     }
//     else {
//         arrtodisplay = props.onlyAvailable.map((item, i) => {
//             return <Books key={i} value={item} />


//         })
//     }

//     return (
//         <>
//             {
//                 arrtodisplay
//             }
//         </>
//     )

// }





    if (props.onlyAvailable.length === 0) {
        return (
            <>
                {props.arrBooks.map((item, i) => {
                    return <Books key={i} value={item} />


                })}


            </>
        )


    } else {
        if (props.onlyAvailable.length != 0) {
            return (
                <>
                    {props.onlyAvailable.map((item, i) => {
                        return <Books key={i} value={item} />


                    })}


                </>
            )
        } else {
            return null

        }
    }


}











export default DisplayBooks;




import React from 'react';
import './listItem.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function ListItem(props) {
    const items = props.items;
    const listItems = items.map(item => 
    {
        return <div className='list' key={item.key}>
            <p>{item.text}
            <span>
                <FontAwesomeIcon className='faicons' 
                onClick={() => props.deleteItem(item.key)
                } icon='trash' />
            </span>
            </p>
            {/* kalau mau biar text dan gambar inline, include span dalem p.*/}
            {/* ini ambinya dari prop, bukan variabel. karena prop adalah hasil input dari form yang udah ada */}

        </div>
    })
    return (
       <div>{listItems}</div>
    )
}
export default ListItem;
import React from 'react';
import './listItem.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';

function ListItem(props) {
    const items = props.items;
    const listItems = items.map(item => 
    {
        return <div className='list' key={item.key}>
            <p><input type='text' id={item.key} value={item.text}
            onChange={
                (e) => {
                    props.setUpdate(e.target.value, item.key)
                }
            }
            />
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
       <div>
       <FlipMove duration={500} easing='ease-in-out'>
       {listItems}
       </FlipMove>
       </div>
    )
}
export default ListItem;
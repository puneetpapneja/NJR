import React  from "react";
import { Button } from "react-bootstrap";
import "./Item.css";

const Item=(props)=>{
    const items=[
        {
            item:"bottle",
            brand:"cello",
            price:"123 rupees"
        },
        {
            item:"boat",
            brand:"cel",
            price:"234 rupees"
        },
        {
            item:"goat",
            brand:"cel",
            price:"345 rupees"
        }
    ]
    return(
        <div>
       {/* { props.items?.map(items=>(
  <div>{items.item}</div>
  <div>cello</div>
  <div>150 ruppes</div>
        ))
    } */
    <Button variant="primary" >primary</Button>

    }
    </div>

);
}

export default Item;
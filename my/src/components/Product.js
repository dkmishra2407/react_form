import { useState } from "react";

// states and props are immutable, they should not be updated directly.
function Product(props) {

    // let name = props.name;
    const [name, setName] = useState(props.name);

    const cardClickHandler = () => {
        console.log('card clicked');
        setName('Anonymouse');
    }

   
    return <figure onClick={cardClickHandler}>
        <img width="350px" src={props.imageUrl} alt="This is a watch"/>
        <h3>{name}</h3>
        <h3>$ {props.price }</h3>
        <p>{props.Description }</p>
        <button>Buy Now</button>
    </figure>    
}

export default Product;
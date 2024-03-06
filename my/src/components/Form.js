import React, { useRef } from 'react';
import { v4 as uuid } from 'uuid';


const Form = (props) => {
    const nameoftheinputer = useRef();
    const descriptionoftheinputer = useRef();
    const priceoftheinputer = useRef();
    const imageoftheinputer = useRef();

    const submithandler = (event) => {
        event.preventDefault();
        const newproduct = {
            id: uuid(),
            name: nameoftheinputer.current.value,
            price: priceoftheinputer.current.value,
            Description: descriptionoftheinputer.current.value,
            imageUrl: imageoftheinputer.current.value
        };

        props.addProduct(newproduct);
        const latername = document.querySelector('.Name');
        latername.value="";
        const laterprice = document.querySelector('.Price');
        laterprice.value="";
        const laterdescription = document.querySelector('.Description');
        laterdescription.value ="";
        const laterimage = document.querySelector('.imageUrl');
        laterimage.value ="";
    };

    return (
        <form onSubmit={submithandler}>
            <label htmlFor='name'>Name</label>
            <input type='text' placeholder='ENTER YOUR NAME' ref={nameoftheinputer} className='Name'/>

            <label htmlFor='Price'>Price</label>
            <input type='text' placeholder='YOUR PRICE' ref={priceoftheinputer} className='Price'/>

            <label htmlFor='image'>ImageUrl</label>
            <input type='text' placeholder='YOUR PIC>>' ref={imageoftheinputer} className='imageUrl'/>

            <label htmlFor='Desc'>Description</label>
            <textArea placeholder='ENTER YOUR DESCRIPTION' ref={descriptionoftheinputer} className='Description'></textArea>

            <button>ADD</button>
        </form>
    );
};

export default Form;



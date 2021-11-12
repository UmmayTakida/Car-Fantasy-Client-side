import React from 'react';
import { useForm } from "react-hook-form";

const AddNewProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('https://floating-coast-75168.herokuapp.com/products', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.insertedId) {
                    alert('Successfully Added Products');
                    reset();
                }
            })

    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 40 })} placeholder="Name" />
                <br />

                <input {...register("price")} placeholder="price" />
                <br />
                <input {...register("img")} placeholder="image url" />

                <br />
                <textarea {...register("description")} placeholder="Description" />
                <br />
                <input className="submit-btn" type="submit" />
            </form>

        </div>
    );
};

export default AddNewProduct;
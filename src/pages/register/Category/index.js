import React, {useState} from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function RegisterCategory(){

    const initialValue = {
        name: '',
        description: '',
        color: '#000000',
    }

    const [categories, setCategories] = useState([]);
    const [values, setValues] = useState(initialValue);

    function setValue(key, value) {
        setValues({
            ...values,
            [key]: value,
        })
    }

    /*
    function handleChange(eventInfo) {
        const { getAttribute, value } = eventInfo.target;
        setValue(
            getAttribute('name'),
            value
        );
    } 
    */

    function handleChange(eventInfo) {
        setValue(
            eventInfo.target.getAttribute('name'),
            eventInfo.target.value
        );
    } 

    return (
        <PageDefault>
            <h1>Register Category: {values.name}</h1>

            <form onSubmit={function handleSubmit(eventInfo){
                eventInfo.preventDefault();
                setCategories([
                    ...categories,
                    values
                ]);

                setValues(initialValue);
            }}>
                <FormField 
                    label="Name"
                    type="text"
                    value={values.name}
                    name="name"
                    onChange={handleChange}
                />

                <FormField 
                    label="Description"
                    type="textarea"
                    value={values.description}
                    name="description"
                    onChange={handleChange}
                />                

                <FormField 
                    label="Color"
                    type="color"
                    value={values.color}
                    name="color"
                    onChange={handleChange}
                />

                <button>
                    Save
                </button>
            </form>

            <ul>
                {categories.map((category, index) => {
                    return (
                        <li key={`${category}${index}`}>
                            {category.name}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">
                Home
            </Link>
        </PageDefault>
    );
}

export default RegisterCategory;
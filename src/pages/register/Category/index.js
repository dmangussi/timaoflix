import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function RegisterCategory() {
  const initialValue = {
    name: '',
    description: '',
    color: '#000000',
  };

  const { handleChange, values, clearForm } = useForm(initialValue);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = window.location.hostname.includes('localhost')
        ? 'http://localhost:8080/categories'
        : 'https://timaoflix.herokuapp.com/categories';
      fetch(URL)
        .then(async (response) => {
          if (response.ok) {
            const jsonResponse = await response.json();
            setCategories([
              ...jsonResponse,
            ]);
          }
        });
    }
  }, []);

  return (
    <PageDefault>
      <h1>
        Register Category:
        {values.name}
      </h1>

      <form onSubmit={function handleSubmit(eventInfo) {
        eventInfo.preventDefault();
        setCategories([
          ...categories,
          values,
        ]);

        clearForm();
      }}
      >
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

        <Button>
          Save
        </Button>
      </form>

      <ul>
        {categories.map((category) => (
          <li key={`${category.id}`}>
            {category.name}
          </li>
        ))}
      </ul>

      {categories.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <Link to="/">
        Home
      </Link>
    </PageDefault>
  );
}

export default RegisterCategory;

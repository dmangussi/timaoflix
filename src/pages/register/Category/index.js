import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function RegisterCategory() {
  const initialValue = {
    name: '',
    description: '',
    color: '#000000',
  };

  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(initialValue);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
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
      eventInfo.target.value,
    );
  }

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

        setValues(initialValue);
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

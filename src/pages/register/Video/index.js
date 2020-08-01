import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categories';

function RegisterVideo() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const categoryNames = categories.map(({ name }) => name);

  const { handleChange, values } = useForm({
    name: 'Name Default',
    url: 'https://www.youtube.com/watch?v=-nYNd6EuZHU',
    category: 'Front End',
  });

  useEffect(() => {
    categoriesRepository.getAll().then((categoriesFromServer) => {
      setCategories(categoriesFromServer);
    });
  }, []);

  return (
    <PageDefault>
      <h1>Register Video</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        // alert('Video Cadastrado com Sucesso!!');

        const categoryFound = categories.find((category) => category.name === values.category);

        videosRepository.create({
          name: values.name,
          url: values.url,
          categoryId: categoryFound.id,
        })
          .then(() => {
            console.log('Cadastrou com sucesso!');
            history.push('/');
          });
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
          label="Url"
          type="text"
          value={values.url}
          name="url"
          onChange={handleChange}
        />

        <FormField
          label="Category"
          type="text"
          value={values.category}
          name="category"
          onChange={handleChange}
          suggestions={categoryNames}
        />

        <Button type="submit">
          Save
        </Button>
      </form>

      <Link to="/register/category">
        Register Category
      </Link>
    </PageDefault>
  );
}

export default RegisterVideo;

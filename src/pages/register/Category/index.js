import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function RegisterCategory(){
    return (
        <PageDefault>
            <h1>Register Category</h1>

            <Link to="/">
                Home
            </Link>
        </PageDefault>
    );
}

export default RegisterCategory;
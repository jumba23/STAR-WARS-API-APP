import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import classes from './SearchBar.module.css';

const SearchBar = () => {
    return (
        <div className={classes.SearchArea}>
            <Form.Control classes={classes.SearchInput} type="text" placeholder="Search here..."/>
            <Button variant="secondary" className={classes.Button}>Search</Button>
        </div>
    )
}

export default SearchBar;
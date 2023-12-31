import React, { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    // Implement your search logic here
    console.log('Query:', query);
    console.log('Category:', category);
    console.log('Location:', location);
  };

  return (
    <>
    
    </>
  );
};

export default SearchBar;

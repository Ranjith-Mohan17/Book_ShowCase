import React, { useEffect, useRef, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context.js';
import './SearchForm.css';

const SearchForm = () => {
  const { searchTerm, setSearchTerm, setResultTitle } = useGlobalContext();
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  const searchText = useRef('');

  useEffect(() => {
    setInputValue(searchTerm);
  }, [searchTerm]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedSearchTerm = inputValue.trim();
    if (trimmedSearchTerm === '') {
      setSearchTerm("the lost world");
      setResultTitle("Please Enter Something....!");
    } else {
      setSearchTerm(trimmedSearchTerm);
    }
    navigate("/book");
  };

  return (
    <div className="search-form">
      <div className='container'>
        <div className='search-form-content'>
          <form className='search-form' onSubmit={handleSubmit}>
            <div className='search-form-elem flex flex-sb bg-white'>
              <input
                type="text"
                className='form-control'
                placeholder="The Lost World..."
                ref={searchText}
                value={inputValue}
                onChange={handleChange}
              />
              <button className='cursor flex flex-c'>
                <FaSearch className='text-purple' size={32} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;

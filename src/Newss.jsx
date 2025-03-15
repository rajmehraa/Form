import React, { useState } from 'react';

const FormValidation = () => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

    
    const handleChange = (e) => {
      const value = e.target.value;
      
      // Regex to allow only letters (both lowercase and uppercase)
      if (/^[a-zA-Z]*$/.test(value)) {
        setInputValue(value);
        setError('');
      } else {
        setError('Only letters are allowed');
      }
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue === '') {
      setError('Input cannot be empty');
    } else {
      alert('Form submitted successfully');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Text:
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default FormValidation;
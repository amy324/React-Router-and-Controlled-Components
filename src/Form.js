import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css'; 

import Joi from 'joi-browser';

function Form() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({}); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const schema = Joi.object({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
    });

    const { error } = schema.validate(formData, { abortEarly: false });
    if (error) {
      const validationErrors = {};
      for (let item of error.details) {
        validationErrors[item.path[0]] = item.message;
      }
      setErrors(validationErrors);
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid = validateForm();
    if (isFormValid) {
      navigate('/confirmation');
    }
  };

  return (
    <div className="form-container">
  <h2>Form Page</h2>
  <form onSubmit={handleSubmit}>
    <div>
      <label className="form-label">Name:</label>
      <input
        className="form-input"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      {errors.name && <p>{errors.name}</p>}
    </div>
    <div>
      <label className="form-label">Email:</label>
      <input
        className="form-input"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <p>{errors.email}</p>}
    </div>
    <button className="form-button" type="submit">
      Next
    </button>
  </form>
</div>

  );
}

export default Form;

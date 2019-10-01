import React, { useState } from 'react';

export default function Form({ user }) {
  const [formValues, setFormValues] = useState({
    fname: '',
    lname: '',
  });

  const onValueChange = event => setFormValues({
    ...formValues,
    [event.target.name]: event.target.value,
  });

  const onFormSubmit = event => {
    event.preventDefault();
    alert(`submitting ${formValues.lname}, ${formValues.fname}`);
  };

  return (
    <form
      className='component'
      onSubmit={onFormSubmit}
      style={{ borderColor: 'green' }}
    >
      <h5>{user}&apos;s best friend:</h5>
      <label>first name
        <input value={formValues.fname} onChange={onValueChange} name='fname' />
      </label><br />

      <label>last name
        <input value={formValues.lname} onChange={onValueChange} name='lname' />
      </label><br />

      <button>submit</button>
    </form>
  );
}

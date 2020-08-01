import { useState } from 'react';

function useForm(initialValue) {
  const [values, setValues] = useState(initialValue);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(eventInfo) {
    setValue(
      eventInfo.target.getAttribute('name'),
      eventInfo.target.value,
    );
  }

  function clearForm() {
    setValues(initialValue);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;

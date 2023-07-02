export const validateForm = (fieldName, value) => {
  let error = '';

  if (fieldName === 'name') {
    if (value === '') {
      error = 'Name is required.';
    } else if (!/^[a-zA-Z\s]+$/.test(value)) {
      error = 'Name cannot contain numbers or special characters.';
    }
  } else if (fieldName === 'telephone') {
    if (value === '') {
      error = 'Telephone is required.';
    } else if (!/^\d{10}$/.test(value)) {
      error = 'Telephone must be a 10-digit number.';
    }
  } else if (fieldName === 'date') {
    const selectedDate = new Date(value);
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    if (selectedDate < currentDate) {
      error = 'Date must be tomorrow or later.';
    }
  } else if (fieldName === 'time') {
    if (value === '') {
      error = 'Time is required.';
    }
  } else if (fieldName === 'guests') {
    if (value === '' || value <= 0) {
      error = 'Number of guests must be greater than 0.';
    }
  } else if (fieldName === 'occasion') {
    if (value === '') {
      error = 'Occasion is required.';
    }
  }

  return error;
};

 
 





 
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const DataModal = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
      dateFormat="dd.MM.yyyy"
    />
  );
};

export default DataModal;

// className="modal-input"
//           selected={date}
//           onChange={date => {
//             updateTransaction('date', date);
//           }}
//           dateFormat="dd.MM.yyyy"

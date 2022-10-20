import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { useEffect } from 'react';

const DataModal = ({ setDate }) => {
  const [startDate, setStartDate] = useState(new Date());
  useEffect(() => {
    setDate(startDate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDate]);
  return (
    <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
      dateFormat="dd.MM.yyyy"
    />
  );
};

export default DataModal;

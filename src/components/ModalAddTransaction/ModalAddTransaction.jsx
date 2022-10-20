import React from 'react';
import { useFormik } from 'formik';
import DataModal from 'components/DataModal/DataModal';
import { Link } from 'react-router-dom';
import { Div, Form, Title } from './ModalAddTransaction.styled';

const ModalAddTransaction = () => {
  const formik = useFormik({
    initialValues: {
      sum: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Div>
      <Title>Add transaction</Title>
      <Form onSubmit={formik.handleSubmit}>
        <div>
          <label>
            Income
            <input type="radio" name="transaction" />
          </label>
          <label>
            <input type="radio" name="transaction" />
            Expense
          </label>
        </div>

        <label>
          <input
            name="sun"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.number}
            placeholder="0.00"
          />
        </label>

        <DataModal />
        <textarea
          id="comment"
          name="comment"
          rows="5"
          cols="33"
          placeholder="Comment"
        ></textarea>
        <button type="button">Add</button>
        <Link type="button" to="/transaction">
          Cancel
        </Link>
      </Form>
    </Div>
  );
};

export default ModalAddTransaction;

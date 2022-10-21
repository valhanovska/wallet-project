import React from 'react';
import { useFormik } from 'formik';
import DataModal from 'components/DataModal/DataModal';
import {
  Form,
  Title,
  Comment,
  ContainerSumData,
  Sum,
  Toggle,
  TextType,
  TransactionType,
  NavLink,
} from './ModalAddTransaction.styled';

import { ReactComponent as Plus } from '../../assets/icons/Plus.svg';
import { ContainerDate } from './ModalAddTransaction.styled';
import { Button } from './ModalAddTransaction.styled';
import moment from 'moment';
import { ContainerBtn } from './ModalAddTransaction.styled';
import { ReactComponent as Calendar } from '../../assets/icons/icon-Calendar.svg';
import close from '../../assets/icons/sprite.svg';
import { CloseBtn } from './ModalAddTransaction.styled';
import { Svg } from './ModalAddTransaction.styled';
import { SelectCategory } from 'components/SelectCategory/SelectCategory';
import { useDispatch } from 'react-redux';
import { addTransactionUser } from 'redux/transactionsController/trControllerOpertaion';
const ModalAddTransaction = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      amount: '',
      type: 'EXPENSE',
      transactionDate: '',
      comment: '',
      categoryId: '063f1132-ba5d-42b4-951d-44011ca46262',
    },
    onSubmit: values => {
      console.log(values);
      dispatch(addTransactionUser(values));
    },
  });

  console.log('formik', formik.values);

  const setDate = date => {
    formik.setValues(prev => ({
      ...prev,
      transactionDate: moment(date).format('YYYY-MM-DD'),
    }));
  };
  const setCategory = category => {
    formik.setValues(prev => ({
      ...prev,
      categoryId: category,
    }));
    console.log('category', category);
    return category;
  };

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Title>Add transaction</Title>
      <TransactionType>
        <TextType type={formik.values.type} ownType="INCOME">
          Income
        </TextType>
        <Toggle>
          <input
            type="checkbox"
            name="transactionType"
            checked={formik.values.type === 'EXPENSE'}
            onChange={e => {
              formik.setValues(prev => ({
                ...prev,
                type: e.target.checked ? 'EXPENSE' : 'INCOME',
              }));
            }}
          />
          <div className="thumb">
            <div className="indicator">
              <Plus />
            </div>
          </div>
        </Toggle>

        <TextType type={formik.values.type} ownType="EXPENSE">
          Expense
        </TextType>
      </TransactionType>

      {formik.values.type === 'EXPENSE' && (
        <SelectCategory setCategory={setCategory} />
      )}

      <ContainerSumData>
        <Sum
          name="amount"
          type="number"
          onChange={formik.handleChange}
          placeholder="0.00"
          required
        />
        <ContainerDate>
          <DataModal setDate={setDate} />
          <Calendar />
        </ContainerDate>
      </ContainerSumData>

      <Comment
        name="comment"
        rows="5"
        cols="10"
        placeholder="Comment"
        onChange={formik.handleChange}
      ></Comment>
      <ContainerBtn>
        <Button type="submit">Add</Button>
        <NavLink type="button" to="/transactions">
          Cancel
        </NavLink>
      </ContainerBtn>

      <CloseBtn>
        <Svg width="16" height="16">
          <use href={close + '#icon-close'}></use>
        </Svg>
      </CloseBtn>
    </Form>
  );
};

export default ModalAddTransaction;

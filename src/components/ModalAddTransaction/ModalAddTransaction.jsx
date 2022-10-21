import React, { useEffect } from 'react';
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
  Overlay,
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

const ModalAddTransaction = ({ handleClick }) => {
  const formik = useFormik({
    initialValues: {
      sum: '',
      transactionType: 'expense',
      date: '',
      comment: '',
      category: '',
    },
    onSubmit: values => {
      console.log(values);
    },
  });

  const setDate = date => {
    formik.setValues(prev => ({
      ...prev,
      date: moment(date).format('DD.MM.YYYY'),
    }));
  };

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      handleClick();
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      handleClick();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <Overlay onClick={handleBackdropClick}>
      <Form onSubmit={formik.handleSubmit}>
        <Title>Add transaction</Title>
        <TransactionType>
          <TextType type={formik.values.transactionType} ownType="income">
            Income
          </TextType>
          <Toggle>
            <input
              type="checkbox"
              name="transactionType"
              checked={formik.values.transactionType === 'expense'}
              onChange={e => {
                formik.setValues(prev => ({
                  ...prev,
                  transactionType: e.target.checked ? 'expense' : 'income',
                }));
              }}
            />
            <div className="thumb">
              <div className="indicator">
                <Plus />
              </div>
            </div>
          </Toggle>

          <TextType type={formik.values.transactionType} ownType="expense">
            Expense
          </TextType>
        </TransactionType>

        {formik.values.transactionType === 'expense' && <SelectCategory />}

        <ContainerSumData>
          <Sum
            name="sum"
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
          <NavLink type="button" to="/transactions" onClick={handleClick}>
            Cancel
          </NavLink>
        </ContainerBtn>

        <CloseBtn type="button" onClick={handleClick}>
          <Svg width="16" height="16">
            <use href={close + '#icon-close'}></use>
          </Svg>
        </CloseBtn>
      </Form>
    </Overlay>
  );
};

export default ModalAddTransaction;

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
  Validation,
  DivInput,
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
import { useDispatch, useSelector } from 'react-redux';
import {
  addTransactionUser,
  getTransactionUser,
} from 'redux/transactionsController/trControllerOpertaion';
import ModalWrapper from './ModalWrapper';
import { schema } from './Validation';
import { useEffect, useState } from 'react';
import { getTransactionsEdit } from 'redux/transactionsController/trControllerSelector';

const ModalAddTransaction = ({ handleClick }) => {
  const dispatch = useDispatch();
  const transactionEdit = useSelector(getTransactionsEdit)
  const [comment, setComment] = useState();

  const formik = useFormik({
    initialValues: {
      amount: '',
      type: 'EXPENSE',
      transactionDate: '',
      comment: '',
      categoryId: '',
    },
    validationSchema: schema,
    onSubmit: values => {
      dispatch(addTransactionUser(values));
      dispatch(getTransactionUser());
      handleClick();
    },
  });


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
    return category;
  };

  const positiveSum = formik => {
    if (formik.values.type === 'EXPENSE') {
      if (formik.values.amount > 0) {
        return formik.values.amount * -1;
      } else {
        return formik.values.amount;
      }
    }
    if (formik.values.type === 'INCOME') {
      if (formik.values.amount < 0) {
        return formik.values.amount * -1;
      }
    } else {
      return formik.values.amount;
    }
  };

  const onForm =(transactionEdit) => {
    formik.setValues(prev => ({
      ...prev,

      type:  transactionEdit[0].type,
      categoryId: transactionEdit[0].categoryId,
      amount: transactionEdit[0].amount,
      transactionDate: transactionEdit[0].transactionDate,
      comment: transactionEdit[0].comment,
      id: transactionEdit[0].id,
    }));
  }

  useEffect(()=>{
    console.log(transactionEdit);
    if(transactionEdit){
     return  onForm(transactionEdit)
    } 
    
     
      },[ transactionEdit])

  return (
    <ModalWrapper handleClick={handleClick}>
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
              // onClick={e=>OnChangeTogle(e)}
              onChange={e => {
                formik.setValues(prev => ({
                  ...prev,
                  type: e.target.checked ? 'EXPENSE' : 'INCOME',
                  categoryId: e.target.checked
                    ? ''
                    : '063f1132-ba5d-42b4-951d-44011ca46262',
                   
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
        <DivInput>
          {formik.values.type === 'EXPENSE' && (
            <div>
              <SelectCategory setCategory={setCategory} />
              {!formik.values.categoryId && formik.touched.categoryId ? (
                <Validation>{formik.errors.categoryId}</Validation>
              ) : null}
            </div>
          )}
        </DivInput>
        <ContainerSumData>
          <Sum
            name="amount"
            type="number"
            value={positiveSum(formik)}
            onChange={formik.handleChange}
            placeholder="0.00"
          />
          <ContainerDate>
            <DataModal setDate={setDate} />
            <Calendar />
          </ContainerDate>
        </ContainerSumData>
        <DivInput>
          <Comment
         
            value={formik.values.comment}
            name="comment"
            rows="5"
            cols="10"
            placeholder="Comment"
            onChange={formik.handleChange}
          ></Comment>
          {formik.errors.comment && formik.touched.comment ? (
            <Validation>{formik.errors.comment}</Validation>
          ) : null}
        </DivInput>
        <ContainerBtn>
          <Button type="submit">Add</Button>
          <NavLink type="button" to="/transactions/home" onClick={handleClick}>
            Cancel
          </NavLink>
        </ContainerBtn>

        <CloseBtn type="button" onClick={handleClick}>
          <Svg width="16" height="16">
            <use href={close + '#icon-close'}></use>
          </Svg>
        </CloseBtn>
      </Form>
    </ModalWrapper>
  );
};

export default ModalAddTransaction;

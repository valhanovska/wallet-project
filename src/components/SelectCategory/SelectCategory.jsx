import React from 'react'
import { useSelector } from 'react-redux'
import { getSelects } from 'redux/transactions/selectorsTransactions'
import { SelectCategoryStyle } from './SelectCategory.styled'


const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

export const SelectCategory = () => {
    const selects = useSelector(getSelects)
    console.log(selects);

    return <SelectCategoryStyle options={selects} />}

import React from 'react';
import Select from 'react-select';
import { SelectContainer, selectStyles } from './selectStyles';
import DropdownIndicator from './DropdownIndicator';
import { useSelector } from 'react-redux';
import { getSelects } from 'redux/transactionCategories/selectorsTransactions';
import { getTransactionsEdit } from 'redux/transactionsController/trControllerSelector';


export function SelectCategory({ setCategory, value, type }) {
  
  const selects = useSelector(getSelects);
  const transactionEdit = useSelector(getTransactionsEdit)
  const selectedCategory = transactionEdit && selects.find(item=>item.id === transactionEdit[0].categoryId )
  return (
    <SelectContainer>
      <Select
        defaultValue={transactionEdit?{
          categoryId:selectedCategory.name,
          label: selectedCategory.name,
          type:selectedCategory.type,
        }:""}
        onChange={e => setCategory(e.categoryId)}
        key={true}
        styles={selectStyles(type=== 'EXPENSE')}
        components={{ DropdownIndicator }}
        options={selects
          .filter(option => option.name !== 'Income')
          .map(option => {
            return {
              categoryId: option.id,
              label: option.name,
              type: option.type,
            };
          })}
        placeholder="Select a category"
        isSearchable={false}
      />
    </SelectContainer>
  );
}

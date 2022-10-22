import React from 'react';
import Select from 'react-select';
import { SelectContainer, selectStyles } from './selectStyles';
import DropdownIndicator from './DropdownIndicator';
import { useSelector } from 'react-redux';
import { getSelects } from 'redux/transactionCategories/selectorsTransactions';

export function SelectCategory({ setCategory, type }) {
  const selects = useSelector(getSelects);

  return (
    <SelectContainer>
      <Select
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

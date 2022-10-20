import React from 'react';
import Select from 'react-select';
import { SelectContainer, selectStyles } from './selectStyles';
import DropdownIndicator from './DropdownIndicator';
import { useSelector } from 'react-redux';
import { getSelects } from 'redux/transactionCategories/selectorsTransactions';

export function SelectCategory() {
  
  const selects = useSelector(getSelects)
  console.log(selects);
  return (
        <SelectContainer >
          <Select
            key={true}
            styles={selectStyles(true)}
            components={{ DropdownIndicator }}
            options={(selects.filter(option =>  option.name !== "Income"  ).map(option=>{return { value: option.name, label: option.name}} ))}
            placeholder="Select a category"
            isSearchable={false}
          />
        </SelectContainer>
  );
}

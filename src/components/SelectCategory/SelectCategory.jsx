import React from 'react';
import Select from 'react-select';
import { SelectContainer, selectStyles } from './selectStyles';
import DropdownIndicator from './DropdownIndicator';
import { useSelector } from 'react-redux';
import { getSelects } from 'redux/transactionCategories/selectorsTransactions';

export function SelectCategory() {
  
  const selects = useSelector(getSelects)

  return (
        <SelectContainer >
          <Select
            key={true}
            styles={selectStyles(true)}
            components={{ DropdownIndicator }}
            options={(true
              ? selects?.expense
              : selects?.income
            )?.map(option => ({ value: option, label: option }))}
            placeholder="Select a category"
            isSearchable={false}
          />
        </SelectContainer>
  );
}

import React from 'react';
import Select from 'react-select';
import { SelectContainer, selectStyles } from './selectStyles';
import DropdownIndicator from './DropdownIndicator';
import { categories } from 'db';

export function SelectCategory() {
  

  return (
        <SelectContainer >
          <Select
            key={true}
            styles={selectStyles(true)}
            components={{ DropdownIndicator }}
            options={(true
              ? categories?.expense
              : categories?.income
            )?.map(option => ({ value: option, label: option }))}
            placeholder="Select a category"
            isSearchable={false}
          />
        </SelectContainer>
  );
}

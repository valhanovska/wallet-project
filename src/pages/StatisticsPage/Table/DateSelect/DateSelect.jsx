import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { ArrowDownIcon } from '../Table.styled';

const DateSelect = ({ label, value, onChange, options }) => (
  <FormControl>
    <InputLabel>{label}</InputLabel>
    <Select
      value={value}
      label={label}
      onChange={onChange}
      IconComponent={ArrowDownIcon}
      sx={theme => ({
        width: 182,
        height: 50,
        borderRadius: 30,
        [theme.breakpoints.down('sm')]: { width: '100%' },
      })}
      MenuProps={{ PaperProps: { sx: { height: 300 } } }}
    >
      {options.map(x => (
        <MenuItem key={x.value} value={x.value}>
          {x.name}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

export default DateSelect;

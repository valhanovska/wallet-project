
























// import * as React from 'react';
// import SelectUnstyled, {
//   selectUnstyledClasses,
// } from '@mui/base/SelectUnstyled';
// import OptionUnstyled, { optionUnstyledClasses } from '@mui/base/OptionUnstyled';
// import PopperUnstyled from '@mui/base/PopperUnstyled';
// import { styled } from '@mui/system';
// import UnfoldMoreRoundedIcon from '@mui/icons-material/UnfoldMoreRounded';

// import { useSelector } from 'react-redux'
// import { getSelects } from 'redux/transactions/selectorsTransactions'
// import svgImg from "../../assets/icons/chevron-down.svg"

// const blue = {
//   100: '#DAECFF',
//   200: '#99CCF3',
//   400: '#3399FF',
//   500: '#007FFF',
//   600: '#0072E5',
//   900: '#003A75',
// };

// const grey = {
//   50: '#f6f8fa',
//   100: '#eaeef2',
//   200: '#d0d7de',
//   300: '#afb8c1',
//   400: '#8c959f',
//   500: '#6e7781',
//   600: '#57606a',
//   700: '#424a53',
//   800: '#32383f',
//   900: '#24292f',
// };

// const Button = React.forwardRef(function Button(
//     props,
//     ref)
//    {
//   const { ownerState, ...other } = props;
//   return (
//     <button type="button" {...other} ref={ref}>
//       {other.children}
//       {ownerState.open ? <UnfoldMoreRoundedIcon /> : <UnfoldMoreRoundedIcon />}
//     </button>
//   );
// });

// const StyledButton = styled(Button, { shouldForwardProp: () => true })(
//   ({ theme }) => `
//   font-family: IBM Plex Sans, sans-serif;
//   font-size: 0.875rem;
//   box-sizing: border-box;
//   min-height: calc(1.5em + 22px);
//   min-width: 280px;
//   padding: 8px 20px ;
//   border-radius: 20px;
//   text-align: left;
//   line-height: 1.5;
//   background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
//   border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
//   color: #BDBDBD;
//   position: relative;

//   transition-property: all;
//   transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
//   transition-duration: 120ms;

//   &:hover {
//     background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
//     border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
//   }

//   &.${selectUnstyledClasses.focusVisible} {
//     border-color: ${blue[400]};
//     outline: 3px solid ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
//   }

//   & > svg {
//     // font-size: 1rem;
//     // position: absolute;
//     // height: 100%;
//     // top: 0;
//     // right: 10px;
//     display: none;
//   }
//   &::after{
//     content: "";
//     position: absolute;
//     height: 100%;
//     top: 0;
//     right: 10px;
//     display: block;
//     width: 18px;
//     height: 9px;
//     background-image: url("data:image/svg+xml,%3Csvg width='20' height='11' viewBox='0 0 20 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L10 10L19 1' stroke='black'/%3E%3C/svg%3E ");
//     background-size: contain;
//     background-repeat: no-repeat;
//     background-position: center;
//   }


//   `,
// );

// const StyledListbox = styled('ul')(
//   ({ theme }) => `
//   font-family: IBM Plex Sans, sans-serif;
//   font-size: 0.875rem;
//   box-sizing: border-box;
//   padding: 6px;
//   margin: 12px 0;
//   min-width: 280px;
//   overflow: auto;
//   outline: 0px;
//   border: none
//   color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
// background: rgba(255, 255, 255, 0.7);
// box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
// backdrop-filter: blur(25px);
// border-radius: 20px;
//   `,
// );

// const StyledOption = styled(OptionUnstyled)(
//   ({ theme }) => `
//   list-style: none;
//   padding: 8px;
//   border-radius: 8px;
//   cursor: default;

//   &:last-of-type {
//     border-bottom: none;
//   }

//   &.${optionUnstyledClasses.selected} {
//     background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
//     color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
//   }

//   &.${optionUnstyledClasses.highlighted} {
//     background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
//     color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
//   }

//   &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
//     background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
//     color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
//   }

//   &.${optionUnstyledClasses.disabled} {
//     color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
//   }

//   &:hover:not(.${optionUnstyledClasses.disabled}) {
//     background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
//     color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
//   }
//   `,
// );

// const StyledPopper = styled(PopperUnstyled)`
//   z-index: 1;
// `;

// const CustomSelect = React.forwardRef(function(
//   props,
//   ref
// ) {
//   const components = {
//     Root: StyledButton,
//     Listbox: StyledListbox,
//     Popper: StyledPopper,
//     ...props.components,
//   };

//   return <SelectUnstyled {...props} ref={ref} components={components} />;
// });

// export  function SelectCategory() {

//         const selects = useSelector(getSelects)
//     console.log(selects);
//   return (
//     <CustomSelect defaultValue={5}>
//          <StyledOption value={5}>Select a category</StyledOption>
//          {selects?.map(item=>{return <StyledOption value={item.id}>{item.name}</StyledOption>})}
     
//     </CustomSelect>
//   );
// }





















// import * as React from 'react';
// import Select from '@mui/material/Select';
// import { useSelector } from 'react-redux'
// import { getSelects } from 'redux/transactions/selectorsTransactions'
// import DropdownIndicator from './DropdownIndicator';
// import { selectStyles } from './selectStyles';

// export const SelectCategory =() =>{
 
    
//         const categories = useSelector(getSelects)
// console.log(categories);
//             return <>
//           <Select
//             // key={transactionType}
//             styles={selectStyles(true)}
//             components={{ DropdownIndicator }}
//             options={categories.map(option => ({ value: option, label: option }))}
//             placeholder="Select a category"
//             // onChange={option => {
//             //   updateTransaction('category', option.value);
//             // }}
//             isSearchable={false}
//           />
//         </>
//         }


















// import * as React from 'react';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import { useSelector } from 'react-redux'
// import { getSelects } from 'redux/transactions/selectorsTransactions'

// export const SelectCategory =() =>{
//   const [age, setAge] = React.useState('');

//     const selects = useSelector(getSelects)
//     console.log(selects);

//   const handleChange = (event) => {
//     setAge(event.target.value);
//   };

//   return (
//     <div>
    
//       <FormControl sx={{ m: 1, minWidth: 120 }}>
//         <Select
//           value={age}
//           onChange={handleChange}
//           displayEmpty
//           inputProps={{ 'aria-label': 'Without label' }}
//         >
//           <MenuItem value="">
//             <em>Select a category</em>
//           </MenuItem>
//           {selects.map(item=><MenuItem value={item.value}>{item.label}</MenuItem>) }
//         </Select>
      
//       </FormControl>
//     </div>
//   );
// }








// import React from 'react'
// import { useSelector } from 'react-redux'
// import { getSelects } from 'redux/transactions/selectorsTransactions'
// import { Selects , Option } from './SelectCategory.styled'



// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' }
// ]

// export const SelectCategory = () => {
//     const selects = useSelector(getSelects)
//     console.log(selects);

//     return <Selects name="select" placeholder="Select a category">
//     {selects.map(item=><Option value={item.value}>{item.label}</Option>) }
//   </Selects>}





// import * as React from 'react';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormHelperText from '@mui/material/FormHelperText';
// import FormControl from '@mui/material/FormControl';
// import Select, { SelectChangeEvent } from '@mui/material/Select';

// export default function SelectLabels() {
//   const [age, setAge] = React.useState('');

//   const handleChange = (event: SelectChangeEvent) => {
//     setAge(event.target.value);
//   };

//   return (
//     <div>
  
//       <FormControl sx={{ m: 1, minWidth: 120 }}>
//         <Select
//           value={age}
//           onChange={handleChange}
//           displayEmpty
//           inputProps={{ 'aria-label': 'Without label' }}
//         >
//           <MenuItem value="">
//             <em>None</em>
//           </MenuItem>
//           <MenuItem value={10}>Ten</MenuItem>
//           <MenuItem value={20}>Twenty</MenuItem>
//           <MenuItem value={30}>Thirty</MenuItem>
//         </Select>
      
//       </FormControl>
//     </div>
//   );
// }


















// import React from 'react'
// import { useSelector } from 'react-redux'
// import { getSelects } from 'redux/transactions/selectorsTransactions'
// import { SelectCategoryStyle } from './SelectCategory.styled'


// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' }
// ]

// export const SelectCategory = () => {
//     const selects = useSelector(getSelects)
//     console.log(selects);

    // return <SelectCategoryStyle options={selects} placeholder= 'Select a category'  theme={theme => ({
    //     ...theme,
    //     colors: {
    //         ...theme.colors,
    //         neutral50: '#BDBDBD',  // Placeholder color
    //     },
    // })} />}

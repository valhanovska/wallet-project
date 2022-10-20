export const getSelects = state => state.transactionCategories.categories;
// {
//   const arr = state.transactionCategories.categories;
//   console.log(arr);
//   const arr2 = arr.map(item => item.name);
//   const arr3 = arr2.filter(item => item !== 'Income');
//   return arr3.map(item => {
//     return { value: item.toLowerCase(), label: item };
//   });
// };





// Array.map(item=> item.type!=='Income'? ucFirst(item.name): null)

// arr.map(item=> item.type!=='Income'?  item.name[1].charAt(0).toUpperCase()+ item.name[1].slice(1) : null)

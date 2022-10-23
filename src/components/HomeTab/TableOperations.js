export const onDelete = (e, items) => {
  
  const id = e.target.id;
  console.log(items.filter(item => item.id !== id));
};

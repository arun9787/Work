const arr = [
    {id: 1, name: 'Stephen covey' }, 
    {id: 2, name: 'Robin Sharma' }, 
    {id: 3, name:'Tolstoy'}, 
    {id: 4, name: 'Tolstoy'}, 
    {id: 5, name: 'James clear'}];
  
  const uniqueIds = new Set();
  
  const unique = arr.filter(element => {
    const isDuplicate1 = uniqueIds.has(element.id);
    uniqueIds.add(element.id);
    const isDuplicate2 = uniqueIds.has(element.name);
    uniqueIds.add(element.name);
 
      return !isDuplicate1&&!isDuplicate2;
  });
  console.log(unique);
  


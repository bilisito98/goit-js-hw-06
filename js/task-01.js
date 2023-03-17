const categoriesLi = document.querySelectorAll('.item')
const categoriesUL = document.querySelectorAll('#categories')

console.log(`Number of categories: ${categoriesLi.length}`);



  for(let element of categoriesLi){
     console.log(`Category: ${element.querySelector('h2').textContent}`)
     console.log(`Elements: ${element.querySelectorAll('li').length}`)
  }
const categoriesArray = [
    { id: 1, category: 'mythology' },
    { id: 2, category: 'sports' },
    { id: 3, category: 'history' },
    { id: 4, category: 'politics' },
    { id: 5, category: 'animals' },
    { id: 6, category: 'art' },
    { id: 7, category: 'geography' },
    
];
const num_que = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numberdropdown = document.getElementById('questions');
const categorydropdown = document.getElementById('categories');
const form = document.querySelector('form');

num_que.forEach(value => {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = value;
    numberdropdown.appendChild(option);
});

categoriesArray.forEach(item => {
    const option = document.createElement('option');
    option.value = item.id;
    option.textContent = item.category;
    categorydropdown.appendChild(option);
});

form.addEventListener("submit", function(event) {
    event.preventDefault();

     const number_que_url = numberdropdown.value;
     const category_url = categorydropdown.value;
     console.log(number_que_url,category_url)
});

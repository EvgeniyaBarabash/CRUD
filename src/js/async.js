const BASE_URL = `http://localhost:3004`;
let path = `/books`;

let url = BASE_URL + path;
console.log(url);

// GET

async function getBook() {
  try {
    const responce = await fetch(url);
    const book = await responce.json();
  } catch {
    console.log(error);
  }
  return book;
}
// getBook()

// POST

const obj = {
  title: 'Унесенные ветром',
  author: 'Маргарет Митчелл',
  genres: ['классика'],
  rating: 10.0,
};

const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(obj),
};
async function addBook() {
  try {
    const responce = await fetch(url, options);
    const book = await responce.json();
  } catch {
    console.log(error);
  }

  return book;
}
// addBook()

// PATCH

async function updateBook(update, bookId) {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(update),
  };
  try {
    const responce = await fetch(`${url}/${bookId}`, options);
    const book = await responce.json();
  } catch {
    console.log(error);
  }
}
// getBook()
updateBook({ rating: 2.0 }, 10);

// PUT

async function putBook(update, bookId) {
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const responce = await fetch(`${url}/${bookId}`, options);
    const book = await responce.json();
  } catch {
    console.log(error);
  }
  return book;
}
// putBook({ title: 'Унесенные ветром - моя любимая книга' }, 11);
// getBook();

// DELETE

async function deleteBook(bookId){
const options={
    method:'DELETE',
    headers:{
        'Content-Type': 'application/json',
    }
};
try{
    const responce = await fetch(`${url}/${bookId}`, options);
    const book = await responce.json();
    
}catch{
    console.log(error);
}

}
// deleteBook(9)

// getBook()



// task

async function loadJson(url) {
    try{
        const response = await fetch(url);
        if (response.status == 200){
            const load = await responce.json()
        }
       
    }catch{
        throw new Error(response.status);
    }
 
  }
  
  loadJson('no-such-user.json') // (3)
    .catch(alert); // Error: 404
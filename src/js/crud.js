
const BASE_URL = `http://localhost:3004`;
let path = `/books`


let url = BASE_URL + path
console.log(url)

// GET

function getBook() {
    fetch(url).then(responce => {
        if (responce.status === 200) return responce.json();
        if (responce.status !== 200) throw new Error(responce.status)
    })
        .catch(error => console.log(error))
};
// getBook()

function getBookById(bookId){
    fetch(`${url}/${bookId}`).then(r=>console.log(r.json())).catch(error => console.log(error))
}
// getBookById(2)

// POST

const obj={
      "title": "Унесенные ветром",
      "author": "Маргарет Митчелл",
      "genres": [
        "классика"
      ],
      "rating": 9.75
};
const options={
    method:'POST',
    headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj)
}

function updateBook(){
    fetch(url,options).then(r=>r.json()).catch(error => console.log(error))
};
// updateBook()
// getBook()

// PATCH



function updateBook(update, bookId){
    const options={
        method:'PATCH',
        headers:{
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(update)
    }
fetch(`${url}/${bookId}`,options).then((r)=>r.json()).catch(error => console.log(error))
};
// updateBook({"rating": 2.0},1)
// getBook()

// PUT
 
function putBook(update, bookId){
    const options={
        method:'PUT',
        headers:{
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(update)
    }
    fetch(`${url}/${bookId}`,options).then(r=>r.json()).catch(error => console.log(error))
};
// putBook({'author': 'Robert'},2)


// DELETE

function deleteBook(bookId){
const options={
    method:'DELETE',
    headers:{
        'Content-Type': 'application/json',
    },}
    fetch(`${url}/${bookId}`, options).then(r=>r.json()).catch(error => console.log(error))
};
// deleteBook(6)

// getBook()
// deleteBook(7)
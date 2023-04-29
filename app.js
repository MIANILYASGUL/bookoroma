document.addEventListener('DOMContentLoaded', function(){
    //The Query Selector

var wmf=document.querySelector('#wrapper');
console.log(wmf);
var books=document.querySelector('#book-list li .name');
console.log(books);
books=document.querySelectorAll('#book-list li .name');
console.log(books);
Array.from(books).forEach(function(book){
    console.log(book);

});
//change Text content & HTML Content
var books=document.querySelectorAll('#book-list li .name');
Array.from(books).forEach(function(book){
    book.textContent+='(BOOK LISTS)';

}
);
const booklist=document.querySelector('#book-list');
booklist.innerHTML+="<p>This is how you add HTML</p>";
// NODES IN JV
const banner=document.querySelector("#page-banner");
console.log('#page-banner node type is:', banner.nodeType);
console.log("#page-banner node name is; ",banner.nodeName);
console.log('#page-bannner has child nodes:',banner.hasChildNodes());
const clonedBanner=banner.cloneNode(true);
console.log(clonedBanner);
//Traversing in JV
const bookList=document.querySelector("#book-list");
console.log('the parent node is :',bookList.parentNode);
console.log('the parent element is:',bookList.parentElement.parentElement);
console.log(bookList.children);
// Traversing Part 2
console.log('book-list next sibling is :',bookList.nextSibling);
console.log("book-list next element sibling is:",bookList.nextElementSibling);
console.log('book-list previous sibling is :',bookList.previousSibling);
console.log("book-list next previous sibling is:",bookList.previousElementSibling);
bookList.previousElementSibling.querySelector('p').innerHTML +='<br/> Too Cool For Everyone Else!';

//EVENTS In JV
var h2=document.querySelector("#book-list h2");
h2.addEventListener('click', function(e){
    console.log(e.target);
    console.log(e);

});
var btns=document.querySelectorAll("#book-list .delete");
Array.from(btns).forEach(function(btn){
    btn.addEventListener('click', function(d){
        const li=d.target.parentElement;
        li.parentNode.removeChild(li)

    });

});
const link=document.querySelector("#page-banner a");
 link.addEventListener('click', function (e){
    e.preventDefault();
    console.log('navigation to', e.target.textContent, "was prevented");
 })
 
 //Event Bubbling                  //best way to delete event
 const list=document.querySelector("#book-list ul");
 list.addEventListener('click', function(e){
    if(e.target.className=='delete'){
        const li =e.target.parentElement;
        li.parentNode.removeChild(li)
    }
 })
 
 // Interacting With Forms           
 // Add book-list
 const addForm=document.forms['add-book'];
 addForm.addEventListener('submit',function(e) {
         e.preventDefault();    
         const value = addForm.querySelector('input[type="text"]').value;
         // Creat Element
         const li = document.createElement('li');
         const bookName = document.createElement('span');
         const deleteBtn = document.createElement('span');
         //Add Content
         deleteBtn.textContent = 'delete';
         bookName.textContent = value;
        //ADD Classes
        bookName.classList.add('name');
        deleteBtn.classList.add('delete');

         //append to Document
         li.appendChild(bookName);
         li.appendChild(deleteBtn);
         list.appendChild(li);
     });
     
     // Attributes
     var book=document.querySelector('li:first-child .name');
     console.log(book);
     book.getAttribute('class');

     book.setAttribute('class', 'name2');
     //book.removeAttribute('class', 'name2');
     book.hasAttribute('class');

     // Hide Books
     const hideBook=document.querySelector("#hide");
     hideBook.addEventListener('change',function(e){
        if(hideBook.checked){
            list.style.display='none';
        }else{
            list.style.display="initial";
        }
     })
 // Filter The Books
 const searchBook=document.forms['search-books'].querySelector('input');
 searchBook.addEventListener('keyup', function(e){
    const term=e.target.value.toLowerCase();
    const books=list.getElementsByTagName('li');
    Array.from(books).forEach(function(book){
        const title=book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term)!=-1){
            book.style.display='block';
        }else{
            book.style.display='none';
        }
    })
 })
 //Tapped Content
 const tabs=document.querySelector('.tabs');
 const panels=document.querySelectorAll('.panel');
 tabs.addEventListener('click', function(e){
    if(e.target.tagName=="LI"){
        const targetPanel=document.querySelector(e.target.dataset.target);
        panels.forEach(function(panel){
            if(panel==targetPanel){
                panel.classList.add("active");
            }else{
                panel.classList.remove("active");

            }
        })
    }

 })

})


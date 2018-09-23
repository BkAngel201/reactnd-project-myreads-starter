# MyReads 
Project
Udacity Front End Nanodegree project that allow the user to put books into one of 4 categories, Read, Currently reading, want to read or none from a list of books.



## How it works
- In the home page you can see the list of books splited in 3 categories, Read, Want to read and Currently reading, you can change the category in that page and the change will be updated automatically.

- In the search page you can search for different terms (see terms that are allowed on the `SEARCH_TERMS.md` file), books under that search term will show and you can select what category you want to put it in.


## How to install and run it

- install all project dependencies with `npm install`

- start the development server with `npm start`



## Table of Content

```bash

├── CONTRIBUTING.md
├── README.md - This file.

├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.

├── package.json # npm package manager file. 

├── public

│   ├── favicon.ico # React Icon.

│   ├── images # The book cover for not provided book cover in the API

│   └── index.html

└── src
    
     ├── App.css # Styles for the app.
 
    ├── App.js # This is the root file for the app.

     ├── App.test.js # Used for testing. Provided with Create React App.
 
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend.
 
    ├── BookDetail.js # This file contains the BookDetails component that show details for individual book.
 
    ├── BookList.js # This file contains the BookList component that show list of books split in categories.
 
    ├── SearchBook.js # This file contains the SearchBook component  that show books on the search page accord to the list od terms listed on SEARCH_TERMS.md file.
 
    ├── AnnounceGlobe.js # This file contains the AnnounceGlobe component that shows everytime a book change it shalf state.

     ├── icons # Helpful images for your app. Use at your discretion.

     │   ├── add.svg
    
     │   ├── arrow-back.svg

     │   └── arrow-drop-down.svg

     ├── index.css # Global styles.
 
    └── index.js # it is used for DOM rendering only. 

```

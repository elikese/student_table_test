import React, { useState } from 'react';

function SearchPage(props) {
  const categorys = [
    {
      categoryId: 1,
      categoryName: "역사"
    },
    {
      categoryId: 2,
      categoryName: "문학"
    },
    {
      categoryId: 3,
      categoryName: "컴퓨터"
    },
  ]

  const bookObj = {
    bookId: 0,
    bookName: "책",
    category: 0
  }

  const [books, setBooks] = useState([]);

  return (

    <div>

    </div>
  );
}

export default SearchPage;
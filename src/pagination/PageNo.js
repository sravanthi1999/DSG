import React from "react";

const PageNo = ({ postsPerPage, totalPosts, paginate }) => {
  const PageNum = [];

  for (let i = 0; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    PageNum.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {PageNum.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PageNo;

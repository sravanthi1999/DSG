import React, { useEffect, useState } from "react";
import axios from "axios";
import Posts from "./Posts";
import PageNo from "./PageNo";

const Pagging = () => {
  const [post, setPost] = useState([]);
  const [load, setLoad] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);

  useEffect(() => {
    const fetchPost = async () => {
      setLoad(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPost(res.data);
      setLoad(false);
    };
    fetchPost();
  }, []);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //   console.log(post);
  //get  current posts

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = post.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <div>
        <h1 className="text-primary mb-3">Pagination</h1>
        <Posts posts={currentPosts} load={load} />
        <PageNo
          postsPerPage={postPerPage}
          totalPosts={post.length}
          paginate={paginate}
        />
      </div>
    </>
  );
};

export default Pagging;

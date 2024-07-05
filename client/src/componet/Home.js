import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import Footer from "./Footer";

function Home() {
  const [postdata, setPostData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetch('http://localhost:5000/getpostdata')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPostData(data);
      });
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const filteredPosts = postdata.filter((item) =>
    item.videoNo.toString().includes(searchTerm)
  );

  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + itemsPerPage);

  const renderPageNumbers = () => {
    let pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={`page-button ${currentPage === i ? 'active' : ''}`}
          >
            {i}
          </button>
        );
      } else if (i === 2 && currentPage > 3) {
        pageNumbers.push(<span key="ellipsis1">...</span>);
      } else if (i === totalPages - 1 && currentPage < totalPages - 2) {
        pageNumbers.push(<span key="ellipsis2">...</span>);
      }
    }
    return pageNumbers;
  };

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <div className="all-cards">
        <div className="row row-cols-2 row-cols-md-5 g-4">
          {currentPosts.map((items) => (
            <Link to={items.link} key={items._id}>
              <div className="col">
                <div className="card">
                  <img src={`http://localhost:5000/${items.image}`} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Video No: {items.videoNo}</h5>
                    <span><i className="bi bi-eye-fill"></i> {items.views}k</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="pagination">
        {currentPage > 1 && (
          <button onClick={handlePreviousPage} className="nav-button">Previous</button>
        )}
        {renderPageNumbers()}
        {currentPage < totalPages && (
          <button onClick={handleNextPage} className="nav-button">Next</button>
        )}
      </div>


      <Footer/>
    </>
  );
}

export default Home;

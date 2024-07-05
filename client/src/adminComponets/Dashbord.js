import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  const [image, setImg] = useState('');
  const [videoNo, setVideoNo] = useState('');
  const [views, setViews] = useState('');
  const [link, setLink] = useState('');
  const [postdata, setData] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(image, videoNo, views, link);

    const formData = new FormData();
    formData.append("image", image);
    formData.append("videoNo", videoNo);
    formData.append("views", views);
    formData.append("link", link);

    fetch('http://localhost:5000/postdata', {
      method: "POST",
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      if (data._id) {
        e.target.reset();
        // Reset the state
        setImg('');
        setVideoNo('');
        setViews('');
        setLink('');
        // Reload the posts
        fetchPostData();
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  const fetchPostData = () => {
    fetch('http://localhost:5000/getpostdata')
    .then(res => res.json())
    .then(data => {
      // console.log(data)
      setData(data);
    });
  };

  useEffect(() => {
    fetchPostData();
  }, []);

  return (
    <>
      <div className="w-50 m-auto pt-5">
        <button className="form-control btn btn-light mt-5 d-flex justify-content-center m-auto" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Post</button>
      </div>

      <div className="all-cards">
        <div className="row row-cols-2 row-cols-md-5 g-4">
          {postdata.map((items) => (
            <Link to={items.link} key={items._id}>
              <div className="col">
                <div className="card">
                  <img src={`http://localhost:5000/${items.image}`} className="card-img-top" alt="..." />
                  <div className="card-body d-flex justify-content-between">
                    <div>
                    <h5 className="card-title">Video No: {items.videoNo}</h5>
                    <span><i className="bi bi-eye-fill"></i>{items.views}K</span>
                    </div>

                    <div>
                    <div>
                      <i className="bi bi-trash3" />
                      <i className="bi bi-pencil-square d-block" />
</div>

                    </div>

                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Add a Post modal */}
      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <form onSubmit={handleSubmit} className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 text-light" id="exampleModalLabel">Add A Post</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <label htmlFor="image">Image</label>
              <input onChange={(e) => setImg(e.target.files[0])} className="form-control" type="file" id="image" name="image" />
              <label htmlFor="videoNo">Video No.</label>
              <input onChange={(e) => setVideoNo(e.target.value)} className="form-control" type="number" id="videoNo" name="videoNo" />
              <label htmlFor="views">Views</label>
              <input onChange={(e) => setViews(e.target.value)} className="form-control" type="number" id="views" name="views" />
              <label htmlFor="link">Video Link</label>
              <input onChange={(e) => setLink(e.target.value)} className="form-control" type="text" id="link" name="link" />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Close</button>
              <button type="submit" className="btn btn-light" data-bs-dismiss="modal">ADD</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Dashboard;

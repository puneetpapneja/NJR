import { useEffect, useState } from "react";

function Dashboard() {
  const [imageUrl, setImgUrl] = useState('');
  const [videoNo, setVideoNo] = useState('');
  const [views, setViews] = useState('');
  const [link, setLink] = useState('');
  const [postdata, setData] = useState([]);
  const [postId, setPostId] = useState('');
  const [isUpdateMode, setIsUpdateMode] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = { imageUrl, videoNo, views, link };

    const url = isUpdateMode
      ? `https://majeback.onrender.com/updatepost/${postId}`
      : 'https://majeback.onrender.com/postdata';

    const method = isUpdateMode ? 'PUT' : 'POST';

    fetch(url, {
      method,
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (data._id) {
          e.target.reset();
          setImgUrl('');
          setVideoNo('');
          setViews('');
          setLink('');
          fetchPostData();
          setIsUpdateMode(false);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  const fetchPostData = () => {
    fetch('https://majeback.onrender.com/getpostdata',{
      mode: 'cors',
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    fetchPostData();
  }, []);

  function handleDelete(id) {
    fetch(`https://majeback.onrender.com/deletepost/${id}`, {
      method: "DELETE"
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        if (data._id) {
          fetchPostData();
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  function openUpdateModal(item) {
    setIsUpdateMode(true);
    setPostId(item._id);
    setImgUrl(item.imageUrl);
    setVideoNo(item.videoNo);
    setViews(item.views);
    setLink(item.link);
  }

  return (
    <>
      <div className="w-50 m-auto pt-5">
        <button className="form-control btn btn-light mt-5 d-flex justify-content-center m-auto" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Post</button>
      </div>

      <div className="all-cards">
        <div className="row row-cols-2 row-cols-md-5 g-4">
          {postdata.map((item) => (
            <div className="col" key={item._id}>
              <div className="card">
                <img src={item.imageUrl} className="card-img-top" alt="..." />
                <div className="card-body d-flex justify-content-between">
                  <div>
                    <h5 className="card-title">Video No: {item.videoNo}</h5>
                    <span><i className="bi bi-eye-fill"></i>{item.views}K</span>
                  </div>
                  <div>
                    <i onClick={() => handleDelete(item._id)} style={{ color: "#ffff" }} className="bi bi-trash3" />
                    <i onClick={() => openUpdateModal(item)} data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ color: "#cd1f7c" }} className="bi bi-pencil-square d-block" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Add/Update Post */}
      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <form onSubmit={handleSubmit} className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 text-light" id="exampleModalLabel">{isUpdateMode ? 'Update Post' : 'Add A Post'}</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <label htmlFor="image">Image Url</label>
              <input value={imageUrl} onChange={(e) => setImgUrl(e.target.value)} className="form-control" type="text" name="imageUrl" id="image" />
              <label htmlFor="videoNo">Video No.</label>
              <input value={videoNo} onChange={(e) => setVideoNo(e.target.value)} className="form-control" type="number" id="videoNo" name="videoNo" />
              <label htmlFor="views">Views</label>
              <input value={views} onChange={(e) => setViews(e.target.value)} className="form-control" type="number" id="views" name="views" />
              <label htmlFor="link">Video Link</label>
              <input value={link} onChange={(e) => setLink(e.target.value)} className="form-control" type="text" id="link" name="link" />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Close</button>
              <button type="submit" className="btn btn-light">{isUpdateMode ? 'Update' : 'Add'}</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Dashboard;

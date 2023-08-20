import React, { useState } from "react";

export const Addtodo = (props) => {

    const [title,settitle] = useState("")
    const [desc,setdesc] = useState("")

    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert("Title or disc cann't be empty")
        }

        else{
            props.addtodo(title,desc);
            settitle("")
            setdesc("")
        }
    }

  return (
    <div className="container my-3">
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={title}
            onChange={(e)=>{settitle(e.target.value)}}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Disc
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={desc}
            onChange={(e)=>{setdesc(e.target.value)}}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

import React from "react";
import "./Form.css";
import { useState } from "react";

const ContactForm = () => {
  const [data, setdata] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [record, setrecord] = useState([""]);
  const handle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setdata({ ...data, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newObject = { ...data, id: new Date().getTime().toString };
    if (data.name === "" || data.email === "" || data.message === "") {
      alert("all section is madatory to fill.");
    } else {
      setrecord([...record, newObject]);
    }
    setdata({ name: "", email: "", message: "" });
  };

  return (
    <div className="form-conatiner">
      <form className="form" onSubmit={handleSubmit}>
        <label>your name</label>
        <input
          name="name"
          type="text"
          value={data.name}
          onChange={handle}
        ></input>
        <label>email</label>
        <input
          name="email"
          type="email"
          value={data.email}
          onChange={handle}
        ></input>
        <label>message</label>
        <textarea
          name="message"
          placeholder="Any Feedback"
          id=""
          cols="30"
          rows="6"
          value={data.message}
          onChange={handle}
        ></textarea>
        <button className="btn-form">submit</button>
      </form>
      <table className="table">
        <thead>
          <tr>
            <th className="thead">UserName</th>
            <th className="thead">Email_Id</th>
            <th className="thead">Feedback</th>
          </tr>
        </thead>
        {record.map((item) => {
          return (
            <tr key={item.id}>
              <th>{item.name}</th>
              <th>{item.email}</th>
              <th>{item.message}</th>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default ContactForm;

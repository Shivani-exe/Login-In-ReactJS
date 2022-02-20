import React, { useState } from "react";

function LoginForm({ Login, error }) {
  let [details, setDetails] = useState({ name: "", email: "", passsword: "" });

  let submithandler = (e) => {
    e.preventDefault();
    Login(details);
  };
  return (
    <form onSubmit={submithandler}>
      <div className="form-inner">
        <h2>LOGIN</h2>
        {error !== " " ? <div className="error">{error}</div> : ""}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>
        <input type="submit" value="SUBMIT" id="submit" />
      </div>
    </form>
  );
}
export default LoginForm;

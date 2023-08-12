// import React, { useState } from "react";
// import { Button, Form, Row, Col } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

// const Loginpage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (email === "" || password === "") {
//       alert("Please enter your email and password.");
//       return;
//     }
//   };

//   return (
//     <div className="container">
//       <div className="login-box">
//         <h1 className="text-center">Login</h1>
//         <Form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <input
//               type="email"
//               className="form-control"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="password"
//               className="form-control"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <Row>
//             <Col>
//               <Button type="submit" className="btn btn-primary">Login</Button>
//             </Col>
//           </Row>
//         </Form>
//         <p>
//           Don't have an account? <a href="#">Register Now</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Loginpage;

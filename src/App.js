import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [FirstName, setFirstState] = useState("");
  function NameTxtFunction(event) {
    setFirstState(event.target.value);
  }

  const [LastName, setLastState] = useState("");
  function LastTxtFunction(event) {
    setLastState(event.target.value);
  }

  const [Email, setEmailState] = useState("");
  function EmailTxtFunction(event) {
    setEmailState(event.target.value);
  }
  const [Password, setPasswordState] = useState("");
  function PassTxtFunction(event) {
    setPasswordState(event.target.value);
  }
  const [Phone, setPhoneState] = useState("");
  function PhoneTxtFunction(event) {
    setPhoneState(event.target.value);
  }
  const [Address, setAddressState] = useState("");
  function AddressTxtFunction(event) {
    setAddressState(event.target.value);
  }

  function RegisterData() {
    axios
      .post("http://localhost:8000/registerData", {
        FirstName: FirstName,
        LastName: LastName,
        Email: Email,
        Password: Password,
        Phone: Phone,
        Address: Address,
      })
      .then((response) => {
        alert(response.data);
        console.log("Insert Successfully");
      })
      .catch(() => {
        alert("not");
        console.log("Oops, request is failed");
      });
  }
  return (
    <div className="App">
      <div className="reg-main">
        <h1>Register Form</h1>
        First Name
        <input
          name="password"
          style={{ margin: "5px" }}
          type="text"
          onChange={(e) => NameTxtFunction(e)}
        />
        <br />
        <br />
        Last Name
        <input
          name="password"
          style={{ margin: "5px" }}
          type="text"
          onChange={LastTxtFunction}
        />
        <br />
        <br />
        Email
        <input
          name="password"
          style={{ margin: "5px" }}
          type="text"
          onChange={EmailTxtFunction}
        />
        <br />
        <br />
        Password
        <input
          name="password"
          style={{ margin: "5px" }}
          type="text"
          onChange={PassTxtFunction}
        />
        <br />
        <br />
        Phone
        <input
          name="password"
          style={{ margin: "5px" }}
          type="text"
          onChange={PhoneTxtFunction}
        />
        <br />
        <br />
        Address
        <input
          name="password"
          style={{ margin: "5px" }}
          type="text"
          onChange={AddressTxtFunction}
        />
        <br />
        <br />
        <button onClick={RegisterData}>Log in</button>
        {/* <br />
        <br />
        <div>
          <h3>Data list</h3>
          <table>
            <tr>
              <th>No</th>
              <th>Frist Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Phone</th>
              <th>Address</th>
            </tr>
            <tr>
              <td>{No}</td>
            </tr>
            <tr>
              <td>{FirstName}</td>
            </tr>
            <tr>
              <td>{LastName}</td>
            </tr>
            <tr>
              <td>{Email}</td>
            </tr>
            <tr>
              <td>{Password}</td>
            </tr>
            <tr>
              <td>{Phone}</td>
            </tr>
            <tr>
              <td>{Address}</td>
            </tr>
          </table>
        </div> */}
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [isValidate, setIsValidate] = useState(false);


  // add data to database
  const addData = async (values) => {
    setData([...data, values]);
    await fetch("http://localhost:8081/api/addData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };



  //get data from database
  const getData = async () => {

    await fetch("http://localhost:8081/api/getData")
          .then(res => res.json())
          .then(userData => setData(userData.data))
          .catch(err => console.log(err))
  }
  useEffect(() => {
    getData();
  },[])



  //Login api
  const login = async (credential) => {
  await fetch("http://localhost:8081/api/login",{
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(credential)
    })
          .then(res => res.json())
          .then(data =>{
            alert(data.message);
            if(data.status === "success"){
              setIsValidate(true);
            } else{
              setIsValidate(false);
            }
            // console.log(data)
          })
          .catch(err => console.log(err))
  }

  // console.log(data);
  // console.log(isValidate);

  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Login" element={<Login data = {data} login = {login} isValidate = {isValidate}/>}></Route>
          <Route
            path="/Register"
            element={<Register addData={addData} />}
          ></Route>
        </Routes>
    </div>
  );
}

export default App;

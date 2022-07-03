import React from "react";
import "./App.css";


const App = () => {

  return (
    <>
      <h1 className=" text-danger text-capitalize text-center my-1">Welcome to my channel</h1>

      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card" >
  <img src="https://picsum.photos/200" className="card-img-top" alt="..." height="100%"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://www.google.com" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
          </div>
          <div className="col">
            <div className="card">
  <img src="https://picsum.photos/201" className="card-img-top" alt="..." height="100%"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://www.google.com" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
          </div>
          <div className="col">
            <div className="card">
  <img src="https://picsum.photos/2002" className="card-img-top" alt="..." height="100%"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://www.google.com" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
          </div>
        </div>
      </div>

    </>
  );
}
export default App;
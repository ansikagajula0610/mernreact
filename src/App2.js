import React from "react";
import "./App2.css"
export default function App2(props) {
    let city='Hyderabad'
    let a=6
    let b=15
  return (
    <div className="App2">
        <h3>Hello {props.name} Welcome to MyStore!</h3>
    <p className="textstyle">
        Age:{props.age},{city}<br></br>
        Sum:{a+b}<br></br>
       Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged.
    </p>
    </div>
  );
}

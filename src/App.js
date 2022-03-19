// 1. To import React Hooks use: React.useState()
// 2. To add Fragments use: <React.Fragments></React.Fragments>
// 3. You can use bootstrap 5 and CSS
import React from "react";
import {
  // you can add others functions of react-router-dom here:
  HashRouter,
} from "react-router-dom";

// You can add other components here

const RegisterForm = () => {
  const userSuccessRegister = (e) => {
    e.preventDefault();
    var formData = new FormData(document.querySelector("form")); //use formData to get values from inputs
    const email = formData.get("email");
    const password = formData.get("password");
    // write your code here
  };

  return (
    <React.Fragment>
      <div></div>
    </React.Fragment>
  );
};

const ImgCard = (props) => {
  const [imageUrl, setImageUrl] = React.useState(null);

  const printImage = () => {
    var image = document.getElementById("image-url");
    setImageUrl(image.value);
  };

  return <div></div>;
};

const App = () => {
  return <div>hello</div>;
};

export default App;
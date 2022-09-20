import React, { useState } from "react";
import "./App.css";

function App() {
  const testKey = process.env.REACT_APP_TRANSLATE_API_KEY;

  const [inputText, setInputText] = useState("");
  const [selectValue, setSelectValue] = useState(1);
  const [searchResult, setSearchResult] = useState("");

  let options = [];
  for (let i = 1; i < 11; i++) {
    options.push(<option value={i}>{i}</option>);
  }

  const onChangeHandler = (event) => {
    setInputText(event.currentTarget.value);
  };
  const onClickHandler = () => {
    //组装url：先起个名字const XXX = https://url（粘贴的）？（问号） api key （写我们起的名字，在第五行）& 其他的parameter
    // ${}里面是引用起好的variable
    const translateUrl = `https://api.giphy.com/v1/gifs/translate?api_key=${testKey}&S=${inputText}&weirdness=${selectValue}`;
    console.log(translateUrl);
    fetch(translateUrl)
      .then((response) => {
        //response.json()会把传回来的数据/结果转换成{}/reable content
        response
          .json()
          //新的一个nested .then会获取response.json()的结果
          .then((result) => setSearchResult(result.data.images.downsized.url));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const selectValueHandler = (event) => {
    setSelectValue(event.currentTarget.value);
  };

  return (
    <div className="App">
      <input onChange={onChangeHandler} type="text"></input>
      <button onClick={onClickHandler}>Translate</button>
      <lable>"weirdness" value </lable>
      <select onChange={selectValueHandler}>{options}</select>
      <img src={searchResult}></img>
    </div>
  );
}

export default App;

// 小筆記:
// 若把各元件資料夾內的檔名命名為index.js
// 在引入該元件時只需指定元件的資料夾路徑即可無須檔名
// EX:import Home from './pages/Home';

import React from "react";
// 新版本的React有優化過了，上面這行可以不加
import Edit from "./components/Edit"
import List from "./components/List"
import Item from "./components/Item"

import "./index.css"

const Home = () => {
    return <div className="app">
        Home
        <Edit />
        <List />
    </div>
}

export default Home
// 小筆記:
// 若把各元件資料夾內的檔名命名為index.js
// 在引入該元件時只需指定元件的資料夾路徑即可無須檔名
// EX:import Home from './pages/Home';

import React from "react";
// 新版本的React有優化過了，上面這行可以不加

const Home = () => {
    return <div>Home</div>
}

export default Home
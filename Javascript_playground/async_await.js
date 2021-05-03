//https://www.oxxostudio.tw/articles/201908/js-async-await.html
~async function () {           // ~ 開頭表示直接執行這個 function，結尾有 ()
    const delay = (s) => {
        return new Promise(function (resolve) {  // 回傳一個 promise
            setTimeout(resolve, s);               // 等待多少秒之後 resolve()
        });
    };

    console.log(1);      // 顯示 1
    await delay(1000);   // 延遲ㄧ秒
    console.log(2);      // 顯示 2
    await delay(2000);   // 延遲二秒
    console.log(3);      // 顯示 3
}();
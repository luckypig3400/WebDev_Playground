//https://www.oxxostudio.tw/articles/201908/js-async-await.html
const delay = (s) => {
    return new Promise(resolve => {
        setTimeout(resolve, s);
    });
};

delay().then(() => {
    console.log(0);
    return delay(100);
}).then(() => {
    console.log(0.1);
    return delay(3200);
}).then(() => {
    console.log(3.3);
});
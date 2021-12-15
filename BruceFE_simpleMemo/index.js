const content = document.getElementById("content");
const date = document.getElementById("date");
const time = document.getElementById("time");
const addedBtn = document.getElementById("addedBtn");
const deletedBtn = document.getElementById("deletedBtn");

const list = [];

addedBtn.addEventListener('click', function (e) {
    list.push({
        content: content.value,
        date: date.value,
        time: time.value
    });

    console.log("新增了1筆備忘錄，內容如下:", list[list.length - 1])

});
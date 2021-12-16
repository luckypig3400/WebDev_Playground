const content = document.getElementById("content");
const date = document.getElementById("date");
const time = document.getElementById("time");
const addedBtn = document.getElementById("addedBtn");
const deletedBtn = document.getElementById("deletedBtn");
const listDiv = document.getElementById("list");

const list = [];

function renderMemo(){
    // 渲染頁面的List
    let listDivContent = "";
    list.forEach(function (item) {
        listDivContent += `
        <div class="item">
            <div>
                <p>內容：${item.content}</p>
                <p>時間：${item.date} ${item.time}</p>
            </div>
        </div>
        `
    });

    listDiv.innerHTML = listDivContent;
}

addedBtn.addEventListener('click', function (e) {
    list.unshift({// insert to start of array
        content: content.value,
        date: date.value,
        time: time.value
    });

    console.log("新增了1筆備忘錄，內容如下:", list[list.length - 1]);

    renderMemo();
});
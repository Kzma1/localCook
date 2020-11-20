// ローカルストレージを確認
if (localStorage.カレー) {
    document.querySelector(".curry").style.display = "block"
} else {
    document.querySelector(".curry").style.display = "none"
}

if (localStorage.シチュー) {
    document.querySelector(".shityu").style.display = "block"
} else {
    document.querySelector(".shityu").style.display = "none"
}

if (localStorage.こだわりのカレー) {
    document.querySelector(".luxuryCurry").style.display = "block"
} else {
    document.querySelector(".luxuryCurry").style.display = "none"
}

if (localStorage.肉じゃが) {
    document.querySelector(".nikujaga").style.display = "block"
} else {
    document.querySelector(".nikujaga").style.display = "none"
}

if (localStorage.失敗) {
    document.querySelector(".miss").style.display = "block"
} else {
    document.querySelector(".miss").style.display = "none"
}

document.querySelector(".replay").onclick = function() {
location.href = "../html/top.html";
}

// リセットボタン
document.querySelector(".clear").onclick = () => {
    localStorage.clear();
    location.href = "../html/list.html"
}

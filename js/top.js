// 予算をローカルストレージへ格納
document.querySelector(".decision").onclick = () => {
    const key = "予算"
    var radios = document.getElementsByName(name);
    var Value;
    
    for (var i=0; i < radios.length; i++) {
        console.log(i)
        if (radios[i].checked) {
        //選択されたラジオボタンのvalue値を取得する
        Value = radios[i].value;
        console.log(Value)
        break;
        }
    }

    //value値を表示する
    console.log(key, Value)
    localStorage.setItem(key, Value)
}

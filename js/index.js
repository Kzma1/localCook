$(function(){
    // 初期設定で各数値を０に設定

    // 食材の有無
    localStorage.setItem("じゃがいも", 0)
    localStorage.setItem("人参", 0)
    localStorage.setItem("肉", 0)
    localStorage.setItem("玉ねぎ", 0)
    localStorage.setItem("カレー粉", 0)
    localStorage.setItem("スパイス", 0)
    localStorage.setItem("シチュー粉", 0)
    localStorage.setItem("醤油", 0)

    // 食材の値段
    localStorage.setItem("じゃがいも値段", 0)
    localStorage.setItem("人参値段", 0)
    localStorage.setItem("肉値段", 0)
    localStorage.setItem("玉ねぎ値段", 0)
    localStorage.setItem("カレー粉値段", 0)
    localStorage.setItem("スパイス値段", 0)
    localStorage.setItem("シチュー粉値段", 0)
    localStorage.setItem("醤油値段", 0)

    // クリック数定義
    let click = 0;
    let num = 0;
    const countClick = () => {
        $(this).data("click", ++num);
        click = $(this).data("click");
    }

    // クリックした食材をローカルストレージへ格納
    // 偶数回クリックしたらストレージから削除
    document.querySelector("#jaga").onclick = () => {
        countClick();
        if (click % 2 != 0 ) {
            const key = "じゃがいも"
            let value = 1
            console.log(key, value)
            localStorage.setItem(key, value)

            const KEY ="じゃがいも値段"
            let price = 5
            localStorage.setItem(KEY, price)
            document.querySelector("#jaga").classList.add('choiseMenu')
        } else if (click % 2 === 0) {
            localStorage.setItem("じゃがいも", 0)
            localStorage.setItem("じゃがいも値段", 0)
            document.querySelector("#jaga").classList.remove('choiseMenu')
        }
    }

    document.querySelector("#ninjin").onclick = () => {
        countClick();
        if (click % 2 != 0 ) {
            const key = "人参"
            let value = 2
            console.log(key, value)
            localStorage.setItem(key, value)

            const KEY ="人参値段"
            let price = 5
            localStorage.setItem(KEY, price)
            document.querySelector("#ninjin").classList.add('choiseMenu')
        } else if (click %2 === 0) {
            localStorage.setItem("人参", 0)
            localStorage.setItem("人参値段", 0)
            document.querySelector("#ninjin").classList.remove('choiseMenu')
        }
    }

    document.querySelector("#niku").onclick = () => {
        countClick();
        if (click % 2 != 0 ) {
            const key = "肉"
            let value = 3
            console.log(key, value)
            localStorage.setItem(key, value)

            const KEY ="肉値段"
            let price = 3
            localStorage.setItem(KEY, price)
            document.querySelector("#niku").classList.add('choiseMenu')
        } else if (click % 2 === 0) {
            localStorage.setItem("肉", 0)
            localStorage.setItem("肉値段", 0)
            document.querySelector("#niku").classList.remove('choiseMenu')
        }
    }

    document.querySelector("#tama").onclick = () => {
        countClick();
        if (click % 2 != 0 ) {
        const key = "玉ねぎ"
        let value = 4
        console.log(key, value)
        localStorage.setItem(key, value)

        const KEY ="玉ねぎ値段"
        let price = 4
        localStorage.setItem(KEY, price)
        document.querySelector("#tama").classList.add('choiseMenu')
        } else if (click % 2 === 0) {
            localStorage.setItem("玉ねぎ", 0)
            localStorage.setItem("玉ねぎ値段", 0)
            document.querySelector("#tama").classList.remove('choiseMenu')
        }
    }

    document.querySelector("#kona").onclick = () => {
        countClick();
        if (click % 2 != 0 ) {
        const key = "カレー粉"
        let value = 5
        console.log(key, value)
        localStorage.setItem(key, value)

        const KEY ="カレー粉値段"
        let price = 1
        localStorage.setItem(KEY, price)
        document.querySelector("#kona").classList.add('choiseMenu')
        } else if (click % 2 === 0) {
            localStorage.setItem("カレー粉", 0)
            localStorage.setItem("カレー粉値段", 0)
            document.querySelector("#kona").classList.remove('choiseMenu')

        }
    }

    document.querySelector("#supaisu").onclick = () => {
        countClick();
        if (click % 2 != 0 ) {
        const key = "スパイス"
        let value = 6
        console.log(key, value)
        localStorage.setItem(key, value)

        const KEY ="スパイス値段"
        let price = 2
        localStorage.setItem(KEY, price)
        document.querySelector("#supaisu").classList.add('choiseMenu')
        } else if (click % 2 === 0) {
            localStorage.setItem("スパイス", 0)
            localStorage.setItem("スパイス値段", 0)
            document.querySelector("#supaisu").classList.remove('choiseMenu')
        }
    }

    document.querySelector("#sityuko").onclick = () => {
        countClick();
        if (click % 2 != 0 ) {
        const key = "シチュー粉"
        let value = 7
        console.log(key, value)
        localStorage.setItem(key, value)

        const KEY ="シチュー粉値段"
        let price = 1
        localStorage.setItem(KEY, price)
        document.querySelector("#sityuko").classList.add('choiseMenu')
        } else if (click % 2 === 0) {
            localStorage.setItem("シチュー粉", 0)
            localStorage.setItem("シチュー粉値段", 0)
            document.querySelector("#sityuko").classList.remove('choiseMenu')
        }
    }

    document.querySelector("#shouyu").onclick = () => {
        countClick();
        if (click % 2 != 0 ) {
        const key = "醤油"
        let value = 8
        console.log(key, value)
        localStorage.setItem(key, value)

        const KEY ="醤油値段"
        let price = 1
        localStorage.setItem(KEY, price)
        document.querySelector("#shouyu").classList.add('choiseMenu')
        } else if (click % 2 === 0) {
            localStorage.setItem("醤油", 0)
            localStorage.setItem("醤油値段", 0)
            document.querySelector("#shouyu").classList.remove('choiseMenu')
        }
    }

    // 調理結果ボタンクリック後
    let tyouri_result = 0;
    let sumPrice = 0;
    document.querySelector(".resultPage").onclick = () => {
        // 予算の確認
        const budget = parseInt(localStorage.予算, 10)
        console.log(budget)
        const choicePrice =[
            parseInt(localStorage.じゃがいも値段, 10)
            , parseInt(localStorage.人参値段, 10)
            , parseInt(localStorage.肉値段, 10)
            , parseInt(localStorage.玉ねぎ値段, 10)
            , parseInt(localStorage.カレー粉値段, 10)
            , parseInt(localStorage.スパイス値段, 10)
            , parseInt(localStorage.シチュー粉値段, 10)
            , parseInt(localStorage.醤油値段, 10)
        ]

        for (m = 0; m < choicePrice.length; m++) {
            sumPrice = choicePrice[m] + sumPrice
        }
        console.log(choicePrice)
        console.log(sumPrice)
        if (sumPrice > budget) {
            alert("予算オーバーです。")
            location.href = "../html/index.html";
        } else {

            // 食材に合わせて調理結果を表示する

            // 食材の数字の合計を計算
            const shokuzai = [
                parseInt(localStorage.じゃがいも, 10)
                , parseInt(localStorage.人参, 10)
                , parseInt(localStorage.肉, 10)
                , parseInt(localStorage.玉ねぎ, 10)
                , parseInt(localStorage.カレー粉, 10)
                , parseInt(localStorage.スパイス, 10)
                , parseInt(localStorage.シチュー粉, 10)
                , parseInt(localStorage.醤油, 10)
            ]
            for (n = 0; n < shokuzai.length; n++) {
                tyouri_result = shokuzai[n] + tyouri_result
            }
            console.log(tyouri_result)

            document.querySelector(".Result").style.display = "block"
            document.querySelector(".wrap").style.display = "none"

            // 合計数字ごとに料理を振り分ける
            if (tyouri_result === 15) {
                document.querySelector("#menu").setAttribute('src', '../img/カレー.jpeg')
                localStorage.setItem("カレー", 1)
            } else if (tyouri_result === 17){
                document.querySelector("#menu").setAttribute('src', '../img/シチュー.jpeg')
                localStorage.setItem("シチュー", 1)
            }　else if (tyouri_result === 16) {
                document.querySelector("#menu").setAttribute('src', '../img/こだわりのカレー.jpeg')
                localStorage.setItem("こだわりのカレー", 1)
            } else if (tyouri_result === 18) {
                document.querySelector("#menu").setAttribute('src', '../img/肉じゃが.jpeg')
                localStorage.setItem("肉じゃが", 1)
            } else {
                document.querySelector("#menu").setAttribute('src', '../img/失敗.jpeg')
                localStorage.setItem("失敗", 1)
            }
        }
    }

    // メニューリストへボタン
    document.querySelector(".list").onclick = () => {
        location.href = "../html/list.html"
    }

    document.querySelector(".goList").onclick = () => {
        location.href = "../html/list.html"
    }

    // もう一品作るボタン
    document.querySelector(".replay").onclick = function() {
        localStorage.removeItem("じゃがいも")
        localStorage.removeItem("じゃがいも値段")
        localStorage.removeItem("人参")
        localStorage.removeItem("人参値段")
        localStorage.removeItem("肉")
        localStorage.removeItem("肉値段")
        localStorage.removeItem("玉ねぎ")
        localStorage.removeItem("玉ねぎ値段")
        localStorage.removeItem("カレー粉")
        localStorage.removeItem("カレー粉値段")
        localStorage.removeItem("シチュー粉")
        localStorage.removeItem("シチュー粉値段")
        localStorage.removeItem("スパイス")
        localStorage.removeItem("スパイス値段")
        localStorage.removeItem("醤油")
        localStorage.removeItem("醤油値段")
        location.href = "../html/top.html";
    }
})

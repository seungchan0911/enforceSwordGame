const items = [
    {
        "title": "나무 검",
        "price": 0,
        "probability": 50,
        "img": "default_tool_woodsword.png"
    },
    {
        "title": "돌 검",
        "price": 2500,
        "probability": 25,
        "img": "default_tool_stonesword.png"
    },
    {
        "title": "금 검",
        "price": 15000,
        "probability": 10,
        "img": "default_tool_mesesword.png"
    },
    {
        "title": "철 검",
        "price": 75000,
        "probability": 5,
        "img": "default_tool_steelsword.png"
    },
    {
        "title": "다이아몬드 검",
        "price": 250000,
        "probability": 2.5,
        "img": "default_tool_steelsword.png"
    },
]

const container = document.querySelector(".container")

function insertItems(number) {
    const div = document.createElement("div")
    div.classList.add("frame")
    div.innerHTML = `
        <div class="left-frame">
        <div class="item"><img src="./img/${items[number].img}" alt=""></div>
        </div>
        <div class="right-frame">
            <h1>${items[number].title}</h1>
            <h2>${(items[number].price).toLocaleString()}원</h2>
            <h3>강화 확률: <span>${items[number].probability}</span>%</h3>
            <div class="button-group">
                <div class="button enforce">강화하기</div>
                <div class="button sell">팔기</div>
            </div>
        </div>
    `
    container.append(div)
}

insertItems(0)

function enforce() {
    const enforceButton = document.querySelector(".enforce")
    const title = document.querySelector("h1")

    enforceButton.addEventListener("click", () => {
        if (title.textContent == "나무 검") {
            let call = random(2)
            if (call === 0) {
                alert("강화성공")
                container.innerHTML = ""
                insertItems(1)
                enforce()
            } else {
                alert("강화실패")
            }
        } else if (title.textContent == "돌 검") {
            let call = random(4)
            if (call === 0) {
                alert("강화성공")
                container.innerHTML = ""
                insertItems(2)
                enforce()
            } else {
                alert("강화실패")
                container.innerHTML = ""
                insertItems(0)
                enforce()
            }
        } else if (title.textContent == "금 검") {
            let call = random(10)
            if (call === 0) {
                alert("강화성공")
                container.innerHTML = ""
                insertItems(3)
                enforce()
            } else {
                alert("강화실패")
                container.innerHTML = ""
                insertItems(0)
                enforce()
            }
        } else if (title.textContent == "철 검") {
            let call = random(20)
            if (call === 0) {
                alert("강화성공")
                container.innerHTML = ""
                insertItems(4)
                enforce()
            } else {
                alert("강화실패")
                container.innerHTML = ""
                insertItems(0)
                enforce()
            }
        } else if (title.textContent == "다이아몬드 검") {
            let call = random(20)
            if (call === 0) {
                alert("클리어!")
            } else {
                alert("강화실패")
                container.innerHTML = ""
                insertItems(0)
                enforce()
            }
        }
    })
}

enforce()

function random(max) {
    return Math.floor(Math.random() * max)
}

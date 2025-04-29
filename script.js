const items = [
    {
        "title": "나무 검",
        "price": 0,
        "probability": 75,
        "img": "default_tool_woodsword.png",
        "grade": 0
    },
    {
        "title": "돌 검",
        "price": 2500,
        "probability": 50,
        "img": "default_tool_stonesword.png",
        "grade": 1
    },
    {
        "title": "금 검",
        "price": 15000,
        "probability": 25,
        "img": "default_tool_mesesword.png",
        "grade": 2
    },
    {
        "title": "철 검",
        "price": 75000,
        "probability": 10,
        "img": "default_tool_steelsword.png",
        "grade": 3
    },
    {
        "title": "다이아몬드 검",
        "price": 250000,
        "probability": 5,
        "img": "default_tool_diamondsword.png",
        "grade": 4
    }
]

const swordInfo = document.querySelector(".sword-info")
const container = document.querySelector(".container")
let currentItemIndex = 0
let priceStorage = 0

function insertItems(number) {
    currentItemIndex = number
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
    swordInfo.append(div)
}

insertItems(0)

function enforce() {
    const enforceButton = document.querySelector(".enforce")
    const title = document.querySelector("h1")

    enforceButton.addEventListener("click", () => {
        if (title.textContent == "나무 검") {
            let call = random(4)
            if (call != 0) {
                reset(1)
            } else {
                alert("강화실패")
            }
        } else if (title.textContent == "돌 검") {
            let call = random(2)
            if (call === 0) {
                reset(2)
            } else {
                alert("강화실패")
                reset(0)
            }
        } else if (title.textContent == "금 검") {
            let call = random(4)
            if (call === 0) {
                reset(3)
            } else {
                alert("강화실패")
                reset(0)
            }
        } else if (title.textContent == "철 검") {
            let call = random(10)
            if (call === 0) {
                reset(4)
            } else {
                alert("강화실패")
                reset(0)
            }
        } else if (title.textContent == "다이아몬드 검") {
            
        }
    })

    function reset(index) {
        swordInfo.innerHTML = ""
        insertItems(index)
        enforce()
        controlHeightAndWidth()
    }
    
    
    const sellButton = document.querySelector(".sell")
    const wallet = document.querySelector(".wallet")
    const price = items[currentItemIndex].price
    
    sellButton.addEventListener("click", () => {
        reset(0)
        priceStorage += price
        console.log(priceStorage)
        wallet.innerHTML = `${priceStorage.toLocaleString()}원`
    })
}

enforce()

function random(max) {
    return Math.floor(Math.random() * max)
}


function controlHeightAndWidth() {
    const wallet = document.querySelector(".wallet")
    const leftFrame = document.querySelector(".left-frame")
    const frame = document.querySelector(".frame")
    
    console.log(container.offsetWidth) 
    if (container.offsetWidth > 450) {
        leftFrame.style.height = frame.offsetHeight + "px"
        container.style.width = "fit-content"
        wallet.style.right = 0
    } else {
        frame.style.height = "100%"
        frame.style.bottom = 0
    }
}

controlHeightAndWidth()
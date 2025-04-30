const themes = {
    basic:    ["#fff", "rgba(0, 0, 0, 0.125)", "#000", "#000", "red", ""],
    pink:     ["rgb(255, 237, 250)", "rgb(255, 184, 224)", "rgb(190, 89, 133)", "rgb(190, 89, 133)", "red", "#fff"],
    retro:    ["rgb(239, 238, 234)", "rgb(254, 119, 67)", "rgb(39, 63, 79)", "rgb(0, 0, 0)", "darkred", ""],
    space:    ["#0f0f3d", "#e0e0ff", "", "#ffaa00", "red", "#fff"],
    rainbow:  ["rgba(0, 0, 0, 0.0625)", "rgb(89, 213, 224)", "rgb(244, 83, 138)", "rgb(250, 163, 0)", "red", ""]
}

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
    },
    {
        "title": "병신",
        "price": 0,
        "probability": 0,
        "img": "KakaoTalk_Photo_2025-04-29-11-07-49.jpeg",
        "grade": 5
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
        <div class="right-frame color2">
            <h1 class="color3">${items[number].title}</h1>
            <h2>${(items[number].price).toLocaleString()}원</h2>
            <h3 class="color3">강화 확률: <span class="color5">${items[number].probability}</span>%</h3>
            <div class="button-group">
                <div class="button enforce color4">강화하기</div>
                <div class="button sell color4">팔기</div>
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
            console.log(call)
            if (call != 0) {
                reset(1)
            } else {
                alert("강화실패")
                reset(0)
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
        colorPalette(
            currentPalette.palette1,
            currentPalette.palette2,
            currentPalette.palette3,
            currentPalette.palette4,
            currentPalette.palette5
        )
    }
    
    
    const sellButton = document.querySelector(".sell")
    const wallet = document.querySelector(".wallet")
    const price = items[currentItemIndex].price
    
    sellButton.addEventListener("click", () => {
        reset(0)
        priceStorage += price
        console.log(priceStorage)
        wallet.innerHTML = `${priceStorage.toLocaleString()}원`
        
        localStorage.setItem("wallet", priceStorage)
    })

    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
        const theme = JSON.parse(savedTheme)
        currentPalette = theme
        colorPalette(
            theme.palette1,
            theme.palette2,
            theme.palette3,
            theme.palette4,
            theme.palette5
        )
    } else {
        colorPaletteByName("basic")
    }
}

enforce()

window.addEventListener("DOMContentLoaded", () => {
    const wallet = document.querySelector(".wallet")
    const saved = localStorage.getItem("wallet")

    if (saved) {
        priceStorage = parseInt(saved)
        wallet.innerHTML = `${priceStorage.toLocaleString()}원`
    }
})

function random(max) {
    return Math.floor(Math.random() * max)
}

function controlHeightAndWidth() {
    const wallet = document.querySelector(".wallet")
    const leftFrame = document.querySelector(".left-frame")
    const frame = document.querySelector(".frame")
    
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

function colorPalette(palette1, palette2, palette3, palette4, palette5, palette6) {
    const color1 = document.querySelectorAll(".color1")
    const color2 = document.querySelectorAll(".color2")
    const color3 = document.querySelectorAll(".color3")
    const color4 = document.querySelectorAll(".color4")
    const color5 = document.querySelectorAll(".color5")
    const color6 = document.querySelectorAll(".color6")

    color1.forEach(colors1 => {
        colors1.style.backgroundColor = palette1
    })

    color2.forEach(colors2 => {
        colors2.style.backgroundColor = palette2
    })

    color3.forEach(colors3 => {
        colors3.style.color = palette3
    })

    color4.forEach(colors4 => {
        colors4.style.backgroundColor = palette4
    })

    color5.forEach(colors5 => {
        colors5.style.color = palette5
    })

    color6.forEach(colors6 => {
        colors6.style.color = palette6
    })
}

function colorPaletteByName(name) {
    const selected = themes[name]
    if (!selected) return

    currentPalette = {
        palette1: selected[0],
        palette2: selected[1],
        palette3: selected[2],
        palette4: selected[3],
        palette5: selected[4],
        name: name
    }

    localStorage.setItem("theme", JSON.stringify(currentPalette))
    colorPalette(...selected)
}

changePalette()

function changePalette() {
    const themeBtn = document.querySelectorAll(".theme-btn")

    if (themeBtn[0]) themeBtn[0].addEventListener("click", () => colorPaletteByName("basic"))
    if (themeBtn[1]) themeBtn[1].addEventListener("click", () => colorPaletteByName("retro"))
    if (themeBtn[2]) themeBtn[2].addEventListener("click", () => colorPaletteByName("space"))
    if (themeBtn[3]) themeBtn[3].addEventListener("click", () => colorPaletteByName("rainbow"))
    if (themeBtn[4]) themeBtn[4].addEventListener("click", () => colorPaletteByName("pink"))
}

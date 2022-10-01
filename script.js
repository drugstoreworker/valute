let url = "https://www.cbr-xml-daily.ru/daily_json.js"

let $list = document.querySelector(".list")
let $listBtn = document.querySelector("#list")
let $calcBtn = document.querySelector("#calc")
let $listCurrency = document.querySelector(".listCurrency")
let $calculatorCurrency = document.querySelector(".calculator")


fetch(url)
    .then(resp => resp.json())
    .then (data =>{
        let dataa = data.Valute
        Object.keys(dataa).forEach(element =>{
            console.log(dataa[element])
            let elem = dataa[element]
            $list.insertAdjacentHTML('beforeend', `
            <div class="course">
                 <img src="">
                 <h1>
                     ${elem.CharCode} <br>
                     ${elem.Nominal}
                 </h1>
                 <h2>${elem.Name}</h2>
                 <h1>
                     ${elem.Value} <br>
                 Рублей
                 </h1>
               
            </div>

            `)
        })
    })

$listBtn.addEventListener('click', function(){
    $listCurrency.classList.remove('hide')
    $calculatorCurrency.classList.add('hide')
})
$calcBtn.addEventListener('click', function(){
    $listCurrency.classList.add('hide')
    $calculatorCurrency.classList.remove('hide')
})


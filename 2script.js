//для створення запитань
//перша дія
function first_main_message(main_message){
    let offering_message = prompt('Скільки вам років? але бажано щоб було більш 18-ти років, ок')
}
let offering_message = prompt('Скільки вам років? але бажано щоб було більш 18-ти років, ок')
if(offering_message > 18){
    alert('Молодець! Ти можеш заходити на цей сайт, але не балуйся, ок)')
}else{
    alert('Вибач, але ти не можеш сюди заходити та купувати без дозвілу дорослих нажаль(')
}
//друга дія
function second_main_message(main_message){
    alert('Якщо тобі більше 18-ти років то готуйся, я зараз тобі пропоную одне запитання, ок)')
}
setTimeout(second_main_message, 6000)

//третя дія
function third_main_message(main_message){
    alert('Ти любиш нові круті автівки)')
}
setTimeout(third_main_message, 8000)

//четверта дія
function fourth_main_message(main_message){
    alert('Але зараз я тобі пропоную нове авто')
}
setTimeout(fourth_main_message, 10000)

//п'ята дія
function fifth_main_message(main_message){
    alert('Та це Toyota C-HR , та переходь за цим посиланням: file:///C:/%D0%92%D0%B5%D0%B1-%D1%81%D1%82%D0%BE%D1%80%D1%96%D0%BD%D0%BA%D0%B0%20Toyota/ch-r.html')
}
setTimeout(fifth_main_message, 11000)



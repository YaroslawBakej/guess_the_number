alert(`загадайте число от 1 до 100`)
function HowTheValue() {
    let start = 1
    let end = 100
    let middle = Math.floor((start + end) / 2)
    for (let i = 0; i < 100; i++) {
        if (confirm(`Ваше число равно ${middle}?`)) {
            alert (middle)
            return middle
        } else {
            if (confirm(`Ваше число больше ${middle}?`)) {
                start = middle + 1
            } else {
                end = middle - 1
            }
        }
        middle = Math.floor((start + end) / 2)
    }
    return
}
console.log(HowTheValue());
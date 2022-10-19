// alert(`загадайте число от 1 до 100`)
// function HowTheValue() {
//     let start = 1
//     let end = 100
//     let middle = Math.floor((start + end) / 2)
//     for (let i = 0; i < 100; i++) {
//         if (confirm(`Ваше число равно ${middle}?`)) {
//             alert (middle)
//             return middle
//         } else {
//             if (confirm(`Ваше число больше ${middle}?`)) {
//                 start = middle + 1
//             } else {
//                 end = middle - 1
//             }
//         }
//         middle = Math.floor((start + end) / 2)
//     }
//     return
// }
// console.log(HowTheValue());

class HowTheValue {

    constructor() {
        alert(`загадайте число от 1 до 100`)
        this.start = 1
        this.end = 100
        this.middle = Math.floor((this.start + this.end) / 2)
        this.FindNumber()

    }

    FindNumber() {
        for (let i = 0; i < 100; i++) {
            if (confirm(`Ваше число равно ${this.middle}?`)) {
                alert(this.middle)
                return this.middle
            } else {
                if (confirm(`Ваше число больше ${this.middle}?`)) {
                    this.start = this.middle + 1
                } else {
                    this.end = this.middle - 1
                }
            }
            this.middle = Math.floor((this.start + this.end) / 2)
        }
        return
    }
}

const howTheValue = new HowTheValue()

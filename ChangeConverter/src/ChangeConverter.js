class ChangeConverter {
  constructor() {
    this.changeArray = ['1p', '2p', '5p', '10p', '20p', '50p', '£1', '£2', '£5', '£10', '£20']
    this.change = [0.01, 0.02, 0.05, 0.10, 0.20, 0.50, 1.00, 2.00, 5.00, 10.00, 20.00]
    this.convertedChange = []
  }

  format(money) {
    return money = money.toFixed(2) // convert to 2dp format
  }

  convert(money) {
    money = this.format(money)

    this.change.forEach( (change) => {

    })
 
    return this.convertedChange
  }
}

let changeConverter = new ChangeConverter
changeConverter.convert(3)
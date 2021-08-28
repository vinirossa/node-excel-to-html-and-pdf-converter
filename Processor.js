class Processor {

  static Process(data) {
    var rows = data.split("\r\n")
    var rowsCols = []

    rows.forEach(row => {
      rowsCols.push(row.split(","))
    })

    return rowsCols
  }

}

module.exports = Processor
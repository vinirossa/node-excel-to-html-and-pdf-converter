class Table {

  constructor(array) {
    this.header = array[0]
    this.rows = array.slice(1)
  }

  get rowCount() {
    return this.rows.length
  }

  get columnCount() {
    return this.header.length
  }
}

module.exports = Table
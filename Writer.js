const fs = require('fs')
const util = require('util')

class Writer {

  async Write(filename, data) {
    var fileWriter = util.promisify(fs.writeFile)

    try {
      await fileWriter(filename, data)
      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

}

module.exports = Writer
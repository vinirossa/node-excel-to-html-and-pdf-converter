const fs = require('fs')
const util = require('util')

class Reader {

  async Read(filepath) {
    var fileReader = util.promisify(fs.readFile)

    try {
      return await fileReader(filepath, 'utf8')
    } catch (error) {
      console.log(error)
    }
  }

}

module.exports = Reader
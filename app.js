const Reader = require('./Reader')
const Writer = require('./Writer')
const Processor = require('./Processor')
const Table = require('./Table')
const HtmlParser = require('./HtmlParser')
const PdfWriter = require('./PdfWriter')

var reader = new Reader()
var writer = new Writer()

async function main() {
  var content = await reader.Read("./users.csv")
  var dataArray = Processor.Process(content)
  var users = new Table(dataArray)
  var html = await HtmlParser.Parse(users)

  writer.Write(Date.now() + ".html", html)
  PdfWriter.WritePdf(Date.now() + ".pdf", html)
}

main()
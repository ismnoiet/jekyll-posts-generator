var fs = require('fs'),
  YAML = require('json2yaml')

function getCurrentDate () {
  var today = new Date(),
    dd = today.getDate(),
    mm = today.getMonth() + 1, // January is 0!
    yyyy = today.getFullYear()

  // because if day < 10 then we add a leading 0 to get the format 09 instead of 9
  if (dd < 10) {
    dd = '0' + dd
  }
  // same reason as previously said
  if (mm < 10) {
    mm = '0' + mm
  }
  today = [yyyy, mm, dd]
  return today
}

function toYaml (json) {
  var data = JSON.parse(json)
  var yml = YAML.stringify(data)
  return yml
}

function toFrontMatterBlock (objStr) {
  var str = (toYaml(objStr) + '---').replace(/"/g, '')
  return str
}

function write (filename, content) {
  fs.writeFile(filename, content, function (err) {
    if (err) {
      return console.log(err)
    }
    console.log('The file was saved!')
  })
}

function fileExists (filename) {
  try {
    fs.accessSync(filename, fs.F_OK)
    return true
  } catch(e) {
    // inaccesible file
    return false
  }
}

function appendToFile(filename,content){
  fs.appendFileSync(filename,content);
}

function toCamelCase(str){
  return str.split(' ').map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
}

module.exports = {
  appendToFile:appendToFile,
  getCurrentDate: getCurrentDate,
  toFrontMatterBlock: toFrontMatterBlock,
  fileExists: fileExists,
  write: write,
  toYaml: toYaml,
  toCamelCase:toCamelCase
}

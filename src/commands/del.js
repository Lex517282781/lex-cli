const { prompt } = require('inquirer')
const { writeFile } = require('fs')
const { tplMapPath, tplMap } = require('../config/config')
const { showTable } = require('../utils/util')

const question = [
  {
    type: 'input',
    name: 'name',
    message: 'Which template you want to delete:',
    validate (val) {
      if (!val) {
        return 'Name is required!'
      }
      if (!tplMap[val]) {
        return 'This template doesn\'t exists.'
      }
      return true
    }
  }
]

module.exports = prompt(question).then(({ name }) => {
  delete tplMap[name]

  writeFile(tplMapPath, JSON.stringify(tplMap, null, '\t'), 'utf-8', (err) => {
    if (err) {
      console.log(err)
      return
    }
    showTable(tplMap, 'Template has been deleted successfully!')
  })
})
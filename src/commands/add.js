const { prompt } = require('inquirer')
const { writeFile } = require('fs')
const { tplMapPath, tplMap } = require('../config/config')
const { showTable } = require('../utils/util')

const question = [
  {
    type: 'input',
    name: 'name',
    message: 'Set the custom name of the template:',
    validate (val) {
      if (!val) {
        return 'Name is required!'
      }
      if (tplMap[val]) {
        return 'Template is existed!'
      }
      return true
    }
  },
  {
    type: 'input',
    name: 'place',
    message: 'Owner/Name of the template:',
    validate (val) {
      if (!val) {
        return 'Owner/Name is required!'
      }
      return true
    }
  },
  {
    type: 'input',
    name: 'branch',
    message: 'Branch of the template:',
    default: 'master'
  }
]

module.exports = prompt(question).then(({ name, place, branch }) => {
  tplMap[name] = {}
  tplMap[name]['Owner/Name'] = place
  tplMap[name]['Branch'] = branch

  writeFile(tplMapPath, JSON.stringify(tplMap, null, '\t'), 'utf-8', (err) => {
    if (err) {
      console.log(err)
      return
    }

    showTable(tplMap, 'New template has been added successfully!')
  })
})
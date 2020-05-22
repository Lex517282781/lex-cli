const { prompt } = require('inquirer')
const { writeFile } = require('fs')
const ora = require('ora')
const chalk = require('chalk')
const download = require('download-git-repo')
const { tplMapPath, tplMap } = require('../config/config')
const { resolvePath, showTable } = require('../utils/util')

const question = [
  {
    type: 'input',
    name: 'name',
    message: 'Template name:',
    validate (val) {
      if (!val) {
        return 'Name is required!'
      }
      if (!tplMap[val]) {
        return 'Template is existed!'
      }
      return true
    }
  },
  {
    type: 'input',
    name: 'project',
    message: 'Project name:',
    validate (val) {
      if (!val) {
        return 'Project name is required!'
      }
      return true
    }
  },
  {
    type: 'input',
    name: 'place',
    message: 'Where to init the project:',
    default: './'
  }
]

module.exports = prompt(question).then(({ name, project, place }) => {
  const gitPlace = tplMap[name]['Owner/Name']
  const gitBranch = tplMap[name]['Branch']
  const spinner = ora('Downloading template...')

  spinner.start()

  download(`${gitPlace}#${gitBranch}`, `${place}/${project}`, (err) => {
    if (err) {
      console.log(chalk.red(err))
      process.exit()
    }
    spinner.stop()
    console.log(chalk.green('New project has been created successfully!'))
  })
})
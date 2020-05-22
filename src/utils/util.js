const Table = require('cli-table')
const chalk = require('chalk')
const { resolve } = require('path')

const resolvePath = path => resolve(__dirname, path)

const table = new Table({
  head: ['Template Name', 'Owner/Name', 'Branch'],
  style: {
    head: ['green']
  }
})

const showTable = (tplInfo, msg) => {
  const listInfo = Object.entries(tplInfo)
  listInfo.forEach(([k, v]) => {
    table.push([k, v['Owner/Name'], v['Branch']])
  })
  console.log(table.toString())
  if (msg) {
    console.log(chalk.green(`\u2714 ${msg}`))
  }
  process.exit()
}

module.exports = {
  resolvePath,
  showTable
}
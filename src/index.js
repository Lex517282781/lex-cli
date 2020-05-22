const { program } = require('commander')
const {
  pkg,
  initPath,
  listPath,
  addPath,
  delPath,
  mapPath
} = require('./config/config')

program
  .version(pkg.version)
  .usage('<command>')

program
  .command('init')
  .description('Generate a new project')
  .alias('i')
  .action(() => {
    require(initPath)
  })

program
  .command('list')
  .description('Show all templates')
  .alias('l')
  .action(() => {
    require(listPath)
  })

program
  .command('add')
  .description('Add a new template')
  .alias('a')
  .action(() => {
    require(addPath)
  })

program
  .command('del')
  .description('Delete a template')
  .alias('d')
  .action(() => {
    require(delPath)
  })

program.parse(process.argv)

if(!program.args.length){
  program.help()
}

const {
  resolvePath
} = require('../utils/util')

const pkgPath = resolvePath('../../package')
const initPath = resolvePath('../commands/init')
const listPath = resolvePath('../commands/list')
const addPath = resolvePath('../commands/add')
const delPath = resolvePath('../commands/del')
const mapPath = resolvePath('../commands/map')
const tplMapPath = resolvePath('../../templates.json')

const pkg = require(pkgPath)
const tplMap = require('../../templates')

module.exports = {
  initPath,
  listPath,
  addPath,
  delPath,
  mapPath,
  tplMapPath,
  pkg,
  tplMap
}
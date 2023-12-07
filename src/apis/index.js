const serviceModules = {}

const modulesContext = import.meta.globEager('./!(index).js')

Object.keys(modulesContext).forEach((modulePath) => {
  const moduleName = modulePath.slice(2, -3)
  serviceModules[moduleName] = modulesContext[modulePath]
  console.log(serviceModules)
})

export default serviceModules

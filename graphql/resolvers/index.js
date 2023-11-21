const authResolver = require('./authController')
const jobResolver = require('./jobController')
const companyResolver = require('./companyController')

const rootResolver ={
    ...authResolver,
    ...companyResolver,
    ...jobResolver
}
module.exports = rootResolver
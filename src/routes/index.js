const newsRouter = require('./news')
const coursesRouter = require('./courses')
const siteRouter = require('./site')
const meController = require('./me')

function route(app) {

    app.use('/news', newsRouter)
    app.use('/courses', coursesRouter)
    app.use('/me', meController)
    app.use('/', siteRouter)
}

module.exports = route

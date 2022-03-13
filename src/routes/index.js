
const newsRouter = require('./news')
const siteRouter = require('./site')

function route(app) {

    // app.get('/news', (req, res) => {
    //     return res.render("news")
    // });
    app.use('/news', newsRouter);


    app.use("/", siteRouter)

    // app.get('/', (req, res) => {
    //     return res.render("home")
    // });
    // app.get('/search', (req, res) => {
    //     console.log(req.query.q)
    //     return res.render("search")
    // });


}

module.exports = route;
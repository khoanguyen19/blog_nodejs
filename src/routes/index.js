const newsRouter = require('./news.js');
const siteRouter = require('./site.js');
const courseRouter = require('./course.js');

function route(app) {
    app.use('/news', newsRouter);

    app.use('/', siteRouter);

    app.use('/courses', courseRouter);

    // app.get('/news', (req, res) => {
    //     res.render('news');
    // })

    // app.get('/', (req, res) => {
    //     res.render('home');
    // })

    // app.get('/search', (req, res) => {
    //     res.render('search');
    // })
}

module.exports = route;

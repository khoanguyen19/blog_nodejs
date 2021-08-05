const newsRouter = require('./news.js');
const siteRouter = require('./site.js');

function route(app) {

    app.use('/news', newsRouter);
   
    app.use('/search', siteRouter);
    
    app.use('/', siteRouter);
    
    
    // app.get('/news', (req, res) => {
    //     res.render('news');
    // })

    
    // app.get('/search', (req, res) => {
    //     res.render('search');
    // })
  
}

module.exports = route;
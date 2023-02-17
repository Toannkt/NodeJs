class NewsController {

    // [GET] /api/news

    index(req, res){
        res.render('news');
    }
    show(req, res){
        res.send('DETAILED VIEW');
    }
}

module.exports = new NewsController();

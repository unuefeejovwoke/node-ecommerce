exports.errors = (req, res, next) => {
  res.status(404).render('404', {
    pageTitle: 'Page Not Found', is404: true, cssFile: '/css/404.css'});
}
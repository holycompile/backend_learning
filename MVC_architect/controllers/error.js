const showerror=(req, res, next) => {
  res.status(404).render('404.ejs',{pageTitle: '404 Not found', currentPage:'404'});
};

exports.showerror=showerror;
const getAddHome= (req, res, next) => {
  res.render('addHome.ejs',{pageTitle: 'Add home page ', currentPage:'home-add'});
};

const registeredHomes=[];
const postAddHome= (req, res, next) => {
  console.log(`Home registration sucessful for`,req.body);
  registeredHomes.push(req.body);
  res.render('homeAdded.ejs',{pageTitle:'Home Added Successfully', currentPage:'home-added'});
};
exports.registeredHomes= registeredHomes;

const getHomes = (req, res, next) => {
  console.log(registeredHomes);
  res.render('home.ejs',{registeredHomes: registeredHomes,
    pageTitle: 'airbnb Home', currentPage:'home'}
  );
};

exports.postAddHome=postAddHome;
exports.getAddHome=getAddHome;
exports.getHomes=getHomes;
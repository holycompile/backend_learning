
const Home=require("../model/home");

const getAddHome= (req, res, next) => {
  res.render('host/addHome.ejs',{pageTitle: 'Add home page ', currentPage:'home-add'});
};

exports.getHostHomes = (req, res, next) => {
  const registeredHomes =Home.fetchAll((registeredHomes)=>{
    res.render("host/host-home-list.ejs",{
      registeredHomes: registeredHomes,
      pageTitle: "Host Homes List",
      currentPage: "Host home "
    })
  });
};

const postAddHome= (req, res, next) => {
  console.log(`Home registration sucessful for`,req.body);
  const {houseName, price, location, rating, photoURL}=req.body;

  const home =new Home(houseName, price, location, rating, photoURL);
  home.save();

  res.render('host/home-added.ejs',{pageTitle:'Home Added Successfully', currentPage:'home-added'});
};




exports.postAddHome=postAddHome;
exports.getAddHome=getAddHome;
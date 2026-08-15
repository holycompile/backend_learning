
const Home=require("../model/home");

exports.getIndex = (req, res, next) => {
  const registeredHomes =Home.fetchAll((registeredHomes)=>{
    res.render("store/index.ejs",{
      registeredHomes: registeredHomes,
      pageTitle: "airbnb Home",
      currentPage: "Index "
    })
  });
};
const getHomes = (req, res, next) => {
  const registeredHomes =Home.fetchAll((registeredHomes)=>{
    res.render("store/home-list.ejs",{
      registeredHomes: registeredHomes,
      pageTitle: "Homes List",
      currentPage: "home "
    })
  });
};


exports.getHomes=getHomes;

exports.getbookings = (req,res,next)=>{
  const registeredHomes =Home.fetchAll((registeredHomes)=>{
    res.render("store/bookings.ejs",{
      registeredHomes: registeredHomes,
      pageTitle: "My bookings",
      currentPage: "bookings"
    })
  });
};

exports.getFavouriteList = (req,res,next)=>{
  const registeredHomes =Home.fetchAll((registeredHomes)=>{
    res.render("store/favourite-list.ejs",{
      registeredHomes: registeredHomes,
      pageTitle: "My Favourite List",
      currentPage: "favoourite list"
    })
  });
};


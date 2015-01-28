(function(){
 
  var app = angular.module('musicApp', []);
  var gems = [
   {name: 'A', 
   price: 2.95, 
   description:"This is one cool gunman poster",
   shine: 8,
   review:"wow what a cool poster, totally radical!",
   images:[
   "images/gunman-1.jpg", 
   "images/gunman-2.jpg",
   "images/gunman-3.jpg"]
   },
   {name:'B', 
   price: 2.95, 
   description:"Work it baby",
   shine: 4,
   review:"delicous pictures of edible workouts",
   images:[
   "images/workout-1.jpg", 
   "images/workout-2.jpg"]
   },
   {name:'Buddah', 
   price:5.95, 
   description:"buddah says, I am I am, a real religous man",
   shine:7,
   review:"I love this buddah poster, get them all in different colors too!",
   images:[
   "images/buddah-1.jpg", 
   "images/buddah-2.jpg",
   "images/buddah-3.jpg"]}
   ];
   
   
  app.controller('StoreController',function(){
  	this.products = gems;  	
  });
  
  app.controller('TabController', function(){
    this.tab = 1;

    this.setTab = function(newValue){
      this.tab = newValue;
    };

    this.isSet = function(tabName){
      return this.tab === tabName;
    };
  });
  
  app.controller('MenuController', function(){
    this.menu = 1;

    this.setMenu = function(newValue){
      this.menu = newValue;
    };

    this.isSet = function(menuName){
      return this.menu === menuName;
    };
  });
  
  app.directive('pixeltotBanner', function(){
  	return{
  		restrict:'E',
  		templateUrl: "pixeltot-banner.html"
  	}	
  });
  
})();


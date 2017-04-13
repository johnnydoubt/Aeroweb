
//Au scroll de la page
$(window).scroll(function(){
   //On stocke la valeur du scroll
   var top = $(window).scrollTop();

   //Si la scroll est supérieur à 250px
   if(top > 230){
       //On ajouter la classe sticky au maincontainer
       $('.topnav').addClass('sticky');
   }
   else{
       //On retire la classe sticky au maincontainer
       $('.topnav').removeClass('sticky');
   }

});

//
// //A la fin du chargement de la page, j'exécute...
// $(function(){
//
//   // Déplacement du WebBlock Footer dans le Footer Area
//   $('.c-footer-webblock').prependTo($('#footerarea'));
//
//   //$('#footerarea').prepend('.c-footer-webblock');
//
// });

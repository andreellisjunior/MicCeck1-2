$(document).ready(function(){
  $('.login').on('click', () => {
   $('.loginForm').slideDown(); 
  })

  $('.fadeBack').on('click', () => {
    $('.loginForm').slideUp(); 
   })

   $('.register').on('click', () => {
    $('.registerForm').slideDown(); 
   })
 
   $('.fadeBack').on('click', () => {
     $('.registerForm').slideUp(); 
    })
});
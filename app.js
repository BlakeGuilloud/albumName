$(document).ready(function(){
  photoPage.init();
});
var albumTmpl = _.template($('#albumCoverTemplate').html());
var buttonTmpl = _.template($('#buttonTemplate').html());
var navTmpl = _.template($('#nav').html());
var photoTmpl = _.template($('#albumTemplate').html());


var photoPage = {
  init: function(){
    photoPage.styling();
    photoPage.events();
  },

///////////////////////// TEMPLATES ///////////////////////////

  events: function(){
    $('.specificAlbum').on('click', function(event){
      event.preventDefault();
      $(this).siblings('').toggleClass('hidden');
      $(this).toggleClass('singlePic');
      $('#navButton').removeClass('hidden');
    });
    $('.navBar li').on('click', function(event){
      event.preventDefault();
      pickedAlbum = "." + $(this).attr('rel');
      $(pickedAlbum).toggleClass('hidden');
      $(pickedAlbum).siblings('').addClass('hidden');
      $('.albumContainer').addClass('hidden');
    });
    $('.albumRef').on('click', function(event){
      event.preventDefault();
      clickedAlbum = "." + $(this).attr('class')
      selectedAlbum = "." + $(this).attr('rel')
      $(this).parent('').removeClass('active');
      $('.albumContainer').addClass('hidden');
      $(selectedAlbum).removeClass('hidden');
      $('nav').toggleClass('hidden');
      $('#navButton').removeClass('hidden');
      $('.navBar').addClass('navBarAlbum');
    });
    $('.homeButton').on('click', function(event){
      event.preventDefault;
      location.reload();
    });
  },
  styling: function(){

  albumHTML = "";
  _.each(albumsData, function(currVal, idx, arr){
    albumHTML += albumTmpl(currVal);
  });
    $('.albumContainer').html(albumHTML);

  buttonHTML = "";
  _.each(albumsData, function(currVal){
    buttonHTML += buttonTmpl(currVal);
  });
    $('.button').html(buttonHTML);

  navHTML = "";
  _.each(albumsData, function(currVal){
    navHTML += navTmpl(currVal);
  });
    $('.navBar').html(navHTML);

////////CANNOT ITTERATE I FEEL LIKE FAILURE!!/////DATA LAYOUT NEEDS TO BE CHANGED //
  photoHTML = "";
  _.each(album1, function(currVal, idx, arr){
    photoHTML += photoTmpl(currVal)
  });
  $('.album1').append(photoHTML)
  photoHTML = "";
  _.each(album2, function(currVal, idx, arr){
    photoHTML += photoTmpl(currVal)
  });
  $('.album2').append(photoHTML)
  photoHTML = "";
  _.each(album3, function(currVal, idx, arr){
    photoHTML += photoTmpl(currVal)
  });
  $('.album3').append(photoHTML)
  photoHTML = "";
  _.each(album4, function(currVal, idx, arr){
    photoHTML += photoTmpl(currVal)
  });
  $('.album4').append(photoHTML)
  photoHTML = "";
  _.each(album5, function(currVal, idx, arr){
    photoHTML += photoTmpl(currVal)
  });
  $('.album5').append(photoHTML)
  photoHTML = "";
  _.each(album6, function(currVal, idx, arr){
    photoHTML += photoTmpl(currVal)
  });
  $('.album6').append(photoHTML)
},
}




////////////////// PHOTO TEMPLATE NEEDS REFACTOR ///////////////// BUT FUCK THAT

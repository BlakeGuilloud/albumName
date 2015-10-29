$(document).ready(function(){
  page.init();
});
// var albumTmpl = _.template(templates.albumTemplate);
// var buttonTmpl = _.template(templates.buttonTemplate);
// var navTmpl = _.template(templates.nav);
// var photoTmpl = _.template(templates.albumCoverTemplate);


var page = {
  init: function(){
    page.styling();
    page.events();
  },
  events: function(){
    $('.specificAlbum').on('click', function(event){
      event.preventDefault();
      $(this).siblings('').toggleClass('hidden');
      $(this).toggleClass('singlePic');
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

    _.each(albumsData, function(currVal, idx, arr){
      page.loadTemplate('.albumContainer',currVal,'albumCoverTemplate')
    });

    // var buttonHTML = "";
    // _.each(albumsData, function(currVal){
    //   buttonHTML += buttonTmpl(currVal);
    // });
    //   $('.button').html(buttonHTML);
    _.each(albumsData, function(currVal){
      page.loadTemplate('.navBar',currVal,'nav')
    });



  ////////CANNOT ITTERATE I FEEL LIKE FAILURE!!/////DATA LAYOUT NEEDS TO BE CHANGED //
    _.each(album1, function(currVal, idx, arr){
      page.loadTemplate('.album1',currVal, 'albumTemplate')
    });
    _.each(album2, function(currVal, idx, arr){
      page.loadTemplate('.album2',currVal, 'albumTemplate')
    });
    _.each(album3, function(currVal, idx, arr){
      page.loadTemplate('.album3',currVal, 'albumTemplate')
    });
    _.each(album4, function(currVal, idx, arr){
      page.loadTemplate('.album4',currVal, 'albumTemplate')
    });
    _.each(album5, function(currVal, idx, arr){
      page.loadTemplate('.album5',currVal, 'albumTemplate')
    });
    _.each(album6, function(currVal, idx, arr){
      page.loadTemplate('.album6',currVal, 'albumTemplate')
    });
  },

  loadTemplate: function(el, data, tmpl) {
    var template = _.template(templates[tmpl]);
    var html = template(data);
    $(el).append(html);
  }



}

////////////////// PHOTO TEMPLATE NEEDS REFACTOR ///////////////// BUT FUCK THAT

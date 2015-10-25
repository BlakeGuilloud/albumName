$(document).ready(function(){




///////////////////////// TEMPLATES ///////////////////////////


  var albumTmpl = _.template($('#albumCoverTemplate').html());

  albumHTML = "";
  _.each(albumsData, function(currVal, idx, arr){
    albumHTML += albumTmpl(currVal);
  });
    $('.albumContainer').html(albumHTML);

  var buttonTmpl = _.template($('#buttonTemplate').html());

  buttonHTML = "";
  _.each(albumsData, function(currVal){
    buttonHTML += buttonTmpl(currVal);
  });
    $('.button').html(buttonHTML);

  var navTmpl = _.template($('#nav').html());
  navHTML = "";
  _.each(albumsData, function(currVal){
    navHTML += navTmpl(currVal);
  });
    $('.navBar').html(navHTML);


  $('.homeButton').on('click', function(event){
    event.preventDefault;
    location.reload();
  });

  $('.albumRef').on('click', function(event){
    event.preventDefault();
    clickedAlbum = "." + $(this).attr('class')
    selectedAlbum = "." + $(this).attr('rel')
    console.log("Rel Num", selectedAlbum);
    $(this).parent('').removeClass('active');
    $('.albumContainer').addClass('hidden');
    // $('.photoDisplay').html(selectedAlbum);
    $(selectedAlbum).removeClass('hidden');
    $('nav').toggleClass('hidden');
    $('#navButton').removeClass('hidden');
    console.log(this);
    $('.navBar').addClass('navBarAlbum');
  });



////////////////// PHOTO TEMPLATE NEEDS REFACTOR ///////////////// BUT FUCK THAT
  var photoTmpl = _.template($('#albumTemplate').html());
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


  $('.specificAlbum').on('click', function(event){
    event.preventDefault();
    $(this).siblings('').toggleClass('hidden');
    $(this).toggleClass('singlePic');
    $('#navButton').removeClass('hidden');
  });

  $('.navBar li').on('click', function(event){
    event.preventDefault();
    pickedAlbum = "." + $(this).attr('rel');
    console.log(pickedAlbum);
    $(pickedAlbum).toggleClass('hidden');
    $(pickedAlbum).siblings('').addClass('hidden');
    $('.albumContainer').addClass('hidden');
  });





  });

  ///////// BUTTONS ///////






  // var photoTmpl = _.template($('#albumTemplate').html());
  // console.log(photoTmpl);
  // window.photoHTML = "";
  // _.each(photoData, function(currVal, idx, arr){
  //   _.each(currVal, function(photbum) {
  //     _.each(photbum, function(el) {
  //       photoHTML = photoTmpl(el);
  //       $('.photoDisplay').append(photoHTML)
  //     })
  //   })
  // });



//
  //
  //
  // var photoTmpl = _.template($('#albumTemplate').html());
  //
  // photoHTML = "";
  // singleAlbum = "";
  // anotherDec = "";
  //   _.each(album1, function( currVal, idx, arr){
  //       photoHTML += photoTmpl ;
  //       _.each(currVal, function(el, idx, arr){
  //         singleAlbum += el.relNum;
  //         console.log(el)
  //       })
  //   });



/////////////////// ON CLICK ALBUM COVER ////////////////////




//
//
//
// $(document).ready(function () {
//   // anything in here is dom ready!
//  var bitterTemplate = _.template($('#bitterTmpl').html());
//  console.log("bitter template: ", bitterTemplate);
//   window.bitterHTML = "";
//
// // we need to merge our data from bitterData with actual markup so that we can add to our html document
//   _.each(bitterData, function (currVal, idx, arr) {
//     bitterHTML += bitterTemplate(currVal);
//       // console.log('bitterHTML: ', bitterHTML);
//   });
// // add giant string of markup to the DOM
// $('.bitters').html(bitterHTML);
//
// };

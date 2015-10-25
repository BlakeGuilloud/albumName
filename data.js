var albumsData = [
{
relNumber: 0,
albumId: 'album1',
albumCover: "https://scontent-mia1-1.xx.fbcdn.net/hphotos-xat1/v/t1.0-9/12096524_10153029988991604_2345289619526760733_n.jpg?oh=c57a30216149ae24faf8c87718a212a9&oe=56CACF86",
albumName: 'Princess Leia'
},
{
relNumber: 1,
albumId: 'album2',
albumCover: "http://vignette3.wikia.nocookie.net/leagueoflegends/images/e/e5/Ahri_OriginalLoading.jpg/revision/latest/scale-to-width-down/110?cb=20141218173821",
albumName: 'League Stock'
},
{
relNumber: 2,
albumId: 'album3',
albumCover: "http://i.istockimg.com/file_thumbview_approve/73050987/5/stock-photo-73050987-lobster-tails-seasoned-for-the-grill.jpg",
albumName: 'Food Stock'
},
{
  relNumber: 3,
albumId: 'album4',
albumCover: "http://i.istockimg.com/file_thumbview_approve/65961947/5/stock-photo-65961947-galapagos-land-iguana-santa-cruz-island-galapagos.jpg",
albumName: 'Nature Stock'
},
{
  relNumber: 4,
albumId: 'album5',
albumCover: "http://www.fillmurray.com/400/400",
albumName: 'Album 5'
},
{
  relNumber: 5,
albumId: 'album6',
albumCover: "http://www.fillmurray.com/400/400",
albumName: 'Album 6'
},
];




var album1 =  [
  {
    relNum: 0,
    photoCover: 'https://scontent-mia1-1.xx.fbcdn.net/hphotos-xat1/v/t1.0-9/12096524_10153029988991604_2345289619526760733_n.jpg?oh=c57a30216149ae24faf8c87718a212a9&oe=56CACF86',
    photoName: 'Leia & Django',
    photoDescription: 'Here is a picture of Bill Murray.'
  },
  {
    relNum: 1,
    photoCover: 'https://scontent-mia1-1.xx.fbcdn.net/hphotos-xfa1/t31.0-8/12014978_532515866898705_5793909166934088820_o.jpg',
    photoName: 'PantherNation',
    photoDescription: 'BLACK CATS BABY!'
  },
  {
    relNum: 2,
    photoCover: 'https://scontent-mia1-1.xx.fbcdn.net/hphotos-xpa1/v/t1.0-9/1504523_437875089696117_7378541844854542050_n.jpg?oh=203ee350fe811bc45d2c6d874b1b6af5&oe=56B9C5AF',
    photoName: 'Best looking dog I have ever seen',
    photoDescription: 'Here is the 3rd picture of Bill Murray.'
  },
  {
    relNum: 3,
    photoCover: 'https://scontent-mia1-1.xx.fbcdn.net/hphotos-xlp1/t31.0-8/11046961_451767771640182_4036677258249975310_o.jpg',
    photoName: 'I eat mud',
    photoDescription: 'Here is the 4th picture of Bill Murray.'
  },
  {
    relNum: 4,
    photoCover: 'https://scontent-mia1-1.xx.fbcdn.net/hphotos-xpf1/t31.0-8/11004612_450035478480078_2510067353976147685_o.jpg',
    photoName: 'Wishes she was "Princess Jasmine"',
    photoDescription: 'Here is the 5th picture of Bill Murray.'
  },
  {
    relNum: 5,
    photoCover: 'https://scontent-mia1-1.xx.fbcdn.net/hphotos-xpf1/t31.0-8/11017038_462182367265389_69668435846307342_o.jpg',
    photoName: 'Leia & Finley',
    photoDescription: 'Here is the last picture of Bill Murray.'
  },
]
var album2 =  [
  {
    relNum: 0,
    photoCover: 'http://vignette3.wikia.nocookie.net/leagueoflegends/images/e/e5/Ahri_OriginalLoading.jpg/revision/latest/scale-to-width-down/110?cb=20141218173821',
    photoName: 'Ahri',
    photoDescription: 'Here is a picture of Bill Murray.'
  },
  {
    relNum: 1,
    photoCover: 'http://vignette4.wikia.nocookie.net/leagueoflegends/images/2/25/Azir_OriginalLoading.jpg/revision/latest/scale-to-width-down/110?cb=20140826230716',
    photoName: 'Azir',
    photoDescription: 'Here is the 2nd picture of Bill Murray.'
  },
  {
    relNum: 2,
    photoCover: 'http://vignette1.wikia.nocookie.net/leagueoflegends/images/c/ca/Darius_OriginalLoading.jpg/revision/latest/scale-to-width-down/110?cb=20120519065010',
    photoName: 'Darius',
    photoDescription: 'Here is the 3rd picture of Bill Murray.'
  },
  {
    relNum: 3,
    photoCover: 'http://vignette2.wikia.nocookie.net/leagueoflegends/images/3/38/Jax_OriginalLoading.jpg/revision/latest/scale-to-width-down/110?cb=20120719204048',
    photoName: 'Jax',
    photoDescription: 'Here is the 4th picture of Bill Murray.'
  },
  {
    relNum: 4,
    photoCover: 'http://vignette4.wikia.nocookie.net/leagueoflegends/images/9/95/Poppy_OriginalLoading.jpg/revision/latest/scale-to-width-down/110?cb=20100907034128',
    photoName: 'Poppy',
    photoDescription: 'Here is the 5th picture of Bill Murray.'
  },
  {
    relNum: 5,
    photoCover: 'http://vignette2.wikia.nocookie.net/leagueoflegends/images/6/6a/Shyvana_OriginalLoading.jpg/revision/latest/scale-to-width-down/110?cb=20140822003131',
    photoName: 'Shyvana',
    photoDescription: 'Here is the last picture of Bill Murray.'
  },
]

var album3 =  [
  {
    relNum: 0,
    photoCover: 'http://i.istockimg.com/file_thumbview_approve/73050987/5/stock-photo-73050987-lobster-tails-seasoned-for-the-grill.jpg',
    photoName: 'Lobster Tails',
    photoDescription: 'Here is a picture of Bill Murray.'
  },
  {
    relNum: 1,
    photoCover: 'http://i.istockimg.com/file_thumbview_approve/64460783/5/stock-photo-64460783-various-spices-and-fresh-herbs-at-wooden-table.jpg',
    photoName: 'Spices',
    photoDescription: 'Here is the 2nd picture of Bill Murray.'
  },
  {
    relNum: 2,
    photoCover: 'http://i.istockimg.com/file_thumbview_approve/55709466/5/stock-photo-55709466-healthy-rustic-meal.jpg',
    photoName: 'Rustic Meal',
    photoDescription: 'Here is the 3rd picture of Bill Murray.'
  },
  {
    relNum: 3,
    photoCover: 'http://i.istockimg.com/file_thumbview_approve/72793089/5/stock-photo-72793089-chourico-assado.jpg',
    photoName: 'Assado',
    photoDescription: 'Here is the 4th picture of Bill Murray.'
  },
  {
    relNum: 4,
    photoCover: 'http://i.istockimg.com/file_thumbview_approve/74016113/5/stock-photo-74016113-fresh-apricots.jpg',
    photoName: 'Apricots',
    photoDescription: 'Here is the 5th picture of Bill Murray.'
  },
  {
    relNum: 5,
    photoCover: 'http://i.istockimg.com/file_thumbview_approve/72709613/5/stock-photo-72709613-seedless-black-grapes.jpg',
    photoName: 'Grapes',
    photoDescription: 'Here is the last picture of Bill Murray.'
  },
]

var album4 =  [
  {
    relNum: 0,
    photoCover: 'http://i.istockimg.com/file_thumbview_approve/65961947/5/stock-photo-65961947-galapagos-land-iguana-santa-cruz-island-galapagos.jpg',
    photoName: 'Iguana',
    photoDescription: 'Here is a picture of Bill Murray.'
  },
  {
    relNum: 1,
    photoCover: 'http://i.istockimg.com/file_thumbview_approve/65575007/5/stock-photo-65575007-siberian-chipmunk.jpg',
    photoName: 'Chipmunk',
    photoDescription: 'Here is the 2nd picture of Bill Murray.'
  },
  {
    relNum: 2,
    photoCover: 'http://i.istockimg.com/file_thumbview_approve/64108507/5/stock-photo-64108507-burning-candles-on-marble-table.jpg',
    photoName: 'Candles',
    photoDescription: 'Here is the 3rd picture of Bill Murray.'
  },
  {
    relNum: 3,
    photoCover: 'http://i.istockimg.com/file_thumbview_approve/65645223/5/stock-photo-65645223-wild-orchid-brachycorythis-acuta.jpg',
    photoName: 'Flowers',
    photoDescription: 'Here is the 4th picture of Bill Murray.'
  },
  {
    relNum: 4,
    photoCover: 'http://i.istockimg.com/file_thumbview_approve/65589439/5/stock-photo-65589439-marsh-fleawort-senecio-congestus.jpg',
    photoName: 'More Flowers',
    photoDescription: 'Here is the 5th picture of Bill Murray.'
  },
  {
    relNum: 5,
    photoCover: 'http://i.istockimg.com/file_thumbview_approve/58724554/5/stock-photo-58724554-man-giving-fresh-carrot.jpg',
    photoName: 'Carrots',
    photoDescription: 'Here is the last picture of Bill Murray.'
  },
]
var album5 =  [
  {
    relNum: 0,
    photoCover: 'http://www.fillmurray.com/200/300',
    photoName: 'Bill Murray 1',
    photoDescription: 'Here is a picture of Bill Murray.'
  },
  {
    relNum: 1,
    photoCover: 'http://www.fillmurray.com/200/300',
    photoName: 'Bill Murray 2',
    photoDescription: 'Here is the 2nd picture of Bill Murray.'
  },
  {
    relNum: 2,
    photoCover: 'http://www.fillmurray.com/200/300',
    photoName: 'Bill Murray 3',
    photoDescription: 'Here is the 3rd picture of Bill Murray.'
  },
  {
    relNum: 3,
    photoCover: 'http://www.fillmurray.com/200/300',
    photoName: 'Bill Murray 4',
    photoDescription: 'Here is the 4th picture of Bill Murray.'
  },
  {
    relNum: 4,
    photoCover: 'http://www.fillmurray.com/200/300',
    photoName: 'Bill Murray 5',
    photoDescription: 'Here is the 5th picture of Bill Murray.'
  },
  {
    relNum: 5,
    photoCover: 'http://www.fillmurray.com/200/300',
    photoName: 'Bill Murray 6',
    photoDescription: 'Here is the last picture of Bill Murray.'
  },
]
var album6 =  [
  {
    relNum: 0,
    photoCover: 'http://www.fillmurray.com/200/300',
    photoName: 'Bill Murray 1',
    photoDescription: 'Here is a picture of Bill Murray.'
  },
  {
    relNum: 1,
    photoCover: 'http://www.fillmurray.com/200/300',
    photoName: 'Bill Murray 2',
    photoDescription: 'Here is the 2nd picture of Bill Murray.'
  },
  {
    relNum: 2,
    photoCover: 'http://www.fillmurray.com/200/300',
    photoName: 'Bill Murray 3',
    photoDescription: 'Here is the 3rd picture of Bill Murray.'
  },
  {
    relNum: 3,
    photoCover: 'http://www.fillmurray.com/200/300',
    photoName: 'Bill Murray 4',
    photoDescription: 'Here is the 4th picture of Bill Murray.'
  },
  {
    relNum: 4,
    photoCover: 'http://www.fillmurray.com/200/300',
    photoName: 'Bill Murray 5',
    photoDescription: 'Here is the 5th picture of Bill Murray.'
  },
  {
    relNum: 5,
    photoCover: 'http://www.fillmurray.com/200/300',
    photoName: 'Bill Murray 6',
    photoDescription: 'Here is the last picture of Bill Murray.'
  },
]

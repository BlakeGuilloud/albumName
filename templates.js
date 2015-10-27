var templates = {
  albumTemplate: ['<article rel="<%= relNum %>" class="specificAlbum">',
                  '<div class="albumView">',
                  '<h3><%= photoName %></h3>',
                  '<img src="<%= photoCover %>" alt="" />',
                  '</div>',
                  '</article>'].join(""),

  buttonTemplate: ['<article class="buttons">',
                  '<button id = "navButton" type="button">',
                  '<%= albumName %></button>',
                  '</article>'].join(""),

  albumCoverTemplate:
                  ['<article rel = "<%= albumId %>" class="albumRef">',
                  '<h3><%= albumName %></h3>',
                  '<img src="<%= albumCover %>" alt="" />',
                  '</article>'].join(""),

  nav:            ['<li rel = "<%= albumId %>"><%= albumName %></li>'].join("")
}

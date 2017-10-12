$(function(){
  var articles =0;
  function readTextFile(file)
  {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
      if(rawFile.readyState === 4)
      {
        if(rawFile.status === 200 || rawFile.status == 0)
        {
          articles = JSON.parse(rawFile.responseText);
        }
      }
    }
    rawFile.send(null);
  }
  readTextFile('articles.json');
  var count=0;
  for(var i =0; i<articles.soinsDuVisage.length; i++){
    $('#pwet').append('<li data-target="#carousel1" class="slide-'+i+'" data-slide-to="'+i+'"></li>');
      $('#toto').append("<div class=\"item-"+count+"\"><img class=\"photoo\" src="+articles.soinsDuVisage[i].image +" alt=\"photo\" style=\"width:50%; max-height:400px; min-height: 200px;\"><div class=\"carousel-caption\"><h3>Prix:"+articles.soinsDuVisage[i].prix+"</h3><p>descriptif:"+articles.soinsDuVisage[i].descriptif+"</p></div></div>");
      count++;

  }

/*
  readTextFile('articles.json');
  var count=0;
  for(var i =0; i<articles.soinsDuCorps.length; i++){
    for(var j=0; j<articles[articles.id[i]].length; j++){
      console.log(articles[articles.id[i]][j].nom);
      $('#toto').append("<div class=\"item-"+count+"\"><img class=\"photoo\" src="+ articles[articles.id[i]][j].image +" alt=\"photo\" style=\"width:50%; max-height:400px; min-height: 200px;\"><div class=\"carousel-caption\"><h3>Prix</h3><p>descriptif</p></div></div>");
      count++;
    }
  }
  readTextFile('articles.json');
  var count=0;
  for(var i =0; i<articles.herboristerie.length; i++){
    for(var j=0; j<articles[articles.id[i]].length; j++){
      console.log(articles[articles.id[i]][j].nom);
      $('#toto').append("<div class=\"item-"+count+"\"><img class=\"photoo\" src="+ articles[articles.id[i]][j].image +" alt=\"photo\" style=\"width:50%; max-height:400px; min-height: 200px;\"><div class=\"carousel-caption\"><h3>Prix</h3><p>descriptif</p></div></div>");
      count++;
    }
  }
  readTextFile('articles.json');
  var count=0;
  for(var i =0; i<articles.soins.length; i++){
    for(var j=0; j<articles[articles.id[i]].length; j++){
      console.log(articles[articles.id[i]][j].nom);
      $('#toto').append("<div class=\"item-"+count+"\"><img class=\"photoo\" src="+ articles[articles.id[i]][j].image +" alt=\"photo\" style=\"width:50%; max-height:400px; min-height: 200px;\"><div class=\"carousel-caption\"><h3>Prix</h3><p>descriptif</p></div></div>");
      count++;
    }
  }
  readTextFile('articles.json');
  var count=0;
  for(var i =0; i<articles.change.length; i++){
    for(var j=0; j<articles[articles.id[i]].length; j++){
      console.log(articles[articles.id[i]][j].nom);
      $('#toto').append("<div class=\"item-"+count+"\"><img class=\"photoo\" src="+ articles[articles.id[i]][j].image +" alt=\"photo\" style=\"width:50%; max-height:400px; min-height: 200px;\"><div class=\"carousel-caption\"><h3>Prix</h3><p>descriptif</p></div></div>");
      count++;
    }
  }
  readTextFile('articles.json');
  var count=0;
  for(var i =0; i<articles.accessoires.length; i++){
    for(var j=0; j<articles[articles.id[i]].length; j++){
      console.log(articles[articles.id[i]][j].nom);
      $('#toto').append("<div class=\"item-"+count+"\"><img class=\"photoo\" src="+ articles[articles.id[i]][j].image +" alt=\"photo\" style=\"width:50%; max-height:400px; min-height: 200px;\"><div class=\"carousel-caption\"><h3>Prix</h3><p>descriptif</p></div></div>");
      count++;
    }
  }*/
$('.item-0').addClass('active');
$('.slide-0').addClass('active');
  });

$(function() {

  var data = $(".data");
  var media = $(".media");
  var divImg = $(".img");
  var divDescription = $(".description");
  var mapDiv = $(".map");
  var url = "http://localhost:3000/gory";
  var gora = $(".get_gora");
  var button1 = $("#addGora");
  var button2 = $("#randomGora");
  var divPics = $(".pics");
  var footerDiv = $(".footer")


  //wczytanie nazw gór do opcji wyboru

  $.ajax({
    url: url,
    method: "GET",
    dataType: "jsonp"

  }).done(function(r) {
    for (var i = 0; i < r.length; i++) {
      var li = $("<option>").text(r[i].name);
      gora.append(li);
    }
  }).fail(function(error) {
    console.log(error);
  });



  //funcka addGora do zczytania danych konkretnego szczytu

  function addGora() {
    $.ajax({
      url: url,
      method: "GET",
      dataType: "jsonp"

    }).done(function(r) {
      for (var i = 0; i < r.length; i++) {
        if (r[i].name == gora.val()) {
          var li = $("<h2>").text(r[i].name);
          var height = $("<p>").text('Wysokość: ' + r[i].height);
          var img = $("<img class='img'>").attr('src', r[i].url);
          var map = $("<iframe> class='frame embed-responsive-item' >").attr('src', r[i].map);
          var intro = $("<h4 class='intro'>").text("Opis szczytu");
          var description1 = $("<p>").text(r[i].description1);
          var description2 = $("<p id='show' class='collapse'>").text(r[i].description2);
          var showBtn = $("<button type='button' class='btn btn-info' data-toggle='collapse' data-target='#show'>").text("Więcej");
          var footer = $("<p>").text('© All rights reserved');
          var pics = $("<a class='btn btn-primary btn-rounded' target='_blank'>").text("Zdjęcia").attr("href", r[i].pics);
          var movies = $("<a class='btn btn-primary btn-rounded' target='_blank'>").text("Filmy").attr("href", r[i].movies);
          data.text("");
          data.append(li);
          data.append(height);
          divImg.text("");
          divImg.append(img);
          data.append(pics);
          data.append(movies);
          divDescription.text("");
          divDescription.append(intro);
          divDescription.append(description1);
          divDescription.append(description2);
          divDescription.append(showBtn);
          mapDiv.append(map);
          footerDiv.text("");
          footerDiv.append(footer)


          $(".text").css("backgroundColor", "#E9ECDF");
          $(".footer").css("backgroundColor", "#E9ECDF");
        }
      }
    }).fail(function(error) {
      console.log(error);
    });
  }

//funkcja randomGora do wczytania losowego szczytu

  function randomGora() {
    $.ajax({
      url: url,
      method: "GET",
      dataType: "jsonp"

    }).done(function(r) {

      function randomNumber(max) {
        var max = parseInt(max, 10);
        var random = Math.floor(Math.random() * max);
        return random
      }

      var random = randomNumber(r.length);

      for (var i = 0; i < r.length; i++) {
        if (r[i].id == random) {
          var li = $("<h2>").text(r[i].name);
          var height = $("<p>").text('Wysokość: ' + r[i].height);
          var img = $("<img class='img'>").attr('src', r[i].url);
          var map = $("<iframe> class='frame embed-responsive-item' >").attr('src', r[i].map);
          var intro = $("<h4 class='intro'>").text("Opis szczytu");
          var description1 = $("<p>").text(r[i].description1);
          var description2 = $("<p id='show' class='collapse'>").text(r[i].description2);
          var showBtn = $("<button type='button' class='btn btn-info' data-toggle='collapse' data-target='#show'>").text("Więcej");
          var footer = $("<p>").text('© All rights reserved');
          var pics = $("<a class='btn btn-primary btn-rounded' target='_blank'>").text("Zdjęcia").attr("href", r[i].pics);
          var movies = $("<a class='btn btn-primary btn-rounded' target='_blank'>").text("Filmy").attr("href", r[i].movies);
          data.text("");
          data.append(li);
          data.append(height);
          divImg.text("");
          divImg.append(img);
          data.append(pics);
          data.append(movies);
          divDescription.text("");
          divDescription.append(intro);
          divDescription.append(description1);
          divDescription.append(description2);
          divDescription.append(showBtn);
          mapDiv.append(map);
          footerDiv.text("");
          footerDiv.append(footer);

          $(".text").css("backgroundColor", "#E9ECDF");
          $(".footer").css("backgroundColor", "#E9ECDF");
        }
      }
    }).fail(function(error) {
      console.log(error);
    });
  }

  // $("#button").click(function() {
  //     $('html, body').animate({
  //         scrollTop: $("#myDiv").offset().top
  //     }, 2000);
  // });


  //Wywołanie addGóra na klik
  button1.on("click", function(e) {
    $("#myCarousel").hide();
    e.preventDefault();
    addGora();

    //animacja przewinięcia do wczytanej góry
    $('html, body').animate({
        scrollTop: $("#przewin").offset().top
    }, 2000);

  })

  //Wywołanie randomGora na klik
  button2.on("click", function(e) {
    $("#myCarousel").hide();
    e.preventDefault();
    randomGora();
    
    //animacja przewinięcia do wczytanej góry
    $('html, body').animate({
        scrollTop: $("#przewin").offset().top
    }, 2000);

  })
});

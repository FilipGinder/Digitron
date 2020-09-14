//Treba namestiti da sabira posle znaka  tj  prva vrednost plus druga vrednost pa onda umesto jednako opet plus a on da sabira

$(document).ready(function(){

   znak = "";
   provera_broja = "prazna";
   provera_za_dalje_racunanje_znakom = "prvo stiskanje znaka";
   rezultat = "";



$(".dugmici").click(function(){
  var  stisnuto_dugme = $( this ).val();

  if(stisnuto_dugme == "+")
  {
              if(provera_za_dalje_racunanje_znakom == "prvo stiskanje znaka")
              {
                  window.osnovna_prva_vrednost = $("#displej").val();
                  znak = "+";
                  provera_broja = "puna";
                  provera_za_dalje_racunanje_znakom = "drugo stiskanje znaka";
                  return;

              }
              else if(provera_za_dalje_racunanje_znakom == "drugo stiskanje znaka")
              {

                  var trenutna_vrednost = $("#displej").val();
                  window.rezultat = parseInt(window.osnovna_prva_vrednost) + parseInt(trenutna_vrednost);
                  $("#displej").val(window.rezultat);
                  provera_broja = "puna";
                  znak = "+";
                  window.osnovna_prva_vrednost = 0;
                //  provera_za_dalje_racunanje_znakom = "prvo stiskanje znaka"
              }
              else if(provera_za_dalje_racunanje_znakom == 'trece stiskanje znaka')   //NE RADI KAKO TREBA ALI NA PRAVOM SI PUTU :)
              {
                var trenutna_vrednost = $("#displej").val();
                window.ispis = parseInt(window.rezultat) + parseInt(trenutna_vrednost);
                $("#displej").val(ispis);
                provera_broja = "puna";
                znak = "+";
                window.osnovna_prva_vrednost = window.ispis;
                provera_za_dalje_racunanje_znakom = "drugo stiskanje znaka";
              }

  }
  else if(stisnuto_dugme == "-")
  {
                  osnovna_prva_vrednost = $("#displej").val();
                  znak = "-";
                  provera_broja = "puna";
  }
  else if(stisnuto_dugme == "*")
  {
   osnovna_prva_vrednost = $("#displej").val();
   znak = "*";
   provera_broja = "puna";
  }
  else if(stisnuto_dugme == "/")
  {
   osnovna_prva_vrednost = $("#displej").val();
   znak = "/";
   provera_broja = "puna";
  }
  else if(stisnuto_dugme == "C")
  {
        if(provera_broja == "posle jednako")   //ako je stisnuto jednako i dobijen rezultat
        {                                      //u tom slucaju se ne moze obrisati rezultat za jednu vrednost u nazad
         return;
        }
        else {
                    var trenutna_vrednost = $("#displej").val();
                    var nova_vrednost = trenutna_vrednost.substring(0, trenutna_vrednost.length - 1);
                    $("#displej").val(nova_vrednost);       //u svim ostalim slucajevima osim kad je stisnuto jednako
             }                                           //moze se brisati poslednja vrednost sa displeja
  }
  else if(stisnuto_dugme == "CE")
  {
   $("#displej").val('');
   znak = "";
  }
  else if(stisnuto_dugme == "=")
  {
                       if(znak == "+")
                       {
                        var trenutna_vrednost = $("#displej").val();
                        var rezultat = parseInt(osnovna_prva_vrednost) + parseInt(trenutna_vrednost);
                        $("#displej").val(rezultat);
                        znak = "";
                        provera_broja = "posle jednako";


                       }
                       if(znak == "-")
                       {
                        var trenutna_vrednost = $("#displej").val();
                        rezultat = osnovna_prva_vrednost - trenutna_vrednost;
                        $("#displej").val(rezultat);
                        znak = "";
                        provera_broja = "posle jednako";
                       }
                       if(znak == "*")
                       {
                        var trenutna_vrednost = $("#displej").val();
                        rezultat = osnovna_prva_vrednost * trenutna_vrednost;
                        $("#displej").val(rezultat);
                        znak = "";
                        provera_broja = "posle jednako";
                       }
                       if(znak == "/")
                       {
                        var trenutna_vrednost = $("#displej").val();
                        rezultat = osnovna_prva_vrednost / trenutna_vrednost;
                        $("#displej").val(rezultat);
                        znak = "";
                        provera_broja = "posle jednako";
                       }
  }
  else
  {

     if(provera_broja == 'prazna')
     {
      var trenutna_vrednost = $("#displej").val();
      var nova_vrednost = $("#displej").val(trenutna_vrednost+stisnuto_dugme);
    }


    else if(provera_broja == 'puna')
     {
       $("#displej").val('');
       var trenutna_vrednost = $("#displej").val();
       var nova_vrednost = $("#displej").val(trenutna_vrednost+stisnuto_dugme);
       provera_broja = "unesen prvi broj";
       if(provera_za_dalje_racunanje_znakom == "drugo stiskanje znaka" && osnovna_prva_vrednost == 0)
       {

         provera_za_dalje_racunanje_znakom = "trece stiskanje znaka";
       }
       else {
         return;
       }


    }
    else if(provera_broja == 'unesen prvi broj')
    {
      var trenutna_vrednost = $("#displej").val();
      var nova_vrednost = $("#displej").val(trenutna_vrednost+stisnuto_dugme);
      provera_broja = "unesen prvi broj";
  //    osnovna_prva_vrednost = rezultat;
    }
    else if(provera_broja == 'posle jednako')
    {
      $("#displej").val('');
      var trenutna_vrednost = $("#displej").val();
      var nova_vrednost = $("#displej").val(trenutna_vrednost+stisnuto_dugme);
      provera_broja = "prazna";
    //  osnovna_prva_vrednost = rezultat;
    }


  }

})
});

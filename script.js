$(document).ready(function(){

   znak = "";
   provera_broja = "prazna";
   provera_za_dalje_racunanje_znakom = "prvo stiskanje znaka";
   window.rezultat = "0";
   window.osnovna_prva_vrednost = "0";
   window.rezultat_puta_podeljeno = "1";
   window.osnovna_prva_vrednost_puta_podeljeno = "1";
   window.stisnuto_jednako = "nije";



$(".dugmici").click(function(){
  var  stisnuto_dugme = $( this ).val();

  if(stisnuto_dugme == "+")
  {
      if($("#displej").val() == "")
      {
        return;
      }
      else if(window.stisnuto_jednako == "jeste")
      {
        return;
      }
      else
      {
              if(provera_za_dalje_racunanje_znakom == "prvo stiskanje znaka")
              {
                        window.osnovna_prva_vrednost = $("#displej").val();
                        znak = "+";
                        provera_broja = "puna";
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
              }
              else if(provera_za_dalje_racunanje_znakom == 'trece stiskanje znaka')
              {
                        var trenutna_vrednost = $("#displej").val();
                        window.ispis = parseInt(window.rezultat) + parseInt(trenutna_vrednost);
                        $("#displej").val(window.ispis);
                        provera_broja = "puna";
                        znak = "+";
                        window.osnovna_prva_vrednost = window.ispis;
                        window.rezultat = 0;
              }
      }




  }
  else if(stisnuto_dugme == "-")
  {
        if($("#displej").val() == "")
        {
          return;
        }
        else
        {
                if(provera_za_dalje_racunanje_znakom == "prvo stiskanje znaka")
                {
                          window.osnovna_prva_vrednost = $("#displej").val();
                          znak = "-";
                          provera_broja = "puna";
                          return;

                }
                else if(provera_za_dalje_racunanje_znakom == "drugo stiskanje znaka")
                {
                          var trenutna_vrednost = $("#displej").val();
                          window.rezultat = window.osnovna_prva_vrednost - trenutna_vrednost;
                          $("#displej").val(window.rezultat);
                          provera_broja = "puna";
                          znak = "-";
                          window.osnovna_prva_vrednost = 0;
                }
                else if(provera_za_dalje_racunanje_znakom == 'trece stiskanje znaka')
                {
                          var trenutna_vrednost = $("#displej").val();
                          window.ispis = window.rezultat - trenutna_vrednost;
                          $("#displej").val(window.ispis);
                          provera_broja = "puna";
                          znak = "-";
                          window.osnovna_prva_vrednost = window.ispis;
                          window.rezultat = 0;
                }
        }

  }
  else if(stisnuto_dugme == "*")
  {
    if($("#displej").val() == "")
    {
      return;
    }
    else
    {
            if(provera_za_dalje_racunanje_znakom == "prvo stiskanje znaka")
            {
                      window.osnovna_prva_vrednost_puta_podeljeno = $("#displej").val();
                      znak = "*";
                      provera_broja = "puna";
                      return;

            }

            else if(provera_za_dalje_racunanje_znakom == "drugo stiskanje znaka")
            {
                      var trenutna_vrednost = $("#displej").val();
                      window.rezultat_puta_podeljeno = window.osnovna_prva_vrednost_puta_podeljeno * trenutna_vrednost;
                      $("#displej").val(window.rezultat_puta_podeljeno);
                      provera_broja = "puna";
                      znak = "*";
                      window.osnovna_prva_vrednost_puta_podeljeno = 1;
            }
            else if(provera_za_dalje_racunanje_znakom == 'trece stiskanje znaka')
            {
                      var trenutna_vrednost = $("#displej").val();
                      window.ispis = window.rezultat_puta_podeljeno * trenutna_vrednost;
                      $("#displej").val(window.ispis);
                      provera_broja = "puna";
                      znak = "*";
                      window.osnovna_prva_vrednost_puta_podeljeno = window.ispis;
                      window.rezultat_puta_podeljeno = 1;
            }
    }
  }
  else if(stisnuto_dugme == "/")
  {
    if($("#displej").val() == "")
    {
      return;
    }
    else
    {
            if(provera_za_dalje_racunanje_znakom == "prvo stiskanje znaka")
            {
                      window.osnovna_prva_vrednost_puta_podeljeno = $("#displej").val();
                      znak = "/";
                      provera_broja = "puna";
                      return;

            }

            else if(provera_za_dalje_racunanje_znakom == "drugo stiskanje znaka")
            {
                      var trenutna_vrednost = $("#displej").val();
                      window.rezultat_puta_podeljeno = window.osnovna_prva_vrednost_puta_podeljeno / trenutna_vrednost;
                      $("#displej").val(window.rezultat_puta_podeljeno);
                      provera_broja = "puna";
                      znak = "/";
                      window.osnovna_prva_vrednost_puta_podeljeno = 1;
            }
            else if(provera_za_dalje_racunanje_znakom == 'trece stiskanje znaka')
            {
                      var trenutna_vrednost = $("#displej").val();
                      window.ispis = window.rezultat_puta_podeljeno / trenutna_vrednost;
                      $("#displej").val(window.ispis);
                      provera_broja = "puna";
                      znak = "/";
                      window.osnovna_prva_vrednost_puta_podeljeno = window.ispis;
                      window.rezultat_puta_podeljeno = 1;
            }
    }
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
   $("#displej").val(' ');
   znak = "";
   window.rezultat = "0";
   window.osnovna_prva_vrednost = "0";
  }
  else if(stisnuto_dugme == "=")
  {
                       if(znak == "+")
                       {
                           var trenutna_vrednost = $("#displej").val();
                           var rezultat = parseInt(window.rezultat) + parseInt(window.osnovna_prva_vrednost) + parseInt(trenutna_vrednost);
                           $("#displej").val(rezultat);
                           znak = "";
                           provera_broja = "posle jednako";
                           window.rezultat = 0;
                           window.osnovna_prva_vrednost = 0;
                           provera_za_dalje_racunanje_znakom = "prvo stiskanje znaka";
                           window.stisnuto_jednako = "jeste";
                       }
                       if(znak == "-")
                       {
                        var trenutna_vrednost = $("#displej").val();
                        var rezultat = window.rezultat - window.osnovna_prva_vrednost - trenutna_vrednost;
                        $("#displej").val(rezultat);
                        znak = "";
                        provera_broja = "posle jednako";
                        window.rezultat = 0;
                        window.osnovna_prva_vrednost = 0;
                        provera_za_dalje_racunanje_znakom = "prvo stiskanje znaka";
                       }
                       if(znak == "*")
                       {
                        var trenutna_vrednost = $("#displej").val();
                        rezultat = window.osnovna_prva_vrednost_puta_podeljeno * window.rezultat_puta_podeljeno * trenutna_vrednost;
                        $("#displej").val(rezultat);
                        znak = "";
                        provera_broja = "posle jednako";
                        window.rezultat_puta_podeljeno = 1;
                        window.osnovna_prva_vrednost_puta_podeljeno = 1;
                        provera_za_dalje_racunanje_znakom = "prvo stiskanje znaka";
                       }
                       if(znak == "/")
                       {
                        var trenutna_vrednost = $("#displej").val();
                        rezultat = window.osnovna_prva_vrednost_puta_podeljeno / window.rezultat_puta_podeljeno / trenutna_vrednost;
                        $("#displej").val(rezultat);
                        znak = "";
                        provera_broja = "posle jednako";
                        window.rezultat_puta_podeljeno = 1;
                        window.osnovna_prva_vrednost_puta_podeljeno = 1;
                        provera_za_dalje_racunanje_znakom = "prvo stiskanje znaka";
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
       if(provera_za_dalje_racunanje_znakom == "prvo stiskanje znaka")
       {
         provera_za_dalje_racunanje_znakom = "drugo stiskanje znaka";
       }
       else if(provera_za_dalje_racunanje_znakom == "drugo stiskanje znaka")
       {
         provera_za_dalje_racunanje_znakom = "trece stiskanje znaka";
       }
       else if(provera_za_dalje_racunanje_znakom == "trece stiskanje znaka")
       {
         provera_za_dalje_racunanje_znakom = "drugo stiskanje znaka";
       }
    }
    else if(provera_broja == 'unesen prvi broj')
    {
      var trenutna_vrednost = $("#displej").val();
      var nova_vrednost = $("#displej").val(trenutna_vrednost+stisnuto_dugme);
      provera_broja = "unesen prvi broj";
    }
    else if(provera_broja == 'posle jednako')
    {
      window.stisnuto_jednako = "nije";
      $("#displej").val('');
      var trenutna_vrednost = $("#displej").val();
      var nova_vrednost = $("#displej").val(trenutna_vrednost+stisnuto_dugme);
      provera_broja = "prazna";
    }


  }

})
});

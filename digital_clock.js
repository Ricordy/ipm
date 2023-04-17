window.addEventListener("load", () => {
    clock();
    function clock() {
      const hoje = new Date();
  
      // get time components
      const horas = hoje.getHours();
      const minutos = hoje.getMinutes();
      const segundos = hoje.getSeconds();
  
      //adicionar zero se menores que 10
      const hora = horas < 10 ? "0" + horas : horas;
      const minuto = minutos < 10 ? "0" + minutos : minutos;
      const segundo = segundos < 10 ? "0" + segundos : segundos;
  
      //relogio de 12H
      const tempo = hora > 12 ? hora - 12 : hora;
  
        //am ou pm
      const ampm = hora < 12 ? "AM" : "PM";
  
      // componentes de hora
      const mes = hoje.getMonth();
      const ano = hoje.getFullYear();
      const dia = hoje.getDate();
  
      //declaring a list of all months in  a year
      const monthList = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
      ];
  
      //get current date and time
      const data = mes + "/" + dia + "/" + ano;
      const tempoReal = tempo + ":" + minuto + ":" + segundo + ampm;
  
      //combine current date and time
      const dataTempo = data+ " " + tempoReal;
  
      //print current date and time to the DOM
      document.getElementById("data-tempo").innerHTML = dataTempo;
      setTimeout(clock, 1000);
    }
  });
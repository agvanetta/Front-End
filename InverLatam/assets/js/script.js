window.onload = function () {
    const url = "https://www.dolarsi.com/api/api.php?type=valoresprincipales";
  
    fetch(url)
      .then(function (respuesta) {
        return respuesta.json();
      })
      .then(function (informacion) {
        console.log(informacion[0].casa.nombre);
        var dolarCompra = informacion[0].casa.compra;
        var dolarVenta =  informacion[0].casa.venta;
        var dolarBCompra = informacion[1].casa.compra;
        var dolarBVenta =  informacion[1].casa.venta;
        var dolarMCompra = informacion[3].casa.compra;
        var dolarMVenta =  informacion[3].casa.venta;


        document.getElementById("dolarOficial").innerHTML += `: Compra $ ${dolarCompra} - Venta $ ${dolarVenta}`
        document.getElementById("dolarBlue").innerHTML += `: Compra $ ${dolarBCompra} - Venta $ ${dolarBVenta}`
        document.getElementById("dolarBolsa").innerHTML += `: Compra $ ${dolarMCompra} - Venta $ ${dolarMVenta}`

      })
      .catch(function (error) {
        // Ante cualquier error
        console.log(error);
      });
  
      const urlBTC = "https://blockchain.info/ticker";
  
      fetch(urlBTC)
        .then(function (respuesta) {
          return respuesta.json();
        })
        .then(function (informacion) {
          var precioBtcUsd = informacion.USD.sell;
          document.getElementById("BTC").innerHTML += `: $ ${precioBtcUsd}`


        })
        .catch(function (error) {
          // Ante cualquier error
          console.log(error);
        });


        // Write index

        document.getElementById("dolarOficial").innerHTML += `Dolar : ${dolarCompra}`



  };
  
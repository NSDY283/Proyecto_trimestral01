<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>Sweet Marine - Market place</title>
</head>
<body class="body-market">
    <header class="header-market">
        <img src="./image/gat.png" alt="">
        <h1>Sweet Marine</h1>
    </header>
    <nav class="container4-nav">
        <ul class="ul-4"> 
            <a id="Website-initial" href="Index.html">Nosotros</a>
            <a id="Market-place" href="#">Market Marine</a>
            <a id="Contact-us" href="indexContactenos.html">Contactenos</a>
        </ul>
    </nav>
    <nav class="container5-nav">
      <ul class="ul-5">
        <button id="btn-cartB">
          <i class="fas fa-bars"></i>
          <!-- <i class="fab fa-whatsapp-square"></i> -->
          
          <p id="p-counter"></p>
        </button>   
        <div class="categorias">
          <select name="" id="filterCategories">
            <option value="Accesorios">Accesorios</option>
            <option value="Cardigan">Cardigan</option>
            <option value="Peluches">Peluches</option>
            <option value="Tops">Tops</option>
          </select>
  
          <select name="" id="filterPrice">
            <option value="10.000 a 20.000">10.000 a 20.000</option>
            <option value="21.000 a 30.000">21.000 a 30.000</option>
            <option value="31.000 a 40.000">31.000 a 40.000</option>
            <option value="41.000 a 50.000">41.000 a 50000</option>
            <option value="Mayor a 51.000">Mayor a 51000</option>
          </select>
        </div>

          <button id="btn-cart">
              <i class="fas fa-shopping-bag"></i>
              <p id="p-counter"></p>
          </button>    
      </ul>
  </nav>
        <div class="modal-container">
          <div class="modal modal-close">
            <p class="close">X</p>
            <div class="modal-textos">
              <table id="tabla1">
                <thead class="head-t1">
                  <tr>
                    <th class="fila1"></th>
                    <th class="fila2"></th>
                    <th class="fila3">Producto</th>
                    <th class="fila4">Precio</th>
                    <th class="fila5">Cantidad</th>
                  </tr>
                </thead>
                <tbody id="container-table">
                  <td>
                    <tr>
            
                  </tr>
                </td>
                </tbody>
                <thead class="head-t1">
                  <tr>
                    <th class="fila11"></th>
                    <th class="fila22"></th>
                    <th class="fila33"></th>
                    <th class="fila44">TOTAL</th>
                    <th class="fila55"></th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
    <select name="" id="select-products">
        <option value="" >Selecciona Algún producto</option>      
      </select>    
    <main id="main-market"></main>
  
    <footer>

    </footer>
    <script src="appMarket.js"></script>
    <script src="products.js"></script>
</body>
</html>
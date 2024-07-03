const elemntsShared = `
<!-- Modals -->

      <!-- Modal Login & Register -->
      <div class="modal fade" id="login-modal" tabindex="-1" aria-labelledby="title-modal" aria-hidden="true">
        <div class="modal-dialog" >
          <div class="modal-content container backBlur">
            <div class="modal-header">
              <h1 class="modal-title fs-5 text-white" id="title-modal">Create New Account</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div id="contain-input-username" class="input-group mb-3">
                <input id="username-login-modal" type="text" class="form-control puplic-shadow-input rounded-pill" placeholder="User Name" >
                <i class="fa-regular fa-user icon-input" ></i>
              </div>
              <div class="input-group mb-3 d-flex flex-wrap">
                <input id="email-input-modal" type="text" class="form-control puplic-shadow-input rounded-start-pill" placeholder="Email">
                <span class="input-group-text fw-medium puplic-shadow-input rounded-end-pill input-span" style="color: rgba(0, 0, 0, 0.548);" id="basic-addon2" aria-label="Email" aria-describedby="basic-addon2">example@gmai.com</span>
              </div>
              <div class="input-group mb-3">
                <input id="input-password" type="password" class="form-control puplic-shadow-input rounded-pill" placeholder="password" >
                <button  id="btn-show-password" class="icon-input" style="border: none; background-color: transparent;">
                  <i id="icon-password" class="fa-regular fa-eye-slash"></i>
                </button>
              </div>
              <div id ='contain-input-bankID' class="input-group mb-3">
                <input id="bank-ID-modal" type="text" class="form-control puplic-shadow-input rounded-pill" placeholder="Bank Card ID" >
                <i class="fa-regular fa-address-card icon-input"></i>          
              </div>
              <div id ='contain-input-radio' class="input-group mb-3 d-flex justify-content-between text-white">
                <div><input class='descRadioInput' id='admin' type="radio" name='desc'><label for='admin'> Admin</label> </div>        
                <div><input class='descRadioInput' id='user' type="radio" name='desc'><label for='user'> User</label>        </div> 
                <div><input checked class='descRadioInput' id='visitor' type="radio" name='desc'><label for='visitor'>Visitor</label>     </div>      
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button id="btn-login-modal" type="button" class="btn btn-primary"></button>
            </div>
          </div>
        </div>
      </div>
      <!--// Modal Login & Register //-->

       <!-- Modal Add Cars -->
   <div class="modal fade" id="add-cars-modal" tabindex="-1" aria-labelledby="title-modal" aria-hidden="true">
    <div class="modal-dialog" >
      <div class="modal-content container backBlur" >
        <div class="modal-header">
          <h2 class="modal-title fs-5 text-white" id="title-modal-add"></h2>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body ">
          <div id="select-image-modal" class="input-group mb-3">
            <input type='file' id="input-file-modal" style="display:none">
            <button id="btn-select-image" type="button" class="w-25 rounded-start-pill btn btn-secondary p-0" style="height: 40px;" onclick="document.getElementById('input-file-modal').click()" >Select Image</button>
            <input id="input-path-image" type="text" class="w-75 puplic-shadow-input rounded-end-pill border-0" readonly>
          </div>
          <div class="input-group mb-3 d-flex flex-wrap justify-content-between">
            <h3 class="text-white fs-5 mr-2 w-25">Car Name:</h3>
            <input id="car-name-add-modal" type="text" class="w-75 puplic-shadow-input rounded-pill border-0">
          </div>
          <div class="input-group mb-3 d-flex flex-wrap justify-content-between">
            <h3  class="text-white fs-5 mr-2 w-25">Price:</h3>
            <input id="car-price-add-modal" type="text" class="w-75 puplic-shadow-input rounded-pill border-0">
          </div>
          <div class="input-group mb-3 d-flex flex-wrap">
            <h3 class="text-white fs-5 mr-2">Details Car:</h3>
            <textarea id="car-details-add-modal" class="w-100 puplic-shadow-input border-0 rounded" style="height: 100px;"></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button id="btn-add-modal" type="button" class="btn btn-primary" onclick="addCarBtnClicked()">Add</button>
        </div>
      </div>
    </div>
   </div>
    <!--// Modal Add Cars //-->

    <!-- Modal Buy Car -->
      <div class="modal fade" id="buy-modal" tabindex="-1" aria-labelledby="title-modal" aria-hidden="true">
        <div class="modal-dialog" >
          <div class="modal-content container backBlur">
            <div class="modal-header">
              <h1 class="modal-title fs-5 text-white">By Credit Card</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="input-group mb-3">
                <input type="text" class="form-control puplic-shadow-input rounded-pill" placeholder="Name On Card" >
              </div>
              <div class="input-group mb-3 d-flex flex-wrap">
                <input type="text" class="form-control puplic-shadow-input rounded-pill" placeholder="Card Number">
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-success">Buy</button>
            </div>
          </div>
        </div>
      </div>
      <!--// Modal Buy car //-->

    
    <!--// Modals //-->

<!-- nav bar -->
<nav class="navbar navbar-expand-sm mb-5 shadow fw-bold fixed-top container rounded backBlur" style="z-index:999 ;">
    <div class="container-fluid">
      <img  class="bg-black rounded-circle border border-black" src="logo.svg" style="cursor: pointer;" alt="">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="links">
          <li class="nav-item hoverLinks" url = 'home.html' id="home">
            <a class="nav-link active" aria-current="page">Home</a>
          </li>
          <li class="nav-item hoverLinks" url="Services.html" id="services">
            <a class="nav-link active" aria-current="page">Services</a>
          </li>
          <li class="nav-item hoverLinks" id="concat" url="Concat.html" >
            <a class="nav-link active" aria-current="page" >Concat</a>
          </li>
          <li class="nav-item active hoverLinks" id="models" url="index.html">
            <a class="nav-link" aria-current="page">Models</a>
          </li>
        </ul>
        <div>
        <button class="btn btn-outline-primary" id="btn-login" type="submit" data-bs-toggle="modal" data-bs-target="#login-modal" onclick="loginRegisterNavClicked('Login')">Login</button>
          <button class="btn btn-outline-success" id="btn-register" type="submit" data-bs-toggle="modal" data-bs-target="#login-modal" onclick="loginRegisterNavClicked()">Register</button>
          <button class="btn btn-outline-danger" id="btn-logout" type="submit" onclick='btnLogOutClicked()'>Logout</button>
        </div>
      </div>
    </div>
  </nav>
  <!--// nav bar //-->
`
function loadElementsShared(){
  document.getElementById('navigation-bar').innerHTML += elemntsShared ; 
}

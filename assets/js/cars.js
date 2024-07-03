
loadElementsShared(); // navbar and modals  

// Start: links Pages
let lis = document.querySelectorAll('#links li') ; 
let currentPage ; 
for(li of lis){
  li.onclick = function(){
    localStorage.setItem('currentPage', this.getAttribute('id'))
    window.location = this.getAttribute('url')
    currentPage = localStorage.getItem('currentPage')
    console.log(window.location.pathname)
  }
}
// End: links Pages

// Strat: Show Password Input 
  let icon_password = document.getElementById('icon-password')
  let isNotShow = icon_password.classList.contains('fa-eye-slash') ;
  document.getElementById('btn-show-password').onclick=()=>{
      if(isNotShow){
        document.getElementById('input-password').type ='text'
        document.getElementById('icon-password').classList.add('fa-eye')
        document.getElementById('icon-password').classList.remove('fa-eye-slash')
        isNotShow = false
      }
      else{
        document.getElementById('input-password').type ='password'
        document.getElementById('icon-password').classList.remove('fa-eye')
        document.getElementById('icon-password').classList.add('fa-eye-slash')
        isNotShow = true
      }
    }
  // End: Show Password Input 
 

   //Start : Show Path Image In Input
  let inputFileModal = document.getElementById('input-file-modal')
  inputFileModal.onchange = function(){
  let inputPathImage = document.getElementById('input-path-image')
  inputPathImage.value = inputFileModal.value  ; 
}
  //End : Show Path Image In Input

  // Start: Buttons Navbar Login & Register & Logout 
  function loginRegisterNavClicked(btnClicked){
    let titleModal = document.getElementById('title-modal')
    let containInputUsername = document.getElementById('contain-input-username');
    let btnLoginModal = document.getElementById('btn-login-modal')
    let containInputBankID = document.getElementById('contain-input-bankID') ;
    let containInputRadio = document.getElementById('contain-input-radio') ;
    if(btnClicked == 'Login'){
      titleModal.innerHTML = 'Login'
      containInputUsername.style.display = 'none'
      containInputBankID.style.display = 'none'
      btnLoginModal.innerHTML = 'Login' 
      containInputRadio.style.display = 'flex'
      containInputRadio.style.visibility = 'visible'
    } else{
      titleModal.innerHTML = 'Create A New Account'
      containInputUsername.style.display = 'flex'
      containInputBankID.style.display = 'flex'
      btnLoginModal.innerHTML = 'Create'
      containInputRadio.style.display = 'none'
      containInputRadio.style.visibility = 'hidden'
    }
  }
  function btnLogOutClicked(){
    currentPage = localStorage.getItem('currentPage') ; 
    localStorage.clear() ; 
    localStorage.setItem('currentPage' , currentPage)
    localStorage.setItem('desc','visitor') ; 
    setupUI() ; 
    if(currentPage=='models')
    getCars() ; 
  }
  
  // End: Buttons Navbar Login & Register & Logout 

  // Start: inner Btn Login Modal
  document.getElementById('btn-login-modal').onclick = function(){
  let emailInputModal = document.getElementById('email-input-modal')
  let inputPassword = document.getElementById('input-password')
  if(this.innerHTML=='Login' && emailInputModal.value!='' && inputPassword.value!='') {
    let descRadioInput = Array.from(document.querySelectorAll('.descRadioInput'))
    for(radio of descRadioInput){
      if(radio.checked){
        var user = {
          email: emailInputModal.value ,
          password :inputPassword.value ,
        }
        localStorage.setItem('user', JSON.stringify(user)) ; 
        localStorage.setItem('desc', radio.getAttribute('id') )
        document.getElementById('input-password').value=''
        document.getElementById('email-input-modal').value=''
        let loginModal = document.getElementById('login-modal')
        let modal = bootstrap.Modal.getInstance(loginModal)
        modal.hide()
        console.log(currentPage)
        if(currentPage=='models'){
        getCars() ; 
      
      }
      
        setupUI()
     }
    }
  }
}
  // End: inner Btn Login Modal

function setupUI(){
  let btnLogin = document.getElementById('btn-login') ;
  let btnRegister = document.getElementById('btn-register') ;
  let btnLogout = document.getElementById('btn-logout') 
  let btnAddCar = document.getElementById('add-car-btn') ;
  let desc = localStorage.getItem('desc')
  if(desc=='admin' || desc=='user'){
    btnLogin.style.display = 'none'
    btnRegister.style.display = 'none'
    btnLogout.style.display = 'block'
  }else{
    btnLogin.style.display = 'inline'
    btnRegister.style.display = 'inline'
    btnLogout.style.display = 'none'
  }
}
setupUI() ; 














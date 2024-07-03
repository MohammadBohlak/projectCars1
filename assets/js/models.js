document.getElementById('models').classList.add('navElementActive')

// start: Request Get Data of JSON File
let dataCars = {
    
  "cars" : [
      {
          "id" : 5 ,
          "name" : "BM Z4", 
          "price" : 70000 , 
          "details" : "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." , 
          "images" :[
              "./images/BMW/Z4.webp"
          ]
      }
   , 
  {
      "id" : 1 ,
      "name" : "BM X3", 
      "price" : 80000 , 
      "details" : "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." , 
      "images" :[
          "./images/BMW/x3.webp"
      ]
  } ,
  {
      "id" : 4 ,
      "name" : "BM I7", 
      "price" : 120000 , 
      "details" : "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." , 
      "images" :[
          "./images/BMW/i7.webp"
      ]
  } ,
  {
      "id" : 4 ,
      "name" : "BM I5", 
      "price" : 70000 , 
      "details" : "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." , 
      "images" :[
          "./images/BMW/i5.webp"
      ]
  } ,
  {
      "id" : 4 ,
      "name" : "BM X1", 
      "price" : 40000 , 
      "details" : "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." , 
      "images" :[
          "./images/BMW/X1.webp"
      ]
  },
  {
      "id" : 4 ,
      "name" : "BM X2", 
      "price" : 58000 , 
      "details" : "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." , 
      "images" :[
          "./images/BMW/X2.webp"
      ]
  }
]
}
// console.log(dataCars.cars)
function getCars(){
  if(localStorage.getItem('desc')==undefined){
    localStorage.setItem('desc','visitor') 
  }
  document.getElementById('cars').innerHTML='';
    document.getElementById('loader').style.display='block'
    let addCarBtn = document.getElementById('add-car-btn')
    let cars = dataCars.cars ;
    let state='hidden'
    let buyShow = 0.6;  
    let desc = localStorage.getItem('desc') ; 
    if( desc =='admin' ){
      state = 'visible'
      buyShow=0 ; 
    }
    else if(desc =='user'){
      buyShow = 1;
    }
    addCarBtn.style.visibility = state ; 
    for(car of cars){
      let carId = car.id 
      let carName = car.name
      let carPrice = car.price 
      let carDetails = car.details 
      let carImage = car.images[0]
      let content = `
  <div class="card mb-5 w-100 shadow puplic-shadow">
        <div class="row g-0">
          <div class="col-md-6 overflow-hidden image-car" >
            <img id='car-image-${carId}' src="${carImage}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-6">
            <div class="card-body h-100 d-flex flex-column justify-content-evenly align-items-center align-items-md-start">
              <div class="puplic-color d-flex flex-column justify-content-evenly align-items-center align-items-md-start">
                <h3 class="card-title" id="car-name-${carId}">${carName}</h3>
                <p class="card-text" id="car-details-${carId}">${carDetails}</p>
                <p class="card-text mb-2 " id="car-price-${carId}">${carPrice}$</p>
              </div>
              <div class="buttons  flex-wrap d-flex w-100 justify-content-between ">
                <button type="button" class="btn btn-primary flex-wrap d-flex align-items-center justify-content-between" style="opacity:${buyShow} ; max-width:100px;" onclick="buyBtnClicked(true)"><i class="fa-solid fa-money-check-dollar"></i>Buy</button>
                <div class="">
                  <button style='visibility:${state}' id="car-del-btn-${carId}" type="button" class="btn btn-outline-danger"><i class="fa-regular fa-trash-can"></i></button>
                  <button style='visibility:${state}' id="car-edit-btn-${carId}" type="button" class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#add-cars-modal" onclick="editCarBtnClicked('${encodeURIComponent(JSON.stringify(car))}')"><i class="fa-regular fa-pen-to-square"></i></button>
                </div>
              </div>
              </div>
          </div>
        </div>
      </div>
  ` 
      document.getElementById('cars').innerHTML+=content ; 
    }
  
}
getCars();
document.getElementById('loader').style.display='none'

// End: Request Get Data of JSON File


  // Start: Show & Hide buy Btn
  function buyBtnClicked(isShow){
    if(localStorage.getItem('desc') == 'visitor'){
      if(isShow){
        document.getElementById('buy-alert').style.opacity=1
        setTimeout(()=>{
          document.getElementById('buy-alert').style.opacity=0
        } , 2000)
      }else{
        document.getElementById('buy-alert').style.opacity=0
      }
    }
    else{
      var myModal = new bootstrap.Modal(document.getElementById("buy-modal"), {});
      myModal.show() ; 
    }
  }
  // End: Show & Hide buy Btn

  // Start: Initial Modal Edit Car
  function editCarBtnClicked(carObject){
    let selectImageModal = document.getElementById('select-image-modal')
    let carNameAddModal = document.getElementById('car-name-add-modal')
    let carPriceAddModal = document.getElementById('car-price-add-modal')
    let carDetailsAddModal = document.getElementById('car-details-add-modal')
    let btnAddModal = document.getElementById('btn-add-modal')
    let titleModalAdd = document.getElementById('title-modal-add')

    if(carObject){
    let car = JSON.parse(decodeURIComponent(carObject)) ; 
    selectImageModal.style.display = 'none'
    carNameAddModal.value= car.name ; 
    carPriceAddModal.value= car.price ; 
    carDetailsAddModal.value= car.details ; 
    btnAddModal.innerHTML = 'Edit' 
    titleModalAdd.innerHTML = 'Edit info Car' 
    }
    else{
    selectImageModal.style.display = 'flex'
    carNameAddModal.value= '' ; 
    carPriceAddModal.value= '' ; 
    carDetailsAddModal.value= '' ; 
    btnAddModal.innerHTML = 'Add' 
    titleModalAdd.innerHTML = 'Add A New Car'
    }
  }
  // End: Initial Modal Edit Car
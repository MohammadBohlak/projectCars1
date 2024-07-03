function loader(){
  return new Promise((resolve , reject )=>{
    
      axios.get('navbar.html')
       .then(function (response) {
         document.getElementById('navigation-bar').innerHTML = response.data;
                 // console.log(document.getElementById('home'))
                  resolve() ; 
       })
   });
 
  }


    // document.addEventListener('DOMContentLoaded',function() {
    //   axios.get('navbar.html')
    //    .then(function (response) {
    //      document.getElementById('navigation-bar').innerHTML = response.data;
    //              // console.log(document.getElementById('home'))
                  
    //    })
    //    .catch(function (error) {
    //      console.log(error);
    //    });
    //   })


// async function shared(){
//   try{
//     const response =  await axios.get('navbar.html')
//     document.getElementById('navigation-bar').innerHTML = response.data;
                // let urlParams = new URLSearchParams(window.location)
                // console.log(urlParams.get('m'),'fffff')

//   }
//   catch(error) {
//     console.log(error);
//   } 
 


// let lis = document.querySelectorAll('#links li')
//         for(li of lis){
//           li.onclick = function(){
            
//             window.location = `${this.getAttribute('url')}?id=${this.getAttribute('id')}`
//             // console.log(window.location.href)
//             for(e of lis){
//               e.classList.remove('navElementActive')
//             }
//             this.classList.add('navElementActive')    
//           }
//         }

  








// axios.get('navbar.html')
//        .then(function (response) {
//          document.getElementById('navigation-bar').innerHTML = response.data;
//                  var navbarLoadedEvent = new CustomEvent('navbarLoaded', {
//                   detail: {
//                     }
//                   })
//                   document.dispatchEvent(navbarLoadedEvent);
                  
//                 });
    
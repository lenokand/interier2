

  // import Swiper JS
  import Swiper, { Navigation, Pagination } from 'swiper';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';


// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);
// маска тел
window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call( document.querySelectorAll('.tel'), function(input) {
    var keyCode;
    function mask(event) {
    event.keyCode && (keyCode = event.keyCode);
    var pos = this.selectionStart;
    if (pos < 3) event.preventDefault();
    var matrix = "+7 (___) ___ __ __",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
        new_value = matrix.replace(/[_\d]/g, function(a) {
            return i < val.length ? val.charAt(i++) || def.charAt(i) : a
        });
    i = new_value.indexOf("_");
    if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i)
    }
    var reg = matrix.substr(0, this.value.length).replace(/_+/g,
        function(a) {
            return "\\d{1," + a.length + "}"
        }).replace(/[+()]/g, "\\$&");
    reg = new RegExp("^" + reg + "$");
    if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
    if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }
    
    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)
    
    });
    
    });
    
// адаптив
    function fontSize() {
        if ($(window).width() < 900) {
          $('html').css({
            fontSize: 16 + 'px'
          });
        }
      
        if ($(window).width() > 900) {
          var width = 1920; // ширина, от которой идет отсчет
      
          var fontSize = 16; // минимальный размер шрифта
      
          var bodyWidth = $('html').width();
          var multiplier = bodyWidth / width;
          if ($('html').width() >= width) fontSize = Math.floor(fontSize * multiplier);
          if ($('html').width() < width) fontSize = Math.floor(fontSize * multiplier);
          $('html').css({
            fontSize: fontSize + 'px'
          });
        }
      }
      
      $(function () {
        fontSize();
      });
      $(window).resize(function () {
        fontSize();
      });
    


    //   swiper

    //   var swiper = new Swiper(".swiper_main", {
    //     spaceBetween: 30,
    //     effect: "fade",
    //     navigation: {
    //       nextEl: ".swiper-button-next",
    //       prevEl: ".swiper-button-prev",
    //     },
    //     pagination: {
    //       el: ".swiper-pagination",
    //       clickable: true,
    //     },
    //   });


// свайпер на главной
    let totale_slides = document.querySelector('.totale_slides')
    if (totale_slides) {
        let count_slides = document.querySelectorAll('.swiper_main .swiper-slide')
        
        if (count_slides.length <= 9) {
            totale_slides.innerHTML = '0' + count_slides.length
        
        }  else {
            totale_slides.innerHTML =  count_slides.length
        
        }
    }
    

    
    
    // var card = $(".card");
    // var parent = card.parent();
    // var fieldOfView = (innerWidth / innerHeight) * 16;

    // $(document).on("mousemove", function (e) {
    //     var ax = -(parent.width() * 0.5 - e.pageX) / fieldOfView;
    //     var ay = (parent.height() * 0.5 - e.pageY) / fieldOfView;
    //     card.css("transform", "rotateY(" + ax + "deg) rotateX(" + ay + "deg)");
    // });



    // let current_slide = document.querySelector('.swiper_main .swiper-pagination-current')
    // console.log(current_slide.innerHTML)
    // let block_for_current_slide = document.querySelector('.swiper_main .swiper-pagination')
    // if(current_slide) {

    //     if (current_slide.innerHTML <= 9) {
    //         block_for_current_slide.innerHTML = '0' + current_slide.innerHTML
    
    //     } else {
    //         block_for_current_slide.innerHTML =  current_slide.innerHTML
    //     }
    // }

    // паралакс картинки

    const cards = document.querySelector(".screen1_img");
    const cards7 = document.querySelectorAll(".screen7_img");
// const images = document.querySelectorAll(".card__img");
// const backgrounds = document.querySelectorAll(".card__bg");
const range = 35;

// const calcValue = (a, b) => (((a * 100) / b) * (range / 100) -(range / 2)).toFixed(1);
const calcValue = (a, b) => (a/b*range-range/2).toFixed(1) // thanks @alice-mx

let timeout;
document.addEventListener('mousemove', ({x, y}) => {
  if (timeout) {
    window.cancelAnimationFrame(timeout);
  }
  	
  timeout = window.requestAnimationFrame(() => {
    const yValue = calcValue(y, window.innerHeight);
    const xValue = calcValue(x, window.innerWidth);

    cards.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;
    cards7.forEach( (card) => {
   
      card.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;
    })

    
    // cards2.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;

    // [].forEach.call(images, (image) => {
    //   image.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`;
    // });

    // [].forEach.call(backgrounds, (background) => {
    //   background.style.backgroundPosition = `${xValue*.45}px ${-yValue*.45}px`;
    // })
	})
}, false);




// табы

let tab_controls = document.querySelectorAll('#section2 .tab_control_item')
let tab_contents = document.querySelectorAll('#section2 .tabs_content')

if (tab_controls.length > 0) {

  tab_controls.forEach((tab, index) => {
   

    tab.addEventListener('click', function(){


     let active_content = document.querySelector('#section2 .tabs_content.show')
     active_content.classList.remove('show')
     tab_contents[index].classList.add('show')

      // console.log(active_content, tab)
    })}
  )}




let tab_controls2 = document.querySelectorAll('#section7 .tab_control_item')
let tab_contents2 = document.querySelectorAll('#section7 .tabs_content')

if (tab_controls2.length > 0) {

  tab_controls2.forEach((tab, index) => {
   

    tab.addEventListener('click', function(){


     let active_content = document.querySelector('#section7 .tabs_content.show')
     active_content.classList.remove('show')
     tab_contents2[index].classList.add('show')

      // console.log(active_content, tab)
    })}
  )}
  


  // отображение портфолио меню
  let menuItemPortfolio = document.querySelector('menu .portfolio_item')
  let menuRightArea = document.querySelector('.portfolio_right_block')
  let menuPortfolioBack = document.querySelector('.portfolio_menu .button_back')
    let bodyBlock = document.body
    // console.log(bodyBlock);
  menuItemPortfolio.addEventListener('click',  showBlock)
  menuRightArea.addEventListener('click',  showBlock)
  menuPortfolioBack.addEventListener('click',  showBlock)


  function showBlock(){

    // e.preventDefault()
    let portfolioBlock = document.querySelector('.portfolio_menu')
    portfolioBlock.classList.toggle('show')
    menuItemPortfolio.classList.toggle('active')
    bodyBlock.classList.toggle("menu_open")

    // fullpage_api.destroy('all');

    if(  portfolioBlock.classList.contains('show'))
    {
      // fullpage_api.setAllowScrolling(false);
      fullpage_api.destroy('all');
      // console.log(portfolioBlock.classList.contains('show'));

    } else {
      // fullpage_api.setAllowScrolling(true);
      // fullpage_api.reBuild();
      initializeFullPage()
      // console.log(portfolioBlock.classList.contains('show'));
    }
    // fullpage_api.setAllowScrolling(false);
    

  }

  let listOfDisignTab = document.querySelectorAll('.portfolio_left_menu .portfolio_submenu_item')
  let listOfDisignBlock = document.querySelectorAll('.portfolio_center_block .case_category_block')
 

  listOfDisignTab.forEach((tab, index) => {
    tab.addEventListener("click", function(){

        let ac_tab = document.querySelector('.portfolio_left_menu .portfolio_submenu_item.show')
        if (ac_tab) {
          ac_tab.classList.remove('show')
        }
        listOfDisignTab[index].classList.add('show')

        let ac_block = document.querySelector('.portfolio_center_block .case_category_block.show')
        
        if (ac_block) {
          ac_block.classList.remove('show')
        }
        listOfDisignBlock[index].classList.add('show')
    })
  
  } )

let portfolioMenuItem = document.querySelectorAll('.portfolio_menu_item span')



portfolioMenuItem.forEach((item, index) => {
  
  item.addEventListener('click', function(){

  // console.log(item.parentElement.classList.contains('active'));

    if (item.parentElement.classList.contains('active')){
      item.parentElement.classList.remove('active')
    } else {
      let ac_menu = document.querySelector('.portfolio_menu_item.active')

    

      if (ac_menu) {
        ac_menu.classList.remove('active')
      }
  
  
      item.parentElement.classList.add('active')
    }

  
    

  })

}

)

  // переключение пунктов меню
  // пункты раздела дизайн интерьера
  // let listOfDisignTab = document.querySelectorAll('.design_tab .portfolio_submenu_item')
  // let listOfDisignBlock = document.querySelectorAll('.design_block .case_category_block')

  // listOfDisignTab.forEach((tab, index) => {
  //   tab.addEventListener("click", function(){

  //       let ac_tab = document.querySelector('.design_tab .portfolio_submenu_item.show')
  //       if (ac_tab) {
  //         ac_tab.classList.remove('show')
  //       }
  //       listOfDisignTab[index].classList.add('show')

  //       let ac_block = document.querySelector('.design_block .case_category_block.show')
  //       // console.log(ac_block);
  //       if (ac_block) {
  //         ac_block.classList.remove('show')
  //       }
  //       listOfDisignBlock[index].classList.add('show')
  //   })
  
  // } )
  // пункты раздела реализация furniture_tab
  // let listOfRealisationTab = document.querySelectorAll('.realisation_tab .portfolio_submenu_item')
  // let listOfRealisationBlock = document.querySelectorAll('.realisation_block .case_category_block')

  // listOfRealisationTab.forEach((tab, index) => {
  //   tab.addEventListener("click", function(){

  //       let ac_tab = document.querySelector('.realisation_tab .portfolio_submenu_item.show')
  //       if (ac_tab) {
  //         ac_tab.classList.remove('show')
  //       }
  //       listOfRealisationTab[index].classList.add('show')

  //       let ac_block = document.querySelector('.realisation_block .case_category_block.show')
  //       // console.log(ac_block);
  //       if (ac_block) {
  //         ac_block.classList.remove('show')
  //       }
  //       listOfRealisationBlock[index].classList.add('show')
  //   })
  
  // } )




  

  // курсор
  const cursor = document.querySelector(".cursor"); // #1

  const mouseMove = function (e) { // #2
 let x = e.clientX;
 let y = e.clientY;
 cursor.style.left = x + "px";
 cursor.style.top = y + "px";
};

 document.addEventListener("mousemove", mouseMove); // #3    
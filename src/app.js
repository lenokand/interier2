// import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";

// import Swiper JS
import Swiper, {
  Navigation,
  Pagination
} from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import '@fancyapps/ui/dist/fancybox.umd.js';


// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);
// маска тел
window.addEventListener("DOMContentLoaded", function () {
  [].forEach.call(document.querySelectorAll('.tel'), function (input) {
    var keyCode;

    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ __ __",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
        new_value = matrix.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a
        });
      i = new_value.indexOf("_");
      if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
        function (a) {
          return "\\d{1," + a.length + "}"
        }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5) this.value = ""
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

  } else {
    totale_slides.innerHTML = count_slides.length

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







// табы на главной

let tab_controls = document.querySelectorAll('#section2 .tab_control_item')
let tab_contents = document.querySelectorAll('#section2 .tabs_content')

if (tab_controls.length > 0) {

  tab_controls.forEach((tab, index) => {


    tab.addEventListener('click', function () {


      let active_content = document.querySelector('#section2 .tabs_content.show')
      active_content.classList.remove('show')
      tab_contents[index].classList.add('show')

      // console.log(active_content, tab)
    })
  })
}




let tab_controls2 = document.querySelectorAll('#section7 .tab_control_item')
let tab_contents2 = document.querySelectorAll('#section7 .tabs_content')

if (tab_controls2.length > 0) {

  tab_controls2.forEach((tab, index) => {


    tab.addEventListener('click', function () {


      let active_content = document.querySelector('#section7 .tabs_content.show')
      active_content.classList.remove('show')
      tab_contents2[index].classList.add('show')

      // console.log(active_content, tab)
    })
  })
}



// отображение портфолио меню
let menuItemPortfolio = document.querySelector('menu .portfolio_item')
let menuRightArea = document.querySelector('.portfolio_right_block')
let menuPortfolioBack = document.querySelector('.portfolio_menu .button_back')
let bodyBlock = document.body
// console.log(bodyBlock);
menuItemPortfolio.addEventListener('click', showBlock)
menuRightArea.addEventListener('click', showBlock)
menuPortfolioBack.addEventListener('click', showBlock)


function showBlock() {

  // e.preventDefault()
  let portfolioBlock = document.querySelector('.portfolio_menu')
  portfolioBlock.classList.toggle('show')
  menuItemPortfolio.classList.toggle('active')
  bodyBlock.classList.toggle("menu_open")

  // fullpage_api.destroy('all');

  if (portfolioBlock.classList.contains('show')) {
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

if (listOfDisignTab.length > 0) {
  listOfDisignTab.forEach((tab, index) => {
    tab.addEventListener("click", function () {

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

  })
}



let portfolioMenuItem = document.querySelectorAll('.portfolio_menu_item span')



portfolioMenuItem.forEach((item, index) => {

    item.addEventListener('click', function () {

      // console.log(item.parentElement.classList.contains('active'));

      if (item.parentElement.classList.contains('active')) {
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












//  табы для контактов

let contactTabList = document.querySelectorAll('.contact_info_block .contact_tab_item')
let contactInnerList = document.querySelectorAll('.contact_info_block .contact_inner_item')
contactTabList.forEach((tab, index) => {
  tab.addEventListener('click', function () {

    // console.log(item.parentElement.classList.contains('active'));

    let ac_tab = document.querySelector('.contact_info_block .contact_tab_item.active')
    if (ac_tab) {
      ac_tab.classList.remove('active')



      tab.classList.add('active')
    }
    let ac_block = document.querySelector('.contact_info_block .contact_inner_item.active')
    if (ac_tab) {
      ac_block.classList.remove('active')



      contactInnerList[index].classList.add('active')
    }






  })

})

//  табы для цен

let priceTabList = document.querySelectorAll('.price_block_service .price_service_item')
let priceInnerList = document.querySelectorAll('.price_block_table .price_table_item')

priceTabList.forEach((tab, index) => {
  tab.addEventListener('click', function () {

    // console.log(item.parentElement.classList.contains('active'));

    let pr_tab = document.querySelector('.price_block_service .price_service_item.active')
    if (pr_tab) {
      pr_tab.classList.remove('active')



      tab.classList.add('active')
    }
    let pr_block = document.querySelector('.price_block_table .price_table_item.active')
    if (pr_tab) {
      pr_block.classList.remove('active')



      priceInnerList[index].classList.add('active')
    }






  })

})



// курсор
const cursor = document.querySelector(".cursor"); // #1
if (cursor) {
  const mouseMove = function (e) { // #2
    let x = e.clientX;
    let y = e.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
  };
  document.addEventListener("mousemove", mouseMove); // #3    
}




// паралакс картинки

//  const cards = document.querySelector(".screen1_img");
const cards7 = document.querySelectorAll(".screen7_img1");
// const cardsSwiper = document.querySelector(".swiper_cases .swiper-slide-active .img_part");
// const images = document.querySelectorAll(".card__img");
// const backgrounds = document.querySelectorAll(".card__bg");
if ( cards7 !== null) {

  const range = 16;

  // const calcValue = (a, b) => (((a * 100) / b) * (range / 100) -(range / 2)).toFixed(1);
  const calcValue = (a, b) => (a / b * range - range / 2).toFixed(1) // thanks @alice-mx

  let timeout;
  document.addEventListener('mousemove', ({
    x,
    y
  }) => {
    if (timeout) {
      window.cancelAnimationFrame(timeout);
    }

    timeout = window.requestAnimationFrame(() => {
      const yValue = calcValue(y, window.innerHeight);
      const xValue = calcValue(x, window.innerWidth);

      //  if(cards){

      //   cards.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;  
      //  }
      if (cards7) {
        


        cards7.forEach((card) => {

          card.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;
        })
      }
      // console.log(cardsSwiper)
      // if (cardsSwiper) {

      //   cardsSwiper.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;
      // }



    })
  }, false);
}







const iconClose = document.querySelector('.adaptive_close');


const icons = document.querySelector('.burger');

  icons.addEventListener('click', (event) => {
    icons.classList.toggle("open");  
    document.body.classList.toggle("menu_open");  
    document.querySelector('header').classList.toggle("show");  
    // fullpage_api.destroy('all');

  });

iconClose.addEventListener('click', (event) => {
  icons.classList.toggle("open");  
  document.body.classList.toggle("menu_open");  
  document.querySelector('header').classList.toggle("show");  

  // initializeFullPage()
});





let inputTo = document.querySelector("#input-to")
let inputFrom = document.querySelector("#input-from")
$(".js-range-slider").ionRangeSlider({

  skin: "round",
  type: "double",
  min: 0,
  max: 24,
  from: 9,
  to: 13,
  step: 1,
  postfix: ":00",
  grid: false, // show/hide grid
  force_edges: false, // force UI in the box
  hide_min_max: true, // show/hide MIN and MAX labels
  // hide_from_to: true,    // show/hide FROM and TO labels
  block: false, // block instance from changing
  onStart: function (data) {

    inputTo.value = data.to
    inputFrom.value = data.from

  },
  onChange: function (data) {

    inputTo.value = data.to
    inputFrom.value = data.from

  },

});

const filterGallary = Fancybox.bind('[data-fancybox="modal-call-time"]', {
  // closeButton: "top",
  dragToClose: false,
  // Thumbs: false,
  // Carousel: {
  //     Dots: false,
  // },
});
//    const filterGallary = Fancybox.bind('[data-fancybox="modal-call"]', {
//     // closeButton: "top",
//     dragToClose: false,
//     // Thumbs: false,
//     // Carousel: {
//     //     Dots: false,
//     // },
// });
const filterGallary2 = Fancybox.bind('[href="#modal-call"]', {
  // closeButton: "top",
  dragToClose: false,
  // Thumbs: false,
  // Carousel: {
  //     Dots: false,
  // },
});




// аккордион



if(document.querySelector('.accordion-item')){
  var accordion = (function (element) {
    var _getItem = function (elements, className) { // функция для получения элемента с указанным классом
      var element = undefined;
      elements.forEach(function (item) {
        if (item.classList.contains(className)) {
          element = item;
        }
      });
      return element;
    };
    return function () {
      var _mainElement = {}, // .accordion
        _items = {}, // .accordion-item
        _contents = {}; // .accordion-item-content
      var _addItemHeaderCount = function () {
          // количество подпунктов в пункте
          // var headers = _mainElement.querySelectorAll('.accordion-item-header');
          // headers.forEach(function (header) {
          //   var countElement = document.createElement('div');
          //   countElement.className = 'accordion-item-header-count';
          //   countElement.textContent = header.parentElement.querySelectorAll('.accordion-subitem').length;
          //   // header.appendChild(countElement);
          // });
        },
        _actionClick = function (e) {
          if (!e.target.classList.contains('accordion-item-header')) { // прекращаем выполнение функции если кликнули не по заголовку
            return;
          }
          e.preventDefault(); // отменям стандартное действие
          // получаем необходимые данные
          var header = e.target,
            item = header.parentElement,
            itemActive = _getItem(_items, 'show');
  
          if (itemActive === undefined) { // добавляем класс show к элементу (в зависимости от выбранного заголовка)
            item.classList.add('show');
          } else {
            // удаляем класс show у ткущего элемента
            itemActive.classList.remove('show');
            // если следующая вкладка не равна активной
            if (itemActive !== item) {
              // добавляем класс show к элементу (в зависимости от выбранного заголовка)
              item.classList.add('show');
            }
          }
        },
        _setupListeners = function () {
          // добавим к элементу аккордиона обработчик события click
          _mainElement.addEventListener('click', _actionClick);
        };
      return {
        init: function (element) {
          _mainElement = (typeof element === 'string' ? document.querySelector(element) : element);
          _items = _mainElement.querySelectorAll('.accordion-item');
          _addItemHeaderCount();
          _setupListeners();
        }
      }
    }
  })();
  
  var accordion1 = accordion();
  if (accordion1) {
    accordion1.init('#accordion');
  }
}

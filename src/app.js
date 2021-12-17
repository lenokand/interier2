// import 'fullpage.js'

// new fullpage('#fullpage', {
// 	//options here
// 	autoScrolling:true,
// 	scrollHorizontally: true,


//     //Scrolling
// 	css3: true,
// 	scrollingSpeed: 700,
// 	autoScrolling: true,
// 	fitToSection: true,
// 	fitToSectionDelay: 1000,
// 	scrollBar: false,
// 	easing: 'easeInOutCubic',
// 	easingcss3: 'ease',
// 	loopBottom: false,
// 	loopTop: false,
// 	loopHorizontal: true,
// 	continuousVertical: false,
// 	continuousHorizontal: false,
// 	scrollHorizontally: false,
// 	interlockedSlides: false,
// 	dragAndMove: false,
// 	offsetSections: false,
// 	resetSliders: false,
// 	fadingEffect: false,
// 	normalScrollElements: '#element1, .element2',
// 	scrollOverflow: false,
// 	scrollOverflowReset: false,
// 	scrollOverflowOptions: null,
// 	touchSensitivity: 15,
// 	bigSectionsDestination: null,

// 	//Accessibility
// 	keyboardScrolling: true,
// 	animateAnchor: true,
// 	recordHistory: true,

// 	//Design
// 	controlArrows: true,
// 	verticalCentered: true,
// 	sectionsColor : ['#ccc', '#fff'],
// 	paddingTop: '3em',
// 	paddingBottom: '10px',
// 	fixedElements: '#header, .footer',
// 	responsiveWidth: 0,
// 	responsiveHeight: 0,
// 	responsiveSlides: false,
// 	parallax: false,
// 	parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
// 	dropEffect: false,
// 	dropEffectOptions: { speed: 2300, color: '#F82F4D', zIndex: 9999},
// 	waterEffect: false,
// 	waterEffectOptions: { animateContent: true, animateOnMouseMove: true},
// 	cards: false,
// 	cardsOptions: {perspective: 100, fadeContent: true, fadeBackground: true},

// 	//Custom selectors
// 	sectionSelector: '.section',
// 	slideSelector: '.slide',

// 	lazyLoading: true,

// 	//events
// 	onLeave: function(origin, destination, direction){},
// 	afterLoad: function(origin, destination, direction){},
// 	afterRender: function(){},
// 	afterResize: function(width, height){},
// 	afterReBuild: function(){},
// 	afterResponsive: function(isResponsive){},
// 	afterSlideLoad: function(section, origin, destination, direction){},
// 	onSlideLeave: function(section, origin, destination, direction){}

// });

// //methods
// fullpage_api.setAllowScrolling(false);

  // import Swiper JS
  import Swiper, { Navigation, Pagination } from 'swiper';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';


// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

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

    const cards = document.querySelector(".screen1_img");
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

    // [].forEach.call(images, (image) => {
    //   image.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`;
    // });

    // [].forEach.call(backgrounds, (background) => {
    //   background.style.backgroundPosition = `${xValue*.45}px ${-yValue*.45}px`;
    // })
	})
}, false);

let tab_controls = document.querySelectorAll('#section2 .tab_control_item')
let tab_contents = document.querySelectorAll('#section2 .tabs_content')

if (tab_controls.length > 0) {

  tab_controls.forEach((tab, index) => {
   

    tab.addEventListener('click', function(){


     let active_content = document.querySelector('#section2 .tabs_content.show')
     active_content.classList.remove('show')
     tab_contents[index].classList.add('show')

      // console.log(active_content, tab)
    })

  }
  )



}
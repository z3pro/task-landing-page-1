
$(document).ready(function () {
  const dataByProductType = [
    {
      img: 'images/product-item/Mask Group 112.png',
      title: 'Flexible Packaging'
    },
    {
      img: 'images/product-item/Mask Group 112.png',
      title: 'Flexible Packaging'
    },
    {
      img: 'images/product-item/Mask Group 112.png',
      title: 'Flexible Packaging'
    },
    {
      img: 'images/product-item/Mask Group 112.png',
      title: 'Flexible Packaging'
    },
    {
      img: 'images/product-item/Mask Group 112.png',
      title: 'Flexible Packaging'
    },
    {
      img: 'images/product-item/Mask Group 112.png',
      title: 'Flexible Packaging'
    },
    {
      img: 'images/product-item/Mask Group 112.png',
      title: 'Flexible Packaging'
    },
    {
      img: 'images/product-item/Mask Group 112.png',
      title: 'Flexible Packaging'
    }
  ]
  const dataByIndustry = [
    {
      img: 'images/product-item/Mask Group 112.png',
      title: 'Flexible Packaging'
    },
    {
      img: 'images/product-item/Mask Group 112.png',
      title: 'Flexible Packaging'
    },
    {
      img: 'images/product-item/Mask Group 112.png',
      title: 'Flexible Packaging'
    },
    {
      img: 'images/product-item/Mask Group 112.png',
      title: 'Flexible Packaging'
    }
  ]
  const dataByPurpose = [
    {
      img: 'images/product-item/Mask Group 112.png',
      title: 'Flexible Packaging'
    },
    {
      img: 'images/product-item/Mask Group 112.png',
      title: 'Flexible Packaging'
    },
  ]
  $('.mv-content .content-left').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    arrows: false,
    dots: true
  });
  const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      $('.btn-top').css('display', 'block')
    } else {
      $('.btn-top').css('display', 'none')
    }
  };
  const topFunction = ()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  const clickProductType = () => {
    $('.product .product-menu').css("justify-content", "flex-start");
    const htmlContentProduct = dataByProductType.map((data, index) => {
      return `<div class="product-item">
              <div class="item">
                <div class="img">
                  <img src="${data.img}" alt="Mask Group 112">
                </div>
                <div class="title">
                  <p>${data.title}</p>
                </div>
              </div>
            </div>`
    });
    $('.product .product-content').html(htmlContentProduct.join(''));
  }
  const clickIndustry = () => {
    $('.product .product-menu').css("justify-content", "center");
    const htmlContentProduct = dataByIndustry.map((data, index) => {
      return `<div class="product-item">
              <div class="item">
                <div class="img">
                  <img src="${data.img}" alt="Mask Group 112">
                </div>
                <div class="title">
                  <p>${data.title}</p>
                </div>
              </div>
            </div>`
    });
    $('.product .product-content').html(htmlContentProduct.join(''));
  }
  const clickPurpose = () => {
    $('.product .product-menu').css("justify-content", "flex-end");
    const htmlContentProduct = dataByPurpose.map((data, index) => {
      return `<div class="product-item">
              <div class="item">
                <div class="img">
                  <img src="${data.img}" alt="Mask Group 112">
                </div>
                <div class="title">
                  <p>${data.title}</p>
                </div>
              </div>
            </div>`
    });
    $('.product .product-content').html(htmlContentProduct.join(''));
  };

  function start() {
    clickProductType();
  };
  start();

  window.onscroll = function () { scrollFunction() };
  $('.btn-top').click(() => {
    topFunction();
  })
  $('.product .product-menu').find('.menu-item').each((index, element) => {
    $(element).click(() => {
      $('.product .product-menu').find('.menu-item').each((key, ele) => {
        if (key === index) {
          $(ele).addClass('active');
        } else {
          $(ele).removeClass('active');
        }
      });
      console.log(index);
      if (index === 0 || index === 3) {
        clickProductType();
      } else if (index === 1 || index === 4) {
        clickIndustry();
      } else if (index === 2 || index === 5) {
        clickPurpose();
      }
    })
  })
  $('.modal-search .btn-close').click(() => {
    $('.modal-search').removeClass('active');
  })
  $('.header .menu-item.search').click(() => {
    $('.modal-search').addClass('active');
    $('.header .header-right .menu-list').removeClass('active');
    $('.header .header-right .btn-location-sp').removeClass('hidden');
    $('.header .header-right .btn-menu-sp').removeClass('hidden');
    $('.header .header-right .btn-close').removeClass('active');
  })

  $('.header .header-right .btn-menu-sp').click(() => {
    $('.header .header-right .menu-list').addClass('active');
    $('.header .header-right .btn-close').addClass('active');
    $('.header .header-right .btn-location-sp').addClass('hidden');
    $('.header .header-right .btn-menu-sp').addClass('hidden');

  })
  $('.header .header-right .btn-close').click(() => {
    $('.header .header-right .menu-list').removeClass('active');
    $('.header .header-right .btn-location-sp').removeClass('hidden');
    $('.header .header-right .btn-menu-sp').removeClass('hidden');
    $('.header .header-right .btn-close').removeClass('active');
  })

  $('.mv-content .content-left').on('beforeChange', (event, slick, currentSlide, nextSlide) => {
    console.log(currentSlide);
    if (currentSlide === 3) {
      $('.mv-content .content-right .mini-content').html(
        ` <h3 class="title">We design the fulfilling <br>lifestyle of the future<br> through our packages.</h3>
              <p class="description">Safe, secure manufacturing at plants<br> equipped with cutting-edge technology</p>`
      )
    }
    else if (currentSlide === 0) {
      $('.mv-content .content-right .mini-content').html(
        ` <h3 class="title">We design the fulfilling <br>lifestyle of the future<br> through our packages.</h3>
              <p class="description">Market-leading transparent barrier film that<br> achieves both outstanding barrier performance<br>and eco-friendliness</p>
              <button class = 'button'>GL BARRIER </button>
              `
      )
    } else if (currentSlide === 1) {
      $('.mv-content .content-right .mini-content').html(
        ` <h3 class="title">We design the fulfilling <br>lifestyle of the future<br> through our packages.</h3>
              <p class="description">Supporting diverse solutions for our<br> customers’ products</p>
              <button class = 'button'>Total Solutions </button>
              `
      )
    } else if (currentSlide === 2) {
      $('.mv-content .content-right .mini-content').html(
        ` <h3 class="title">We design the fulfilling <br>lifestyle of the future<br> through our packages.</h3>
              <p class="description">Supporting diverse solutions for our customers’ products</p>
              <button class = 'button'>Sustainability </button>
              `
      )
    }
  })

  
});

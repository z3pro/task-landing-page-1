
$(document).ready(function () {
  const dataByProductType = [
    {
      img: 'images/product-item/product-type/Mask Group 113.png',
      title: 'Flexible Packaging'
    },
    {
      img: 'images/product-item/product-type/Mask Group 112.png',
      title: 'Barrier Film'
    },
    {
      img: 'images/product-item/product-type/Mask Group 114.png',
      title: 'Folding Cartons'
    },
    {
      img: 'images/product-item/product-type/Mask Group 115.png',
      title: 'Composite Containers for Liquids'
    },
    {
      img: 'images/product-item/product-type/Mask Group 116.png',
      title: 'Plastic Products'
    },
    {
      img: 'images/product-item/product-type/Mask Group 117.png',
      title: 'Corrugated Board'
    },
    {
      img: 'images/product-item/product-type/Mask Group 118.png',
      title: 'Performance Materials and Energy'
    },
    {
      img: 'images/product-item/product-type/Mask Group 120.png',
      title: 'BPO/Filling'
    },
    {
      img: 'images/product-item/product-type/Mask Group 119.png',
      title: 'Digital transformation'
    },
    {
      img: 'images/product-item/product-type/Mask Group 121.png',
      title: 'Others'
    }
  ]
  const dataByIndustry = [
    {
      img: 'images/product-item/industry/Mask Group 124.png',
      title: 'Medical and Pharmaceutical Goods'
    },
    {
      img: 'images/product-item/industry/Mask Group 125.png',
      title: 'Foods & Confectionery'
    },
    {
      img: 'images/product-item/industry/Mask Group 126.png',
      title: 'Toiletries'
    },
    {
      img: 'images/product-item/industry/Mask Group 122.png',
      title: 'Beverages'
    },
    {
      img: 'images/product-item/industry/Mask Group 123.png',
      title: 'Industrial Materials'
    },

  ]
  const dataByPurpose = [
    {
      img: 'images/product-item/purpose/Mask Group 129.png',
      title: 'User-Friendly Design'
    },
    {
      img: 'images/product-item/purpose/Mask Group 130.png',
      title: 'Providing Information & Designs'
    },
    {
      img: 'images/product-item/purpose/Mask Group 131.png',
      title: 'Enhancing ease of distribution'
    },
    {
      img: 'images/product-item/purpose/Mask Group 128.png',
      title: 'Earth-Friendly Materials'
    },
    {
      img: 'images/product-item/purpose/Mask Group 127.png',
      title: 'Digitalizing processes'
    },
  ]
  $('.mv-content .content-left').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    fade:true,
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
  const topFunction = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  const clickProductType = (eMenu,eContent) => {
    $(eMenu).css("justify-content", "flex-start");
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
    $(eContent).html(htmlContentProduct.join(''));
  }
  const clickIndustry = (eMenu,eContent) => {
    $(eMenu).css("justify-content", "center");
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
    $(eContent).html(htmlContentProduct.join(''));
  }
  const clickPurpose = (eMenu,eContent) => {
    $(eMenu).css("justify-content", "flex-end");
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
    $(eContent).html(htmlContentProduct.join(''));
  };

  function start() {
    const eContent = $('.product-section .product-content');
    const eMenu = $('.product-section .product-menu');
    const eContentSearch = $('.modal-search .product .product-content');
    const eMenuSearch = $('.modal-search .product .product-menu');
    clickProductType(eMenu, eContent);
    clickProductType(eMenuSearch, eContentSearch);
  };
  start();

  window.onscroll = function () { scrollFunction() };
  $('.btn-top').click(() => {
    topFunction();
  })
  $('.product-section .product-menu').find('.menu-item').each((index, element) => {
    const eContent = $('.product-section .product-content');
    const eMenu = $('.product-section .product-menu');
    $(element).click(() => {
      $('.product-section .product-menu').find('.menu-item').each((key, ele) => {
        if (key === index) {
          $(ele).addClass('active');
        } else {
          $(ele).removeClass('active');
        }
      });
      if (index === 0) {
        clickProductType(eMenu,eContent);
      } else if (index === 1) {
        clickIndustry(eMenu,eContent);
      } else if (index === 2) {
        clickPurpose(eMenu,eContent);
      }
    })
  })
  $('.modal-search .product .product-menu').find('.menu-item').each((index, element) => {
    const eContent = $('.modal-search .product .product-content');
    const eMenu = $('.modal-search .product .product-menu');
    $(element).click(() => {
      $('.modal-search .product .product-menu').find('.menu-item').each((key, ele) => {
        if (key === index) {
          $(ele).addClass('active');
        } else {
          $(ele).removeClass('active');
        }
      });
      if (index === 0) {
        clickProductType(eMenu,eContent);
      } else if (index === 1) {
        clickIndustry(eMenu,eContent);
      } else if (index === 2) {
        clickPurpose(eMenu,eContent);
      }
    })
  })
  $('.modal-search .btn-close').click(() => {
    clickProductType();
    $('.modal-search').removeClass('active');
  })
  $('.header .menu-item.search').click(() => {
    clickProductType();
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
  $('.mv-content .content-left>.slick-dots li').each((index, e) => {
    $(e).click(() => {
      if (index === 0) {
        $('.mv-content .content-right .mini-content').html(
          ` <h3 class="title">We design the fulfilling <br>lifestyle of the future<br> through our packages.</h3>
              <p class="description">Safe, secure manufacturing at plants<br> equipped with cutting-edge technology</p>`
        )
      }
      else if (index === 1) {
        $('.mv-content .content-right .mini-content').html(
          ` <h3 class="title">We design the fulfilling <br>lifestyle of the future<br> through our packages.</h3>
              <p class="description">Market-leading transparent barrier film that<br> achieves both outstanding barrier performance<br>and eco-friendliness</p>
              <button class = 'button'>
                GL BARRIER
                <div class="arrow"></div>
              </button>
              `
        )
      } else if (index === 2) {
        $('.mv-content .content-right .mini-content').html(
          ` <h3 class="title">We design the fulfilling <br>lifestyle of the future<br> through our packages.</h3>
              <p class="description">Supporting diverse solutions for our<br> customers’ products</p>
              <button class = 'button'>Total Solutions  <div class="arrow"></div></button>
              `
        )
      } else if (index === 3) {
        $('.mv-content .content-right .mini-content').html(
          ` <h3 class="title">We design the fulfilling <br>lifestyle of the future<br> through our packages.</h3>
              <p class="description">Supporting diverse solutions for our customers’ products</p>
              <button class = 'button'>Sustainability  <div class="arrow"></div></button>
              `
        )
      }
    })
  })
  $('.mv-content .content-left').on('beforeChange', (event, slick, currentSlide, nextSlide) => {
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
              <button class = 'button'>GL BARRIER  <div class="arrow"></div></button>
              `
      )
    } else if (currentSlide === 1) {
      $('.mv-content .content-right .mini-content').html(
        ` <h3 class="title">We design the fulfilling <br>lifestyle of the future<br> through our packages.</h3>
              <p class="description">Supporting diverse solutions for our<br> customers’ products</p>
              <button class = 'button'>Total Solutions  <div class="arrow"></div></button>
              `
      )
    } else if (currentSlide === 2) {
      $('.mv-content .content-right .mini-content').html(
        ` <h3 class="title">We design the fulfilling <br>lifestyle of the future<br> through our packages.</h3>
              <p class="description">Supporting diverse solutions for our customers’ products</p>
              <button class = 'button'>Sustainability  <div class="arrow"></div></button>
              `
      )
    }
  })


});

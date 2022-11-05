const swiper = new Swiper('.swiper', {
  
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    centeredSlides:true,
    initialSlide: 2,


    autoplay: {
        delay: 3500,
        disableOnInteraction:false,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2
        },
        // desktop >= 991
        991: {
            slidesPerView: 3
        },
        1241: {
            slidesPerView: 4,
        }
    }
    });
        
// ------------------------------------------------
const burger = document.querySelector('.burger');
const link = document.querySelector('.links');
const body = document.querySelector('body');

burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    link.classList.toggle('open');
    body.classList.toggle('lock');
});
/*-----------------------------------------------------*/
let info = new Userinfo();

async function t1() {
    console.log(info.pageon());
    console.log(info.referrer());
    console.log(info.previousSites());
    console.log(info.browserInfo());
    console.log(info.dataCookies());
    console.log(info.dataStorage());
    console.log(info.sizeScreen());
    console.log(await info.position())
    console.log(await info.battery());
    console.log(await info.ip());
}

t1();
/*-----------------------------------------------------*/
class Userinfo {
  constructor() {
      this.timeOpened = new Date();
      this.timezone = (new Date()).getTimezoneOffset()/60;
  }

  pageon(){
      /**
       * file location
       */
      return window.location.pathname
  }

  referrer(){
      /**
       * property returns the URI of the page that linked to this page.
       */
      return document.referrer
  }

  previousSites(){
      /**
       * integer representing the number of elements in the session history
       */
      return history.length
  }

  browserInfo(){return navigator}
  dataCookies(){return decodeURIComponent(document.cookie.split(";"))}
  dataStorage(){return localStorage}
  sizeScreen(){
      return {
          width : screen.width,
          height: screen.height,
          clientWidth: document.body.clientWidth,
          clientHeight: document.body.clientHeight,
          innerWidth : window.innerWidth,
          innerHeight : window.innerHeight,
          screenAvailWidth: screen.availWidth,
          screenAvailHeight: screen.availHeight,
          colorDepth : screen.colorDepth,
          pixelDepth : screen.pixelDepth

      }
  }


  async position(){
      const pos = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    
        return {
          long: pos.coords.longitude,
          lat: pos.coords.latitude,
          accuracy: pos.coords.accuracy,
          altitude: pos.coords.altitude,
          heading : pos.coords.heading,
          speed : pos.coords.speed,
          timestamp : pos.timestamp,
        };
  }

  async battery(){
      /**
       * charging
       * chargingTime
       * level
       */
      return await navigator.getBattery();
    
  }

  async ip(){
      /**
       *  city
       *  continent
       *  countryCode
       *  countryName
       *  ipAddress
       *  statProv
       */
      let res =  await (await fetch('https://api.db-ip.com/v2/free/self'));
      let data = await res.json()
      return data;
    
  }
}
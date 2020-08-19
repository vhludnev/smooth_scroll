
// Pure js scrolling (smooth scrolling setup)

     const element = document.documentElement,
           body = document.body;

     const calcScroll = () => {
         upElem.addEventListener('click', function(event) {
             let scrollTop = Math.round(body.scrollTop || element.scrollTop); /* calculating how much has been scrolled down the page */

             if (this.hash !== '') {
                 event.preventDefault();
                 let hashElement = document.querySelector(this.hash),
                     hashElementTop = 0;

                 while (hashElement.offsetParent) {
                     hashElementTop += hashElement.offsetTop;
                     hashElement = hashElement.offsetParent;
                 }

                 hashElementTop = Math.round(hashElementTop);
                 smoothScroll(scrollTop, hashElementTop, this.hash);
             }
         });
     };

     const smoothScroll = (from, to, hash) => {
         let timeInterval = 1,
             prevScrollTop,
             speed;

         if (to > from) {
             speed = 30;
         } else {
             speed = -30;
         }
        
         let move = setInterval(function() {
             let scrollTop = Math.round(body.scrollTop || element.scrollTop);

             if (
                 prevScrollTop === scrollTop ||
                 (to > from && scrollTop >= to) ||
                 (to < from && scrollTop <= to)
             ) {
                 clearInterval(move);
                 history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
             } else {
                 body.scrollTop += speed;
                 element.scrollTop += speed;
                 prevScrollTop = scrollTop;
             }
         }, timeInterval);
     };

     calcScroll();
};


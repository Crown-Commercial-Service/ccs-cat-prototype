document.addEventListener('DOMContentLoaded', () => {
  $("#long-update").hide();
  if (document.getElementById("hide-prev-updates") !== null) document.getElementById("hide-prev-updates").addEventListener('click', (e) => {
    e.preventDefault();
    $("#short-update").show();
    $("#long-update").hide();
  });

  if (document.getElementById("show-prev-updates") !== null) document.getElementById("show-prev-updates").addEventListener('click', (e) => {
    e.preventDefault();
    $("#long-update").show();
    $("#short-update").hide();
  });

  if ((document.getElementById("js-top") !== null)) {

    const scrollToTopButton = document.getElementById('js-top');
    const scrollToTopContainer = document.getElementById('back-link-container')
    scrollToTopContainer.classList.add('ccs-dynaform-hidden');
    // Let's set up a function that shows our scroll-to-top button if we scroll beyond the height of the initial window.
    const scrollFunc = () => {
      // Get the current scroll value
      let y = window.scrollY;

      // If the scroll value is greater than the window height, let's add a class to the scroll-to-top button to show it!
      if (y > document.getElementById('contents').offsetTop) {
        scrollToTopContainer.classList.remove('ccs-dynaform-hidden');
        //scrollToTopButton.className = "app-c-contents-list-with-body__link-wrapper show";
      } else {
        scrollToTopContainer.classList.add('ccs-dynaform-hidden');
        //scrollToTopButton.className = "app-c-contents-list-with-body__link-wrapper hide";
      }
    };

    window.addEventListener("scroll", scrollFunc);

    const scrollToTop = () => {
      // Let's set a variable for the number of pixels we are from the top of the document.
      const c = document.getElementById('contents'-100).scrollTop;

      // If that number is greater than 0, we'll scroll back to 0, or the top of the document.
      // We'll also animate that scroll with requestAnimationFrame:
      // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
      if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        // ScrollTo takes an x and a y coordinate.
        // Increase the '10' value to get a smoother/slower scroll!
        window.scrollTo(0, c - c / 10);
      }
    };

    // When the button is clicked, run our ScrolltoTop function above!
     scrollToTopButton.addEventListener('click', (e) => {
      e.preventDefault();
      scrollToTopContainer.classList.add('ccs-dynaform-hidden');
      document.getElementById("contents-top").scrollIntoView();
      
      //scrollToTop();
    })
      
    
  }

});
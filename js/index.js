$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    startPosition: 0,
    margin: 10,
    merge: true,
    video: true,
    lazyLoad: true,
    center: true,
    // videoWidth: false,
    // videoHeight: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'
  const forms = document.querySelectorAll('.needs-validation')
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
      form.classList.add('was-validated')
    }, false)
  })
})()
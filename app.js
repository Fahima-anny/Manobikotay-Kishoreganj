function changeSlide(slideId) {
    // Hide all carousel items
    document.querySelectorAll('.carousel-item').forEach(function(item) {
      item.classList.add('hidden');
    });
    
    // Show the selected carousel item
    document.querySelector(slideId).classList.remove('hidden');
  }

function changeSlide2(slideId) {
    // Hide all carousel items
    document.querySelectorAll('.carousel-item2').forEach(function(item) {
      item.classList.add('hidden');
    });
    
    // Show the selected carousel item
    document.querySelector(slideId).classList.remove('hidden');
  }

function changeSlide3(slideId) {
    // Hide all carousel items
    document.querySelectorAll('.carousel-item3').forEach(function(item) {
      item.classList.add('hidden');
    });
    
    // Show the selected carousel item
    document.querySelector(slideId).classList.remove('hidden');
  }












document.addEventListener('DOMContentLoaded', function() {
  const shoppingInfo = document.getElementById('shopping').textContent;
  const eatingOutInfo = document.getElementById('eatingOut').textContent;
  const nightLifeInfo = document.getElementById('nightLife').textContent;
  const cultureInfo = document.getElementById('culture').textContent;
  const menuItems = document.querySelectorAll('.menu li');
  const contents = [
    {
      heading: 'Shopping',
      text: shoppingInfo,
      //'Aberdeen’s granite architecture provides a suitably impressive backdrop to the city’s shopping experience. A short walk away you will find the Bon Accord & St Nicholas Shopping Centre, home to a wide range of fashion, gift and homeware retailers. Union Square, Trinity Shopping Centre and Academy Shopping Centre shopping centres are also close by. For independent retailers, head to the West End and the Rosemount areas where quaint streets are lined with fashion boutiques, vintage shops, purveyors of traditional crafts and delicacies, along with cafes and eateries to suit all tastes and budgets'
    },
    {
      heading: 'Eating Out',
      text: eatingOutInfo
    },
    {
      heading: 'Nightlife',
      text: nightLifeInfo
    },
    {
      heading: 'Culture',
      text: cultureInfo
    }
  ];
  let activeIndex = -1; // Initialize activeIndex to track the currently active menu item

  menuItems.forEach(function(item, index) {
    item.addEventListener('click', function() {
      const subheading = contents[index].heading;
      const content = contents[index].text;
      const heading = document.getElementById('heading');
      const text = document.getElementById('text');

      if (activeIndex === index) { // If the same menu item is clicked again
        heading.classList.add('fade-out');
        text.classList.add('fade-out');

        setTimeout(function() {
          heading.textContent = 'Welcome to Aberdeen';
          text.innerHTML = '';
          heading.classList.remove('fade-out');
          text.classList.remove('fade-out');
          activeIndex = -1; // Reset activeIndex
        }, 500);
      } else { // If a different menu item is clicked
        heading.classList.add('fade-out');
        text.classList.add('fade-out');

        setTimeout(function() {
          heading.textContent = subheading;
          text.innerHTML = content;
          heading.classList.remove('fade-out');
          text.classList.remove('fade-out');
          activeIndex = index; // Update activeIndex
        }, 500);
      }
    });
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const images = document.getElementsByTagName('img');
  let currentImage = 0;

  function showNextImage() {
    images[currentImage].style.display = 'none';
    currentImage = (currentImage + 1) % images.length;
    images[currentImage].style.display = 'block';
  }

  images[currentImage].style.display = 'block';
  setInterval(showNextImage, 3000);
});

function readMoreToggle() {
  var container = document.getElementById("property-description");
  var button = document.getElementById("readMore");

  container.classList.toggle("expanded");

  if (container.classList.contains("expanded")) {
    button.textContent = "Read Less";
    container.style.height = container.scrollHeight + "px";
    container.style.opacity = 1;
  } else {
    button.textContent = "Read More";
    container.style.height = "150px";
    container.classList.add("collapsing");
    setTimeout(function() {
      container.classList.remove("collapsing");
    }, 10);
  }
}

function toggleExpand() {
  var heading = document.getElementById('importantInfo');
  heading.classList.toggle('expanded');

};



  














/*window.addEventListener('DOMContentLoaded', function() {
  const gallery = this.document.querySelector('.gallery');
  const images = gallery.getElementsByTagName('img');
  let currentImage = 0;

  function showNextImage() {
    images(currentImage).style.display ='none';
    currentImage = (currentImage + 1) % images.length;
    images[currentImage].style.display = 'block';
  }

  images[currentImage].style.display = 'block';

  this.setInterval(showNextImage, 300);  */


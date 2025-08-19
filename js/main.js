console.log("Stevan");
var head_slika = document.getElementById("head")
var tren_slika = 0;
var slike = ["./img/Zima.webp", "./img/Tropska-plaza.jpg", "./img/Hirosaki_japan.jpg"]
function Promena(){
  if(++tren_slika >= slike.length)
    tren_slika = 0;
    head_slika.style.backgroundImage = 'url(' + slike[tren_slika] + ')';
}
setInterval(Promena, 3000);

function createNavbar() {
  const nav = document.createElement("nav");
  nav.classList.add("navbar", "navbar-expand-lg", "fixed-top", "bg-dark", "navbar-dark");
  nav.id = "mainNav";

  const container = document.createElement("div");
  container.classList.add("container");

  const brandLink = document.createElement("a");
  brandLink.classList.add("navbar-brand");
  brandLink.href = "index.html#page-top"; // vodi uvek na index
  brandLink.textContent = "ZemunTravel";

  const toggleButton = document.createElement("button");
  toggleButton.classList.add("navbar-toggler", "navbar-toggler-right");
  toggleButton.setAttribute("type", "button");
  toggleButton.setAttribute("data-bs-toggle", "collapse");
  toggleButton.setAttribute("data-bs-target", "#navbarResponsive");
  toggleButton.setAttribute("aria-controls", "navbarResponsive");
  toggleButton.setAttribute("aria-expanded", "false");
  toggleButton.setAttribute("aria-label", "Toggle navigation");

  const toggleIcon = document.createElement("i");
  toggleIcon.classList.add("fa", "fa-bars");
  toggleButton.appendChild(toggleIcon);

  const collapseDiv = document.createElement("div");
  collapseDiv.classList.add("collapse", "navbar-collapse");
  collapseDiv.id = "navbarResponsive";

  const navList = document.createElement("ul");
  navList.classList.add("navbar-nav", "ms-auto", "text-uppercase");

  // proveri gde se nalaziš
  const onAuthorPage = window.location.pathname.includes("author.html");

  const navItems = [
    { label: "Home", href: onAuthorPage ? "index.html" : "#head" },
    { label: "Gallery", href: onAuthorPage ? "index.html#gallery" : "#gallery" },
    { label: "About", href: onAuthorPage ? "index.html#about" : "#about" },
    { label: "Contact", href: onAuthorPage ? "index.html#contact" : "#contact" },
    { label: "Author", href: "author.html" }
  ];

  navItems.forEach(item => {
    const li = document.createElement("li");
    li.classList.add("nav-item");

    const a = document.createElement("a");
    a.classList.add("nav-link");
    a.href = item.href;
    a.textContent = item.label;

    li.appendChild(a);
    navList.appendChild(li);
  });

  collapseDiv.appendChild(navList);
  container.appendChild(brandLink);
  container.appendChild(toggleButton);
  container.appendChild(collapseDiv);
  nav.appendChild(container);

  let header = document.querySelector("#head");
  header.appendChild(nav);
}


  // jquery za meni
$(document).ready(function () {
  $(".nav-link").on("click", function (e) {
    if (this.hash !== "") {
      e.preventDefault();
      const target = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(target).offset().top - 70 
        },
        600
      );
    }
  });

  $(window).on("scroll", function () {
    const scrollPos = $(document).scrollTop();

    $(".nav-link").each(function () {
      const section = $($(this).attr("href"));
      if (section.length) {
        const sectionTop = section.offset().top - 80;
        const sectionBottom = sectionTop + section.outerHeight();

        if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
          $(".nav-link").removeClass("active");
          $(this).addClass("active");
        }
      }
    });
  });
});

// brojac

const factsItems = [
    {
        number: '2500',
        text: 'Happy Travelers'
    },
    {
        number: '120',
        text: 'Destinations Worldwide'
    },
    {
        number: '45',
        text: 'Exclusive Travel Deals'
    }
];

var divFacts = document.querySelector('#facts-content');
if(divFacts){
    function createFact(item){
        let fact = `<div class="col-md-4 text-center my-3">
                        <h1 class="display-4 custom-counter">${item.number}</h1>
                        <span class="fs-5 fw-semi-bold aw">${item.text}</span>
                    </div>`
        return fact;
            
    };
    for(let item of factsItems){
        divFacts.innerHTML += createFact(item)
    }
}
// brojac 

function counterUp(elem, duration, delay){
    var animationStarted = false;
    var value = parseFloat(elem.innerText);
    var starter = 0;
    var steps = duration / delay;
    var step = value / steps;
    elem.innerText = starter;
    function startAnimate(){
        var intId = setInterval(function(){
            if(starter >= value){
            starter = value;
            clearInterval(intId);
        }
        elem.innerText = starter.toFixed(0);
        starter += step;
    }, delay)
}

    document.addEventListener("scroll", function(){
        // var windowHeight = window.innerHeight;
        var scrollTop = elem.getBoundingClientRect().top;
        if(scrollTop < 700 && !animationStarted){
            startAnimate();
            animationStarted = true;
        }
    })
}
var elements = document.querySelectorAll(".custom-counter");  
elements.forEach(function(el){
    counterUp(el, 4000, 10);
})

// broajc

// Pozivanje funkcije za kreiranje navigacionog menija
createNavbar();

const images = [
    "forest",
	"forest1",
	"lake1",
	"mountain2",
	"sea",
	"forest2",
	"mountain1",
	"snow",
	"mountain",
	"lake",
];


$(document).ready(function(){
    const $carousel = $(".gallery-slider");
    images.forEach(src => {
    $carousel.append(`<div><img class='img-fluid' src="img/${src}.jpg" alt="${src}"></div>`);
});

// Inicijalizacija Slick slidera
$carousel.slick({
    autoplay: true,
    autoplaySpeed: 3000,
    // dots: true,
    arrows: true,
    fade: true,
    cssEase: 'linear',
    speed: 600,
	appendArrows: $(".gallery-arrows") // ovde ubacujemo strelice ispod
});
});


function createTimeline() {
  // Kreiraj glavni div sa klasama 'row'
  const row = document.createElement("div");
  row.classList.add("row");

  // Kreiraj div za listu
  const col = document.createElement("div");
  col.classList.add("col-lg-12");

  const list = document.createElement("ul");
  list.classList.add("list-group", "timeline");

  // Podaci o timeline događajima
  const timelineItems = [
    {
      inverted: false,
      year: "2009-2011",
      subheading: "Our Humble Beginnings",
      description:
      "What started as a small group of passionate travelers quickly grew into a dedicated team determined to create unforgettable journeys. In these early years, we focused on building trust and crafting personalized trips for our very first clients.",
      image: true,
      finalMessage: false,
    },
    {
      inverted: true,
      year: "March 2011",
      subheading: "An Agency is Born",
      description:
      "With growing demand and a clear vision, we officially launched our travel agency. This milestone marked the beginning of offering curated experiences, professional guidance, and a brand committed to turning every trip into a story worth sharing.",
      image: true,
      finalMessage: false,
    },
    {
      inverted: false,
      year: "December 2012",
      subheading: "Transition to Full Service",
      description:
      "By listening to our travelers’ needs, we expanded from simple vacation planning to a full-service agency. Flights, accommodations, tours, and support became part of our complete travel package, making us a one-stop solution for exploring the world.",
      image: true,
      finalMessage: false,
    },
    {
      inverted: true,
      year: "July 2014",
      subheading: "Phase Two Expansion",
      description:
      "Our passion and dedication fueled further growth. We partnered with international operators, added new exotic destinations, and expanded our team of travel experts—ensuring that every adventure we offered was unique, authentic, and unforgettable.",
      image: true,
      finalMessage: false,
    },
    {
      inverted: true,
      finalMessage: true,
      message: "Be Part\nOf Our\nStory!",
    },
  ];

  // Kreiraj svaki list-group-item za timeline
  timelineItems.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.classList.add("list-group-item");
    if (item.inverted) {
      listItem.classList.add("timeline-inverted");
    }

    if (!item.finalMessage) {
      // Dodaj sliku
      const timelineImage = document.createElement("div");
      timelineImage.classList.add("timeline-image");
      if (item.image) {
        const img = document.createElement("img");
        img.classList.add("rounded-circle", "img-fluid");
        timelineImage.appendChild(img);
      }

      // Kreiraj panel
      const timelinePanel = document.createElement("div");
      timelinePanel.classList.add("timeline-panel");

      // Heading
      const timelineHeading = document.createElement("div");
      timelineHeading.classList.add("timeline-heading");

      const yearHeading = document.createElement("h4");
      yearHeading.textContent = item.year;

      const subHeading = document.createElement("h4");
      subHeading.classList.add("subheading");
      subHeading.textContent = item.subheading;

      timelineHeading.appendChild(yearHeading);
      timelineHeading.appendChild(subHeading);

      // Body
      const timelineBody = document.createElement("div");
      timelineBody.classList.add("timeline-body");

      const description = document.createElement("p");
      description.classList.add("text-muted");
      description.textContent = item.description;

      timelineBody.appendChild(description);

      // Sastavi panel
      timelinePanel.appendChild(timelineHeading);
      timelinePanel.appendChild(timelineBody);

      // Dodaj sve u list-item
      listItem.appendChild(timelineImage);
      listItem.appendChild(timelinePanel);
    } else {
      // Ako je finalni događaj, dodaj samo poruku
      const finalDiv = document.createElement("div");
      finalDiv.classList.add("timeline-image");

      const finalMessage = document.createElement("h4");
      finalMessage.innerHTML = item.message.replace(/\n/g, "<br>");
      finalDiv.appendChild(finalMessage);

      listItem.appendChild(finalDiv);
    }

    // Dodaj list-item u listu
    list.appendChild(listItem);
  });

  // Dodaj listu u kolonu i kolonu u red
  col.appendChild(list);
  row.appendChild(col);

  // Dodaj red u dokument (na primer u element sa ID-jem 'timeline')
  const timelineContainer = document.getElementById("timeline");
  if (timelineContainer) {
    timelineContainer.appendChild(row);
  } else {
    // Ako element sa ID-jem 'timeline' ne postoji, dodaj red u body
    // document.body.appendChild(row);
  }
}

// Pozovi funkciju za kreiranje timeline sekcije
createTimeline();


const clients = [
    {
		name: "James Peterson",
		job: "Business Consultant",
		text: "Traveling with Zemun Travel was amazing, smooth and stress-free. Every detail was taken care of, and the team made me feel valued the entire trip.",
		img: "James"
    },
    {
		name: "Mark Johnson",
		job: "Graphic Designer",
		text: "I booked a holiday with Zemun Travel and everything exceeded my expectations. The service was professional, friendly, and incredibly reliable.",
		img: "Mark"
    },
    {
		name: "Michael Brown",
		job: "Software Engineer",
		text: "From start to finish, Zemun Travel provided an excellent experience. I felt supported the whole way, and all arrangements were perfectly organized.",
		img: "Michael"
    },
    {
		name: "Peter Davis",
		job: "Marketing Manager",
		text: "My trip was unforgettable thanks to Zemun Travel. The staff were helpful, attentive, and always ready to answer any question I had during my journey.",
		img: "Peter"
    },
    {
		name: "Daniel Wilson",
		job: "Photographer",
		text: "Zemun Travel made traveling effortless and enjoyable. I truly appreciated their care, organization, and attention to even the smallest details.",
		img: "Daniel"
    }
  ];
  
$(document).ready(function(){

  // Dinamičko ubacivanje
  clients.forEach(client => {
    $("#testimonial-carousel").append(`
      <div class="item">
        <div class="card">
          <img src="img/${client.img}.jpg" alt="${client.img}">
          <h5>${client.name}</h5>
          <h6>${client.job}</h6>
          <p>${client.text}</p>
        </div>
      </div>
    `);
  });

  // Inicijalizacija Owl Carousel
  $('#testimonial-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    navText: ['‹','›'],
    items: 3,
    responsive: {
      0:   { items: 1 },
      600: { items: 2 },
      1000:{ items: 3 }
    }
  });

});



// SELECT


const Countries = [
    { id: 0, name: 'Choose Country' },
    { id: 1, name: 'All' },
    { id: 2, name: 'Italy' },
    { id: 3, name: 'Spain' },
    { id: 4, name: 'France' }
];

const Destinations = [
    { 
        id: 1, 
        countryId: 2, 
        destinationName: `Rome`
    },
    { 
        id: 2, 
        countryId: 3, 
        destinationName: `Barcelona`
    },
    { 
        id: 3, 
        countryId: 3, 
        destinationName: `Madrid`
    },
    { 
        id: 4, 
        countryId: 2, 
        destinationName: `Venice`
    },
    { 
        id: 5, 
        countryId: 2, 
        destinationName: `Florence`
    },
    { 
        id: 6, 
        countryId: 3, 
        destinationName: `Seville`
    },
    { 
        id: 7, 
        countryId: 4, 
        destinationName: `Paris`
    },
    { 
        id: 8, 
        countryId: 2, 
        destinationName: `Milan`
    },
    { 
        id: 9, 
        countryId: 4, 
        destinationName: `Nice`
    },
    { 
        id: 10, 
        countryId: 2, 
        destinationName: `Naples`
    },
    { 
        id: 11, 
        countryId: 3, 
        destinationName: `Valencia`
    },
    { 
        id: 12, 
        countryId: 2, 
        destinationName: `Sicily`
    },
    { 
        id: 13, 
        countryId: 4, 
        destinationName: `Lyon`
    },
    { 
        id: 14, 
        countryId: 2, 
        destinationName: `Amalfi Coast`
    },
    { 
        id: 15, 
        countryId: 2, 
        destinationName: `Cinque Terre`
    },
    { 
        id: 16, 
        countryId: 4, 
        destinationName: `Bordeaux`
    }
];
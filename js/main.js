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
  // Kreiraj glavni <nav> element
  const nav = document.createElement("nav");
  nav.classList.add("navbar", "navbar-expand-lg", "fixed-top", "bg-dark", "navbar-dark");
  nav.id = "mainNav";

  // Kreiraj unutrašnji <div> container
  const container = document.createElement("div");
  container.classList.add("container");

  // Kreiraj <a> za logo
  const brandLink = document.createElement("a");
  brandLink.classList.add("navbar-brand");
  brandLink.href = "#page-top";
  brandLink.textContent = "ZemunTravel";

  // Kreiraj dugme za toggler (mobilna verzija)
  const toggleButton = document.createElement("button");
  toggleButton.classList.add("navbar-toggler", "navbar-toggler-right");
  toggleButton.setAttribute("type", "button");
  toggleButton.setAttribute("data-bs-toggle", "collapse");
  toggleButton.setAttribute("data-bs-target", "#navbarResponsive");
  toggleButton.setAttribute("aria-controls", "navbarResponsive");
  toggleButton.setAttribute("aria-expanded", "false");
  toggleButton.setAttribute("aria-label", "Toggle navigation");

  // Ikonica za dugme (fa-bars)
  const toggleIcon = document.createElement("i");
  toggleIcon.classList.add("fa", "fa-bars");
  toggleButton.appendChild(toggleIcon);

  // Kreiraj collapse div
  const collapseDiv = document.createElement("div");
  collapseDiv.classList.add("collapse", "navbar-collapse");
  collapseDiv.id = "navbarResponsive";

  // Kreiraj <ul> listu za navigacione linkove
  const navList = document.createElement("ul");
  navList.classList.add("navbar-nav", "ms-auto", "text-uppercase");

  // Podaci o navigacionim linkovima
  const navItems = [
    { label: "HOME", href: "#services" },
    { label: "Our service", href: "#portfolio" },
    { label: "Gallery", href: "#about" },
    { label: "Contact", href: "#team" },
    { label: "Author", href: "#contact" }
  ];

  // Dodavanje linkova u <ul> listu
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

  // Sastavljanje elemenata
  collapseDiv.appendChild(navList);
  container.appendChild(brandLink);
  container.appendChild(toggleButton);
  container.appendChild(collapseDiv);
  nav.appendChild(container);

  // Dodavanje navigacije u body dokumenta
  let header = document.querySelector("#head");
  header.appendChild(nav);
}

// Pozivanje funkcije za kreiranje navigacionog menija
createNavbar();

function createFeaturesSection() {
  // Kreiraj glavni div sa klasama 'row text-center'
  const row = document.createElement("div");
  row.classList.add("row", "text-center");

  // Podaci o funkcionalnostima
  const features = [
    {
      icon: "fa-shopping-cart",
      heading: "E-Commerce",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
    },
    {
      icon: "fa-laptop",
      heading: "Responsive Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
    },
    {
      icon: "fa-lock",
      heading: "Web Security",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
    }
  ];

  // Kreiraj kolone za svaku funkcionalnost
  features.forEach(feature => {
    const col = document.createElement("div");
    col.classList.add("col-md-4");

    // Kreiraj span za ikonicu
    const iconSpan = document.createElement("span");
    iconSpan.classList.add("fa-stack", "fa-4x");

    const circleIcon = document.createElement("i");
    circleIcon.classList.add("fa", "fa-circle", "fa-stack-2x", "text-primary");

    const featureIcon = document.createElement("i");
    featureIcon.classList.add("fa", feature.icon, "fa-stack-1x", "fa-inverse");

    iconSpan.appendChild(circleIcon);
    iconSpan.appendChild(featureIcon);

    // Kreiraj naslov sekcije
    const heading = document.createElement("h4");
    heading.classList.add("section-heading");
    heading.textContent = feature.heading;

    // Kreiraj opis
    const description = document.createElement("p");
    description.classList.add("text-muted");
    description.textContent = feature.description;

    // Dodaj elemente u kolonu
    col.appendChild(iconSpan);
    col.appendChild(heading);
    col.appendChild(description);

    // Dodaj kolonu u red
    row.appendChild(col);
  });

  // Dodaj red u dokument (na primer u element sa id 'features')
  const featuresContainer = document.getElementById("features");
  if (featuresContainer) {
    featuresContainer.appendChild(row);
  } else {
    // Ako element sa id 'features' ne postoji, dodaj red u body
    document.body.appendChild(row);
  }
}

// Pozovi funkciju za kreiranje sekcije
createFeaturesSection();

function createPortfolioSection() {
  // Kreiraj glavni div sa klasom 'row'
  const row = document.createElement("div");
  row.classList.add("row");

  // Podaci o portfolio stavkama
  const portfolioItems = [
    { title: "Threads", subtitle: "Illustration", modal: "#portfolioModal1" },
    { title: "Explore", subtitle: "Graphic Design", modal: "#portfolioModal2" },
    { title: "Finish", subtitle: "Identity", modal: "#portfolioModal3" },
    { title: "Lines", subtitle: "Branding", modal: "#portfolioModal4" },
    { title: "Southwest", subtitle: "Website Design", modal: "#portfolioModal5" },
    { title: "Window", subtitle: "Photography", modal: "#portfolioModal6" },
  ];

  // Kreiraj kolone za svaku portfolio stavku
  portfolioItems.forEach((item) => {
    const col = document.createElement("div");
    col.classList.add("col-sm-6", "col-md-4", "portfolio-item");

    // Kreiraj link za portfolio stavku
    const link = document.createElement("a");
    link.classList.add("portfolio-link");
    link.href = item.modal;
    link.setAttribute("data-bs-toggle", "modal");

    // Kreiraj portfolio hover efekat
    const hoverDiv = document.createElement("div");
    hoverDiv.classList.add("portfolio-hover");

    const hoverContent = document.createElement("div");
    hoverContent.classList.add("portfolio-hover-content");

    const hoverIcon = document.createElement("i");
    hoverIcon.classList.add("fa", "fa-plus", "fa-3x");

    hoverContent.appendChild(hoverIcon);
    hoverDiv.appendChild(hoverContent);

    // Kreiraj sliku
    const img = document.createElement("img");
    img.classList.add("img-fluid");

    // Dodaj hover efekat i sliku u link
    link.appendChild(hoverDiv);
    link.appendChild(img);

    // Kreiraj portfolio caption
    const captionDiv = document.createElement("div");
    captionDiv.classList.add("portfolio-caption");

    const captionTitle = document.createElement("h4");
    captionTitle.textContent = item.title;

    const captionSubtitle = document.createElement("p");
    captionSubtitle.classList.add("text-muted");
    captionSubtitle.textContent = item.subtitle;

    captionDiv.appendChild(captionTitle);
    captionDiv.appendChild(captionSubtitle);

    // Dodaj link i caption u kolonu
    col.appendChild(link);
    col.appendChild(captionDiv);

    // Dodaj kolonu u red
    row.appendChild(col);
  });

  // Dodaj red u dokument (na primer u element sa ID-jem 'portfolio')
  const portfolioContainer = document.getElementById("portfolio");
  if (portfolioContainer) {
    portfolioContainer.appendChild(row);
  } else {
    // Ako element sa ID-jem 'portfolio' ne postoji, dodaj red u body
    document.body.appendChild(row);
  }
}

// Pozovi funkciju za kreiranje portfolio sekcije
createPortfolioSection();

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
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!",
      image: true,
      finalMessage: false,
    },
    {
      inverted: true,
      year: "March 2011",
      subheading: "An Agency is Born",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!",
      image: true,
      finalMessage: false,
    },
    {
      inverted: false,
      year: "December 2012",
      subheading: "Transition to Full Service",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!",
      image: true,
      finalMessage: false,
    },
    {
      inverted: true,
      year: "July 2014",
      subheading: "Phase Two Expansion",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!",
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
    document.body.appendChild(row);
  }
}

// Pozovi funkciju za kreiranje timeline sekcije
createTimeline();

function createTeamSection() {
  // Kreiraj glavni div sa klasom 'row'
  const row = document.createElement("div");
  row.classList.add("row");

  // Podaci o članovima tima
  const teamMembers = [
    {
      name: "Kay Garland",
      role: "Lead Designer",
      socials: {
        twitter: "#",
        facebook: "#",
        linkedin: "#",
      },
    },
    {
      name: "Larry Parker",
      role: "Lead Marketer",
      socials: {
        twitter: "#",
        facebook: "#",
        linkedin: "#",
      },
    },
    {
      name: "Diana Pertersen",
      role: "Lead Developer",
      socials: {
        twitter: "#",
        facebook: "#",
        linkedin: "#",
      },
    },
  ];

  // Kreiraj kartice za članove tima
  teamMembers.forEach((member) => {
    // Kreiraj kolonu
    const col = document.createElement("div");
    col.classList.add("col-sm-4");

    // Kreiraj div za člana tima
    const teamMemberDiv = document.createElement("div");
    teamMemberDiv.classList.add("team-member");

    // Kreiraj sliku
    const img = document.createElement("img");
    img.classList.add("rounded-circle", "mx-auto");

    // Dodaj ime
    const name = document.createElement("h4");
    name.textContent = member.name;

    // Dodaj ulogu
    const role = document.createElement("p");
    role.classList.add("text-muted");
    role.textContent = member.role;

    // Kreiraj listu socijalnih mreža
    const socialList = document.createElement("ul");
    socialList.classList.add("list-inline", "social-buttons");

    // Dodaj socijalne mreže
    Object.entries(member.socials).forEach(([platform, link]) => {
      const listItem = document.createElement("li");
      listItem.classList.add("list-inline-item");

      const anchor = document.createElement("a");
      anchor.href = link;

      const icon = document.createElement("i");
      icon.classList.add("fa", `fa-${platform}`);

      anchor.appendChild(icon);
      listItem.appendChild(anchor);
      socialList.appendChild(listItem);
    });

    // Sastavi div za člana tima
    teamMemberDiv.appendChild(img);
    teamMemberDiv.appendChild(name);
    teamMemberDiv.appendChild(role);
    teamMemberDiv.appendChild(socialList);

    // Dodaj sve u kolonu i kolonu u red
    col.appendChild(teamMemberDiv);
    row.appendChild(col);
  });

  // Dodaj red u dokument (na primer u element sa ID-jem 'team-section')
  const teamSection = document.getElementById("team-section");
  if (teamSection) {
    teamSection.appendChild(row);
  } else {
    // Ako element sa ID-jem 'team-section' ne postoji, dodaj red u body
    document.body.appendChild(row);
  }
}

// Pozovi funkciju za kreiranje sekcije tima
createTeamSection();


//REGEX

//FIRST NAME

var Fname = document.querySelector("#name");
var FnameRegEx = /^[A-Z][a-z]{1,14}$/;

//LAST NAME

var Lname = document.querySelector("#Lname");
var LnameRegEx = /^[A-Z][a-z]{1,14}$/;

//EMAIL

var email = document.querySelector("#mail");
var emailRegEx = /(@gmail\.com|@yahoo\.com|@ict\.edu\.rs)$/;

var errorFn = document.querySelector("#errorFname");
var errorLn = document.querySelector("#errorLname");
var errorEmail = document.querySelector("#errorEmail");
var errorDdl = document.querySelector("#errorDdl");
var errorRb = document.querySelector("#errorRb");
var errorChb = document.querySelector("#errorChb");

var successMessage = document.querySelector("#successMessage");

var provera = document.querySelector("#sendMessageButton");
provera.addEventListener("click", validateForm)

function validateForm(){
  ErrorNumber = 0;
  setError(errorFn, 'Invalid first name', !FnameRegEx.test(Fname.value));
  setError(errorLn, 'Invalid last name', !LnameRegEx.test(Lname.value));
  setError(errorEmail, 'Invalid email', !emailRegEx.test(email.value));

  var ddl = document.querySelector('#Select-name select');
  setError(errorDdl, 'Not selected', !ddl || ddl.value == '0');

  var gender = document.getElementsByName('gender');
  var isGenderSelected = false;
  for (let i = 0; i < gender.length; i++) {
      if (gender[i].checked) {
          isGenderSelected = true;
          break;
      }
  }

  if (!isGenderSelected) {
      setError(errorRb, 'Please select a gender', 1);
  } else {
      setError(errorRb, '', 0);
  }

  var chb = document.querySelector('#chb');
  if (!chb.checked) {
      setError(errorChb, 'You must agree to terms and conditions', 1);
  } else {
      setError(errorChb, '', 0);
  }
  
  if (ErrorNumber === 0) {
      successMessage.innerHTML = `<p class='fs-5'>Form submitted successfully!</p>`;
      successMessage.style.color = '#28a745';
      successMessage.style.display = 'block';
  } else {
      successMessage.innerHTML = '';
      successMessage.style.display = 'none';
  }
}


function setError(element, message, error){
  if(element){
      element.innerHTML = message;
      element.style.color = error ? '#ff0000' : 'transparent';
      element.style.display = error ? 'block' : 'none';
  }
  if (error) {
      ErrorNumber++;
  }
}
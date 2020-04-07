const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//// Nav Menu
// const firstAnchorTag = document.querySelector("nav > a:nth-child(1)")
// firstAnchorTag.textContent = siteContent["nav"]["nav-item-1"]

// const secondAnchorTag = document.querySelector("nav > a:nth-child(2)")
// secondAnchorTag.textContent = siteContent["nav"]["nav-item-2"]

// const thirdAnchorTag = document.querySelector("nav > a:nth-child(3)")
// thirdAnchorTag.textContent = siteContent["nav"]["nav-item-3"]

// const fourthAnchorTag = document.querySelector("nav > a:nth-child(4)")
// fourthAnchorTag.textContent = siteContent["nav"]["nav-item-4"]

// const fifthAnchorTag = document.querySelector("nav > a:nth-child(5)")
// fifthAnchorTag.textContent = siteContent["nav"]["nav-item-5"]

// const sixthAnchorTag = document.querySelector("nav > a:nth-child(6)")
// sixthAnchorTag.textContent = siteContent["nav"]["nav-item-6"]

const navAnchorTags = document.querySelectorAll("nav a");
const navContents = Object.values(siteContent.nav)
function navLoop(){
  for(let i = 0; i < navAnchorTags.length; i++) {
    navAnchorTags[i].style.color = "green"
  }
}
navLoop()


//// CTA image src
const ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute("src", siteContent["cta"]["img-src"])

//// CTA Text
const ctaText = document.querySelector(".cta-text h1");
ctaText.textContent = siteContent.cta["h1"]

//// CTA Button
const ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = siteContent.cta["button"]

//// Top Body text
const featuresH4 = document.querySelector("div.top-content > div:nth-child(1) > h4");
featuresH4.textContent = siteContent["main-content"]["features-h4"]

const featuresText = document.querySelector("div.top-content > div:nth-child(1) > p");
featuresText.textContent = siteContent["main-content"]["features-content"]

const aboutH4 = document.querySelector("div.top-content > div:nth-child(2) > h4");
aboutH4.textContent = siteContent["main-content"]["about-h4"]

const aboutText = document.querySelector("div.top-content > div:nth-child(2) > p");
aboutText.textContent = siteContent["main-content"]["about-content"]

//// Body image src
const bodyImage = document.getElementById("middle-img");
bodyImage.setAttribute("src", siteContent["main-content"]["middle-img-src"])

//// Bottom Body text
const servicesH4 = document.querySelector("div.bottom-content > div:nth-child(1) > h4");
servicesH4.textContent = siteContent["main-content"]["services-h4"]

const servicesText = document.querySelector("div.bottom-content > div:nth-child(1) > p");
servicesText.textContent = siteContent["main-content"]["services-content"]

const productH4 = document.querySelector("div.bottom-content > div:nth-child(2) > h4");
productH4.textContent = siteContent["main-content"]["product-h4"]

const productText = document.querySelector("div.bottom-content > div:nth-child(2) > p");
productText.textContent = siteContent["main-content"]["product-content"]

const visionH4 = document.querySelector("div.bottom-content > div:nth-child(3) > h4");
visionH4.textContent = siteContent["main-content"]["vision-h4"]

const visionText = document.querySelector("div.bottom-content > div:nth-child(3) > p");
visionText.textContent = siteContent["main-content"]["vision-content"]

//// Contact
const contactInfo = document.querySelector("section.contact > h4");
contactInfo.textContent = siteContent["contact"]["contact-h4"]

const addressInfo = document.querySelector("section.contact > p:nth-child(2)");
addressInfo.textContent = siteContent["contact"]["address"]

const phoneInfo = document.querySelector("section.contact > p:nth-child(3)");
phoneInfo.textContent = siteContent["contact"]["phone"]

const emailInfo = document.querySelector("section.contact > p:nth-child(4)");
emailInfo.textContent = siteContent["contact"]["email"]

//// Footer
const footerInfo = document.querySelector("footer > p");
footerInfo.textContent = siteContent["footer"]["copyright"]

//// Step 3

// Green nav
function navGreen(){
  for(let i = 0; i < navAnchorTags.length; i++) {
    navAnchorTags[i].textContent = navContents[i]
  }
}
navGreen()

// append and prepend
// function createNavItem(name) {
//   let a = document.createElement("a");
//   a.textContent = name;
//   return a;
// }

// const menu = document.querySelector("nav");
// menu.appendChild(createMenuItem("Home"));

// const navItems = document.querySelectorAll('nav a');
// const prependedChild = document.createElement('a');
// navItems.prepend(prependedChild);
// prependedChild.textContent = ("Home");

// let node = document.createElement("nav");
// node.appendChild("newNode");

const nav = document.querySelector('nav');
const newLink = document.createElement('a');
newLink.href = '#';
newLink.textContent = 'Ideas';
newLink.style.color = 'green';
nav.appendChild(newLink)

const newLink2 = document.createElement('a');
newLink2.href = '#';
newLink2.textContent = 'Home';
newLink2.style.color = 'green';
nav.prepend(newLink2)
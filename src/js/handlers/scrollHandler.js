let pageYTop = function(page) { return page.getBoundingClientRect().top + window.scrollY };

let pageYBottom = function(page) { return page.getBoundingClientRect().bottom + window.scrollY };

function scrollHandler(pages, header, links) {
  window.addEventListener('scroll', function() {
    if (window.scrollY >= pageYTop(pages[0]) - 200) {
      header.style.top = 50 + "%";
      header.style.transform = "translateY(-50%)";
      for (let i = 0; i < links.length; i++) {
        links[i].style.opacity = 0.3;
        links[i].style.color = "#FFF";
      };  
    } else {
      header.style.top = 0;
      header.style.transform = "translateY(0)";
      for (let i = 0; i < links.length; i++) {
        links[i].style.opacity = 1;
        links[i].style.color = "#FFF";
      };      
    }
    pages.map((page, index) => {
      if (window.scrollY >= pageYTop(page) - 200 && window.scrollY <= pageYBottom(page) - 200) {
        links[index].style.color = "#FBB88C";        
        links[index].style.opacity = 1;
      }
    })    
  });
}

export {scrollHandler};
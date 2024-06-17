const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});

//TOGGLE

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});

// script.js
document.getElementById('searchButton').addEventListener('click', function() {
  document.getElementById('searchPopup').style.display = 'block';
});

document.getElementById('closeButton').addEventListener('click', function() {
  document.getElementById('searchPopup').style.display = 'none';
});

function search(term) {
    // Example search logic
    var items = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape'];
    var results = items.filter(function(item) {
        return item.toLowerCase().includes(term.toLowerCase());
    });

    displayResults(results);
}

function displayResults(results) {
    var resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = '';

    if (results.length > 0) {
        var ul = document.createElement('ul');
        results.forEach(function(result) {
            var li = document.createElement('li');
            li.textContent = result;
            ul.appendChild(li);
        });
        resultsContainer.appendChild(ul);
    } else {
        resultsContainer.textContent = 'No results found';
    }
}





document.addEventListener("DOMContentLoaded", () => {

  // ---------- 1a. Category cards ----------
  const categories = [
    {
      title: "Revamp your home in style",
      linkText: "Shop the collection",
      colors: ["#d9a441", "#8c6b2f", "#3f6b8c", "#4f7a4f"],
    },
    {
      title: "Get your game on",
      linkText: "See all gaming gear",
      colors: ["#3a3a5c", "#5c3a5c", "#2f4f4f", "#5c4a3a"],
    },
    {
      title: "Top picks in fashion",
      linkText: "Explore new arrivals",
      colors: ["#a5455f", "#455fa5", "#45a58c", "#a58c45"],
    },
    {
      title: "Refresh your electronics",
      linkText: "Shop electronics",
      colors: ["#2f3e4f", "#4f2f3e", "#3e4f2f", "#2f4f4a"],
    },
  ];

  const grid = document.getElementById("cardGrid");
  categories.forEach((cat) => {
    const card = document.createElement("div");
    card.className = "category-card";
    const thumbs = cat.colors
      .map((c) => `<div class="thumb" style="background:${c}"></div>`)
      .join("");
    card.innerHTML = `
      <h3>${cat.title}</h3>
      <div class="category-thumbs">${thumbs}</div>
      <a href="#">${cat.linkText}</a>
    `;
    grid.appendChild(card);
  });

  // ---------- 1b. Deal cards ----------
  const deals = [
    { name: "Wireless earbuds, 30hr battery", price: "1,499", old: "2,999", color: "#274472" },
    { name: "Everyday cotton t-shirt", price: "399", old: "899", color: "#7a3b3b" },
    { name: "Non-stick cookware set (5 pc)", price: "1,199", old: "1,999", color: "#3b5e3b" },
    { name: "Bestselling fiction paperback", price: "249", old: "450", color: "#5e4b3b" },
    { name: "Smart LED desk lamp", price: "699", old: "1,199", color: "#4b3b5e" },
    { name: "Running shoes, all-day comfort", price: "1,799", old: "2,999", color: "#3b5e5e" },
  ];

  const dealRow = document.getElementById("dealRow");
  deals.forEach((d) => {
    const card = document.createElement("div");
    card.className = "deal-card";
    card.innerHTML = `
      <div class="deal-thumb" style="background:${d.color}"></div>
      <span class="deal-badge">Deal of the day</span>
      <span class="deal-name">${d.name}</span>
      <span class="deal-price">&#8377;${d.price}<span class="old">&#8377;${d.old}</span></span>
    `;
    card.addEventListener("click", () => addToCart());
    dealRow.appendChild(card);
  });

  // ---------- 2. Hero carousel ----------
  const track = document.getElementById("carouselTrack");
  const slides = track.children;
  let current = 0;

  function goTo(index) {
    current = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;
  }

  document.getElementById("prevSlide").addEventListener("click", () => goTo(current - 1));
  document.getElementById("nextSlide").addEventListener("click", () => goTo(current + 1));

  let autoSlide = setInterval(() => goTo(current + 1), 5000);
  track.addEventListener("mouseenter", () => clearInterval(autoSlide));
  track.addEventListener("mouseleave", () => {
    autoSlide = setInterval(() => goTo(current + 1), 5000);
  });

  // ---------- 3a. Cart counter ----------
  let cartCount = 0;
  const cartCountEl = document.getElementById("cartCount");
  function addToCart() {
    cartCount += 1;
    cartCountEl.textContent = cartCount;
  }

  // ---------- 3b. Search form ----------
  document.getElementById("searchForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.getElementById("searchInput");
    const query = input.value.trim();
    if (!query) {
      input.focus();
      return;
    }
    alert(`This is a static student demo — searching for "${query}" doesn't hit a real catalogue.`);
  });

  // ---------- 3c. Mobile "All" menu placeholder ----------
  document.getElementById("hamburgerBtn").addEventListener("click", () => {
    alert("This would open the full category menu in a real build.");
  });
});

fetch("nyheter.json")
  .then(response => response.json())
  .then(news => {
    const newsGrid = document.getElementById("newsGrid");

    news.sort((a, b) => new Date(b.date) - new Date(a.date));

    const latestNews = news.slice(0, 6);

    latestNews.forEach(item => {
      const article = document.createElement("article");
      article.className = "news-card";

      article.innerHTML = `
        <span class="news-date">${formatDate(item.date)}</span>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      `;

      newsGrid.appendChild(article);
    });
  });

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("sv-SE", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}

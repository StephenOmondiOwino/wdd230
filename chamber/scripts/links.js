const baseURL = "https://stephenomondiowino.github.io/wdd230/";
const linksURL = `${baseURL}data/links.json`;

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data.weeks);
}

function displayLinks(weeks) {
  const container = document.getElementById("activities");
  weeks.forEach(week => {
    const weekSection = document.createElement("div");
    const weekTitle = document.createElement("h4");
    weekTitle.textContent = week.week;

    const ul = document.createElement("ul");
    week.links.forEach(link => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = baseURL + link.url;
      a.textContent = link.title;
      li.appendChild(a);
      ul.appendChild(li);
    });

    weekSection.appendChild(weekTitle);
    weekSection.appendChild(ul);
    container.appendChild(weekSection);
  });
}

getLinks();

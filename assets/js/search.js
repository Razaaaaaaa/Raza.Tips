document.addEventListener("DOMContentLoaded", async () => {

  const input = document.getElementById("search-input");
  const results = document.getElementById("search-results");

  if (!input || !results) return;

  const response = await fetch("/search-index.json");
  const documents = await response.json();

  const index = lunr(function () {
    this.ref("url");
    this.field("title", { boost: 10 });
    this.field("category", { boost: 5 });
    this.field("content");

    documents.forEach(doc => this.add(doc));
  });

  input.addEventListener("input", function () {

    const query = this.value.trim();
    results.innerHTML = "";

    if (!query) {
      document.getElementById("default-articles").style.display = "";
      return 
    };

    document.getElementById("default-articles").style.display = "none";

      const matches = index.search(query + "*");

      if (!matches.length) {
        results.textContent = "Aucun résultat trouvé";
        return;
      }

matches.slice(0, 10).forEach(match => {

  const post = documents.find(
    doc => doc.url === match.ref
  );

  if (!post) return;

  const fieldset = document.createElement("fieldset");
  fieldset.className = "mb-2"; 

  const legend = document.createElement("legend");
  legend.className = "ps-1 pe-1";
  legend.textContent = post.title;
  fieldset.appendChild(legend);

  const date = document.createElement("div");
  date.className = "text-secondary small";
  date.textContent = post.date || "";
  fieldset.appendChild(date);

  if (post.excerpt) {
    const excerpt = document.createElement("p");
    excerpt.className = "card-text";
    excerpt.textContent = post.excerpt;
    fieldset.appendChild(excerpt);
  }

  if (post.categories) {
    const categories = Array.isArray(post.categories)
      ? post.categories
      : post.categories.split(",").map(category => category.trim());

    const categoryContainer = document.createElement("div");
    categoryContainer.className = "d-flex flex-wrap gap-2";

    categories.forEach(category => {
      const span = document.createElement("span");
      span.className = "p-1";
      span.style.border = "solid 1px white";
      span.textContent = `#${category}`;
      categoryContainer.appendChild(span);
    });

    fieldset.appendChild(categoryContainer);
  }

  const linkContainer = document.createElement("div");
  linkContainer.className = "p-1 text-center";

  const link = document.createElement("a");
  link.className = "text-white rounded-0 text-decoration-none tuibutton";
  link.href = post.url;
  link.textContent = "[ Ouvrir ]";

  linkContainer.appendChild(link);
  fieldset.appendChild(linkContainer);

  results.appendChild(fieldset);
});


  });

});
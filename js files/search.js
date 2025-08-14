document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const lessonsContainer = document.getElementById("moleculeLessons");

  if (!searchInput || !lessonsContainer || typeof moleculeLessons === 'undefined' || typeof wikipediaLessons === 'undefined') {
    console.error("Missing elements or lesson data for search.js");
    return;
  }

  // Merge molecule and Wikipedia lessons
  const allLessons = {
    ...moleculeLessons,
    ...wikipediaLessons
  };

  const defaultContent = lessonsContainer.innerHTML;

  function normalize(text) {
    return text
      .toLowerCase()
      .replace(/[₀₁₂₃₄₅₆₇₈₉]/g, d => "0123456789"["₀₁₂₃₄₅₆₇₈₉".indexOf(d)])
      .replace(/<\/?[^>]+(>|$)/g, "")
      .replace(/[^a-z0-9]/g, "");
  }

  function highlightMatch(content, query) {
    const regex = new RegExp(`(${query})`, "gi");
    return content.replace(regex, `<mark>$1</mark>`);
  }

  searchInput.addEventListener("input", () => {
    const rawQuery = searchInput.value.trim();
    const query = normalize(rawQuery);

    if (!query) {
      lessonsContainer.innerHTML = defaultContent;
      return;
    }

    let results = "";

    for (const key in allLessons) {
      const normalizedKey = normalize(key);
      const normalizedContent = normalize(allLessons[key]);

      if (normalizedKey.includes(query) || normalizedContent.includes(query)) {
        const highlightedKey = highlightMatch(key, rawQuery);
        const highlightedContent = highlightMatch(allLessons[key], rawQuery);

        results += `
          <div class="lesson-item1">
            <h3>${highlightedKey}</h3>
            ${highlightedContent}
          </div>`;
      }
    }

    lessonsContainer.innerHTML =
      results || `<p class="no-results">No matching results found for "<strong>${rawQuery}</strong>"</p>`;
  });
});

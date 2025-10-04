// docs/javascripts/shortcuts.js
// Subscribe to the Material theme keyboard observable.
// Handles global mode + "x" key and demonstrates three actions:
//  - show a small toast-like UI
//  - navigate to next page if present
//  - open search

function showTinyToast(text) {
  // create a tiny unobtrusive toast
  const id = "custom-shortcut-toast";
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement("div");
    el.id = id;
    Object.assign(el.style, {
      position: "fixed",
      right: "1rem",
      bottom: "1rem",
      padding: "0.45rem 0.8rem",
      background: "rgba(0,0,0,0.75)",
      color: "white",
      borderRadius: "6px",
      fontSize: "0.85rem",
      zIndex: 99999,
      boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
      transition: "opacity 220ms ease",
      opacity: "0"
    });
    document.body.appendChild(el);
  }
  el.textContent = text;
  el.style.opacity = "1";
  clearTimeout(el._tid);
  el._tid = setTimeout(() => { el.style.opacity = "0"; }, 1600);
}

// If keyboard$ is not yet available when this script runs, wait a short while
function ensureKeyboardObservable(cb) {
  if (typeof keyboard$ !== "undefined" && keyboard$ && keyboard$.subscribe) {
    cb();
  } else {
    // try again after DOMContent loaded
    document.addEventListener("DOMContentLoaded", function tryOnce() {
      document.removeEventListener("DOMContentLoaded", tryOnce);
      if (typeof keyboard$ !== "undefined" && keyboard$ && keyboard$.subscribe) {
        cb();
      } else {
        // final fallback: poll briefly
        const handle = setInterval(() => {
          if (typeof keyboard$ !== "undefined" && keyboard$ && keyboard$.subscribe) {
            clearInterval(handle);
            cb();
          }
        }, 50);
        setTimeout(() => clearInterval(handle), 3000); // stop after 3s
      }
    });
  }
}

ensureKeyboardObservable(() => {
  keyboard$.subscribe(function(key) {
    // only act in 'global' mode (search not focused)
    if (key.mode === "global" && key.type === "x") {
      // Example 1: show toast
      showTinyToast("Custom X-key pressed");

      // Example 2: navigate to Next page (if a next-button exists)
      // The Material theme usually has nav links with rel attributes or aria-labels.
      // Try a few selectors to be resilient:
      const nextSelectors = [
        'a[rel="next"]',
        'a[aria-label="Next"]',
        'a[aria-label="Next page"]',
        '.md-footer-nav__link--next a', // older versions
        '.md-nav__link[rel="next"]'
      ];
      let next = null;
      for (const s of nextSelectors) {
        next = document.querySelector(s);
        if (next) break;
      }
      if (next) {
        // claim the key to prevent default theme behavior, then click.
        key.claim();
        next.click();
        return;
      }

      // Example 3: if no next page, open search instead
      // Material exposes a function to open the search dialog via `search.toggle()` in some versions,
      // but simplest is to focus the search input (if present).
      const searchInput = document.querySelector('input.md-search__input, input[placeholder*="Search"]');
      if (searchInput) {
        key.claim();
        searchInput.focus();
        return;
      }

      // If nothing else, just claim the key (prevent other handlers).
      key.claim();
    }
  });
});
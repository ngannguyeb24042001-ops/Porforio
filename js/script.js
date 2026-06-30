const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const link = document.querySelector(`a[href="#${entry.target.id}"]`);

      if (link) {
        link.classList.toggle("active", entry.isIntersecting);
      }
    });
  },
  {
    threshold: 0.5,
  },
);

document.querySelectorAll("section[id]").forEach((section) => {
  observer.observe(section);
});

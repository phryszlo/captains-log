window.addEventListener('DOMContentLoaded', () => {
  const collapsibles = document.querySelectorAll('.collapsible');
  collapsibles.forEach((c,i) => {
    c.addEventListener('click', () => {
      this.classList.toggle('viewable');
      const content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    })
  })
})
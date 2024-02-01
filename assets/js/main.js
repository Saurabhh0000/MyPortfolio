

  // Add JavaScript to toggle project descriptions on click
document.querySelectorAll('.project-item').forEach(item => {
    item.addEventListener('click', function() {
      // Toggle the display of the project description
      const description = this.querySelector('p');
      description.style.display = (description.style.display === 'block' || description.style.display === '') ? 'none' : 'block';
    });
  });

 // Smooth scroll to anchor links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
  
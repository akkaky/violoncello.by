function toggleSpoiler() {
  const spoilerContent = document.getElementById('spoiler-content');
  spoilerContent.classList.toggle('open'); // Toggle the 'open' class
}

// Smooth scrolling for menu links
document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor behavior

    const targetId = this.getAttribute('href'); // Get the target ID
    const targetElement = document.querySelector(targetId); // Find the target element

    // Smoothly scroll to the target element
    window.scrollTo({
      top: targetElement.offsetTop - 50, // Adjust for menu height
      behavior: 'smooth' // Smooth scrolling
    });
  });
});

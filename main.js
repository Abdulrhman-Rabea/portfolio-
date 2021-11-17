let observer = new IntersectionObserver(entries => {
  // We will fill in the callback later...
});

// Tell the observer which elements to track
observer.observe(document.querySelector('.about .sec3 .skills_levels .up'));
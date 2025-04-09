document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('toggleComments');
    const comments = document.getElementById('comments');
  
    toggleBtn.addEventListener('click', () => {
      comments.hidden = !comments.hidden;
    });
  
    toggleBtn.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        comments.hidden = !comments.hidden;
      }
    });
  });
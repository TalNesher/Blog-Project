// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const addPostBtn = document.getElementById('addPostBtn');
    const popupContainer = document.getElementById('popupContainer');
    const publishBtn = document.getElementById('publishBtn');
  
    addPostBtn.addEventListener('click', function() {
      popupContainer.style.display = 'block';
    });
  
    publishBtn.addEventListener('click', function() {
      const postContent = document.getElementById('postContent').value;
      // Submit the post content to the server
      // Example: Send an AJAX request to the server to process the post
      console.log('Publishing post:', postContent);
  
      // After processing the post on the server, update the home page
      // Example: Append the new post to the list of posts on the home page
      const newPostElement = document.createElement('div');
      newPostElement.textContent = postContent;
      document.body.appendChild(newPostElement);
  
      // Close the pop-up window after publishing
      popupContainer.style.display = 'none';
    });
  });
  
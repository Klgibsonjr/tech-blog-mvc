const commentFormHandler = async (event) => {
  event.preventDefault();

  const postId = document.querySelector('#post-id').value.trim();
  const newComment = document.querySelector('#new-comment').value.trim();

  if (newComment) {
    const response = await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({ postId, newComment }),
      header: { 'Content-type': 'application/json' },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('#new-comment')
  .addEventListener('submit', commentFormHandler);

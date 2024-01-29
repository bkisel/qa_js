// async function for comments
async function getComments() {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments/1');
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
}

// async function for posts
async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/2');
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
}

// used Promise.all
Promise.all([getComments(), getPosts()])
    .then(data => console.log('Promise.all result:', data))
    .catch(error => console.error('Promise.all error:', error));

// used Promise.allSettled
Promise.allSettled([getComments(), getPosts()])
    .then(results => console.log('Promise.allSettled results:', results));

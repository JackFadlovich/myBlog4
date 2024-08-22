document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('blog-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value.trim();
        const title = document.getElementById('title').value.trim();
        const content = document.getElementById('content').value.trim();

        const newPost = {
            username: username,
            title: title,
            content: content,
            date: new Date().toISOString()};

        const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];

        posts.push(newPost);

        localStorage.setItem('blogPosts', JSON.stringify(posts));


        window.location.href = 'blog.html';
    });
});

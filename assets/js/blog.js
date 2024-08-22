document.addEventListener('DOMContentLoaded', () => {
    const postList = document.getElementById('post-list');
    const toggleThemeButton = document.getElementById('toggle-theme');

    function displayPosts() {
        const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];

        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'post';

            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.content}</p>
                <p class="post-author">Posted by ${post.username}</p>
                <p class="post-date">On ${new Date(post.date).toLocaleDateString()}</p>
            `;

            postList.appendChild(postElement);
        });
    }

    function toggleTheme() {
        document.body.classList.toggle('dark-mode');
    }

    displayPosts();

    toggleThemeButton.addEventListener('click', toggleTheme);

});

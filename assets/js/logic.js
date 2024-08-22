function formatDate(isoString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(isoString).toLocaleDateString(undefined, options);
}

function getPosts() {
    return JSON.parse(localStorage.getItem('blogPosts')) || [];
}



    function savePosts(posts) {
    localStorage.setItem('blogPosts', JSON.stringify(posts));
}


// news_article.js

// Step 3: Create XMLHttpRequest object and define URL
var xhr = new XMLHttpRequest();
var url = './news_article.json'; // Link to your JSON file

xhr.open('GET', url, true); // Open the request: GET method, URL, asynchronous
xhr.responseType = 'json'; // Expect a JSON response

// Step 4: Define the onload event handler
xhr.onload = function() {
    // Check if the request was successful (HTTP status in the 200s)
    if (xhr.status >= 200 && xhr.status < 300) {
        // Access the parsed JSON response
        var newsArticles = xhr.response.articles;
        var newsArticlesContainer = document.getElementById('news-articles-container');

        // Clear the "Loading..." message
        if (newsArticlesContainer) {
            newsArticlesContainer.innerHTML = '';
        } else {
            console.error("Error: Element with ID 'news-articles-container' not found in the DOM.");
            return; // Exit if container not found
        }

        // Step 5: Iterate through each news article (similar to steps 3-6 logic from previous lab)
        newsArticles.forEach(function(article) {
            // Create a div for the individual news article
            var articleDiv = document.createElement('div');
            articleDiv.classList.add('news-article');

            // Create and append the title
            var title = document.createElement('h2');
            title.textContent = article.title;
            articleDiv.appendChild(title);

            // Create and append author and date (metadata)
            var meta = document.createElement('p');
            meta.classList.add('meta');
            meta.textContent = `By ${article.author} on ${article.date}`;
            articleDiv.appendChild(meta);

            // Create and append the content/description
            var content = document.createElement('p');
            content.textContent = article.content;
            articleDiv.appendChild(content);

            // Create and append tags (if available)
            if (article.tags && Array.isArray(article.tags) && article.tags.length > 0) {
                var tagsList = document.createElement('ul');
                tagsList.classList.add('tags');
                article.tags.forEach(function(tag) {
                    var listItem = document.createElement('li');
                    listItem.textContent = tag;
                    tagsList.appendChild(listItem);
                });
                articleDiv.appendChild(tagsList);
            }

            // Append the complete news article div to the main container
            newsArticlesContainer.appendChild(articleDiv);
        });
    } else {
        // Step 6 (Error Handling): Handle HTTP errors (e.g., 404 Not Found, 500 Server Error)
        var newsArticlesContainer = document.getElementById('news-articles-container');
        if (newsArticlesContainer) {
            newsArticlesContainer.innerHTML = '<p style="color: red;">Failed to load news articles. Status: ' + xhr.status + '</p>';
        }
        console.error('Error fetching news articles. Status: ' + xhr.status);
    }
};

// Step 6 (Error Handling): Define the onerror event handler for network errors
xhr.onerror = function() {
    var newsArticlesContainer = document.getElementById('news-articles-container');
    if (newsArticlesContainer) {
        newsArticlesContainer.innerHTML = '<p style="color: red;">A network error occurred while trying to fetch news articles.</p>';
    }
    console.error('Network error occurred during XHR request.');
};

// Step 6: Send the request to initiate the data fetch
xhr.send();

// Dummy JSON data of shows

const moviesData = [
    {
        id: 1,
        title: "House",
        year: 2011,
        genre: "Medical, Drama",
        type: "Series",
        likes: 0
    },
    {
        id: 2,
        title: "Love Is Blind",
        year: 2025,
        genre: "Romantic, Reality",
        type: "Series",
        likes: 0
    },
    {
        id: 3,
        title: "Brooklyn Nine-Nine",
        year: 2021,
        genre: "Sitcom, Comedy, Crime",
        type: "Series",
        likes: 0
    },
    {
        id: 4,
        title: "Gossip Girl",
        year: 2012,
        genre: "Drama, Teens",
        type: "Series",
        likes: 0
    },
    {
        id: 5,
        title: "BoJack Horseman",
        year: 2020,
        genre: "Adult Animation, Sitcom, Comedy",
        type: "Series",
        likes: 0
    },
    {
        id: 6,
        title: "Lucifer",
        year: 2021,
        genre: "Drama, Crime",
        type: "Series",
        likes: 0
    },
    {
        id: 7,
        title: "Orange Is The New Black",
        year: 2019,
        genre: "Drama, Comedy",
        type: "Series",
        likes: 0
    },
    {
        id: 8,
        title: "House of Cards",
        year: 2018,
        genre: "Political, Drama",
        type: "Series",
        likes: 0
    },
    {
        id: 9,
        title: "Pitch Perfect",
        year: 2012,
        genre: "Comedy, Musical",
        type: "Movie",
        likes: 0
    },
    {
        id: 10,
        title: "The Terminal",
        year: 2004,
        genre: "Romantic Comedy, Drama, Comedy",
        type: "Movie",
        likes: 0
    },
    {
        id: 11,
        title: "Big Mouth",
        year: 2025,
        genre: "Adult Animation, Sitcom",
        type: "Series",
        likes: 0
    },
    {
        id: 12,
        title: "Too Hot To Handle",
        year: 2024,
        genre: "Reality",
        type: "Series",
        likes: 0
    },
    {
        id: 13,
        title: "Seinfeld",
        year: 1997,
        genre: "Sitcom, Comedy",
        type: "Series",
        likes: 0
    },
    {
        id: 14,
        title: "Money Heist",
        year: 2021,
        genre: "Crime, Thriller",
        type: "Series",
        likes: 0
    },
    {
        id: 15,
        title: "Rick And Morty",
        year: 2023,
        genre: "Aduly Animation, Sitcom, Sci-fi",
        type: "Series",
        likes: 0
    },
    {
        id: 16,
        title: "Dead Poets Society",
        year: 1989,
        genre: "Classic, Drama",
        type: "Movie",
        likes: 0
    },
    {
        id: 17,
        title: "Good Will Hunting",
        year: 1997,
        genre: "Classic, Drama",
        type: "Movie",
        likes: 0
    },
    {
        id: 18,
        title: "Mr. & Mrs. Smith",
        year: 2005,
        genre: "Romantic Comedy, Crime, Comedy",
        type: "Movie",
        likes: 0
    }
]

//Render movies
function renderMovies() {
    const showsGrid = document.getElementById('showsGrid');
    showsGrid.innerHTML = '';

    moviesData.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';

        movieCard.innerHTML = `
        <div class="movie-poster">
            ${movie.title}
        </div>
        <div class="movie-info">
            <div class="movie-title">${movie.title}</div>
            <div class="movie-details">${movie.year} • ${movie.type}</div>
            <div class="movie-genre">${movie.genre}</div>
            <button class="like-btn ${movie.likes} likes" onclick="toggleLike(${movie.id})">
              <i class="heart-icon ${movie.likes ? 'fas' : 'far'} fa-heart"></i>
              ${movie.likes} likes
            </button>
        </div>
        `;

        showsGrid.appendChild(movieCard);
    });
}

// Function to toggle like status
function toggleLike(movieId) {
    const movie = moviesData.find(m => m.id === movieId);
    if (movie) {
        movie.likes++;
        renderMovies();
        // Find the button and add animation
        const movieCards = document.querySelectorAll('.movie-card');
        movieCards.forEach(card => {
            const button = card.querySelector('.like-btn');
            const heartIcon = button.querySelector('.heart-icon');

            if (button.onclick.toString().includes(movieId)) {
                // Update button appearance
                if (movie.likes) {
                    button.classList.add('likes');
                    heartIcon.classList.remove('far');
                    heartIcon.classList.add('fas');
                    button.innerHTML = '<i class="heart-icon fas fa-heart"></i> Likes';
                } else {
                    button.classList.remove('likes');
                    heartIcon.classList.remove('fas');
                    heartIcon.classList.add('far');
                    button.innerHTML = '<i class="heart-icon far fa-heart"></i> Like';
                }

                // Add heart beat animation
                heartIcon.classList.add('heart-animation');

                // Remove animation class after animation completes
                setTimeout(() => {
                    heartIcon.classList.remove('heart-animation');
                }, 600);
            }
        });
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function () {
    renderMovies();
});

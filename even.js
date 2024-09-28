// Sample book data
const books = [
    {
        name: "India that is Bharat",
        author: "Jaypal Singh",
        imgSrc: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTei_qGRNW6ljw-TVgSKAiFP2hYaUgrTj46GiHX-AYZztZFqYhz7zkapW6zO9w48TteueuwKikwv25UMxFqA9ofz8NhU4dZn7PsrutsB2k&usqp=CAE",
        link: "openbook.com"
    },
    {
        name: "Object to NCRT",
        author: "Dr. Viipin",
        imgSrc: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT-bzGxkAr03JiFFssb36bQCkG8GVbtzpjlfTQks4r0O5lPoVyVmNsrKLgQnag2q9xRjCQpmcB79Mo0ZZcBpUCUz9ZawvJkG2NAH48jgC15vRr_R_cKqrvI&usqp=CAE",
        link: "openbook.com"
    },
    {
        name: "Icebreaker",
        author: "Elena Armes",
        imgSrc: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQOe3uLHjaCImmE6N_oWV1zOlPzGOfQISQdHFkqTCbMML69RFYnAf2x5VexerMvizGee-2RJL8MO8nvQ-573VvCEFnyEbrkdnHJF2QfUnlS&usqp=CAE",
        link: "openbook.com"
    },
    {
        name: "Roots",
        author: "Alex Haley",
        imgSrc: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR_prIGjnx76ikoNIpzeNKw25vjIGkSH4Qk0xVgGEMl8-f3FnAk4_7HP-hPmkMrqKBv27Lt4T8vZE1khHtrPHcCngqCPMKOpE_lHJXRpuaI2TRWGx4dYnaVPA&usqp=CAE",
        link: "openbook.com"
    },
    {
        name: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        imgSrc: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRBTG5BIpOkqBFTv_-s2Eiku9zSLyx6Sl2m4ZfRorTtoDoVu6dwNQeS-vtdLliFX4c_ix8inoYAeemHY0qgj4I7FMt_9WSXCxl_2aywKHlbl7OjmFr8qot-mg&usqp=CAE",
        link: "openbook.com"
    },
    {
        name: "Tiny Changes",
        author: "James Clear",
        imgSrc: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR849SlDT19cgv8mfSOslbrrvCCVf4svpoY_R-1Ac7WNEr5m_9t_w3lJ5lDIF1LIxJ5LKs_tautH9CDEjjVv4RwFLgS2eBwFecV3VULrCnL&usqp=CAE",
        link: "openbook.com"
    },
    {
        name: "Divergent",
        author: "Veronica Roth",
        imgSrc: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTZGbIN3rJVvu1TRGnZ_Nr9MYmV4rLF4l-mYN6Vb0C90SK_xDcC-AV9GvomVhcsTuDRU5ok9ab66k1tX5w_oognvuGJFULOcD-9rvoCBn-mvMmhfo42SkI9xQ&usqp=CAE",
        link: "openbook.com"
    },
    {
        name: "Gravity's Rainbow",
        author: "Thomas Pynchon",
        imgSrc: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSB3Ggqtbi-wqyQhhHcLlRZrO4re4m3Cm8J4dJ7fv0rMDD1md6bnJTfKXA4L85TRo_cXE5YKvpyRaM13i7G9QgcsAqB6U00--4iBPjb4rM&usqp=CAE",
        link: "openbook.com"
    },
    {
        name: "Collen",
        author: "Kami Grame",
        imgSrc: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT3yRFcprRj7VwNBTloHp_UtamD1aidNpP4J-Fma8i2W39tDrisETol4r7Xb_gk_ZG6ndyAShF37NQ5LASATiKJJv10K1UjcTUXwAenLkYS&usqp=CAE",
        link: "openbook.com"
    },
    {
        name: "A Court of Thorns and Roses",
        author: "Sarah J. Maas",
        imgSrc: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRtsmjoPEvRhqz9n_NkVNelPculS4ETtiFXRDFQgW50kGxildwn5P7DQbEWygcH-UqlYZZQ62dIwC1wq28aVn0YAJBTdhdAcWqkQposdEN0EDzOI-pUwVym&usqp=CAE",
        link: "openbook.com"
    },
    {
        name: "Better Than the Movie",
        author: "Lynn Painter",
        imgSrc: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ-XcTvLjdde9rIgH9NjcWSJ2zdo3ewtycT9KqZ7pb7R7qGMn2bllNn0W7QGX1AV0bpD88oUuLZhxgVvJAwiHDROWfrGFWbueZDOoxuWLs&usqp=CAE",
        link: "openbook.com"
    },
    {
        name: "How to Win Friends and Influence People",
        author: "Dale Carnegie",
        imgSrc: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSOIFqsSpcrfhdoXL-WN1eincDMEBDPNJZ8HikKAHIkMs7M9htLsOIXjs68FfAAnWG7bFLosflTK3bsPlvVWLCFGKL3zpOiYM5Ls4ZcSHnMU_1uouMJYsoQ&usqp=CAE",
        link: "openbook.com"
    },
    {
        name: "Atomic Habits",
        author: "James Clear",
        imgSrc: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR849SlDT19cgv8mfSOslbrrvCCVf4svpoY_R-1Ac7WNEr5m_9t_w3lJ5lDIF1LIxJ5LKs_tautH9CDEjjVv4RwFLgS2eBwFecV3VULrCnL&usqp=CAE",
        link: "openbook.com"
    },
    {
        name: "Divergent",
        author: "Veronica Roth",
        imgSrc: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTZGbIN3rJVvu1TRGnZ_Nr9MYmV4rLF4l-mYN6Vb0C90SK_xDcC-AV9GvomVhcsTuDRU5ok9ab66k1tX5w_oognvuGJFULOcD-9rvoCBn-mvMmhfo42SkI9xQ&usqp=CAE",
        link: "openbook.com"
    },
    {
        name: "India that is Bharat",
        author: "Jaypal Singh",
        imgSrc: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTei_qGRNW6ljw-TVgSKAiFP2hYaUgrTj46GiHX-AYZztZFqYhz7zkapW6zO9w48TteueuwKikwv25UMxFqA9ofz8NhU4dZn7PsrutsB2k&usqp=CAE",
        link: "openbook.com"
    },
    {
        name: "Object to NCRT",
        author: "Dr. Viipin",
        imgSrc: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT-bzGxkAr03JiFFssb36bQCkG8GVbtzpjlfTQks4r0O5lPoVyVmNsrKLgQnag2q9xRjCQpmcB79Mo0ZZcBpUCUz9ZawvJkG2NAH48jgC15vRr_R_cKqrvI&usqp=CAE",
        link: "openbook.com"
    },
    {
        name: "Icebreaker",
        author: "Elena Armes",
        imgSrc: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQOe3uLHjaCImmE6N_oWV1zOlPzGOfQISQdHFkqTCbMML69RFYnAf2x5VexerMvizGee-2RJL8MO8nvQ-573VvCEFnyEbrkdnHJF2QfUnlS&usqp=CAE",
        link: "openbook.com"
    },
    {
        name: "Roots",
        author: "Alex Haley",
        imgSrc: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR_prIGjnx76ikoNIpzeNKw25vjIGkSH4Qk0xVgGEMl8-f3FnAk4_7HP-hPmkMrqKBv27Lt4T8vZE1khHtrPHcCngqCPMKOpE_lHJXRpuaI2TRWGx4dYnaVPA&usqp=CAE",
        link: "openbook.com"
    },
];

// Function to display books
function displayBooks(books) {
    const booksContainer = document.querySelector('.books');
    booksContainer.innerHTML = ''; // Clear existing books

    // Check if there are any books to display
    if (books.length === 0) {
        const message = document.createElement('p');
        message.textContent = 'No books found matching your search.';
        message.style.textAlign = 'center';
        message.style.color = '#777'; // Optional styling for the message
        booksContainer.appendChild(message);
        return;
    }

    // Create a row to hold the book elements
    const bookRow = document.createElement('div');
    bookRow.classList.add('book-row-1'); // Add class for styling

    books.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book1');
        bookDiv.innerHTML = `
            <a href="${book.link}">
                <img src="${book.imgSrc}" class="book12" alt="${book.name}">
                <p class="bookname">${book.name}</p>
                <p class="author">by ${book.author}</p>
            </a>
        `;
        bookRow.appendChild(bookDiv);
    });

    booksContainer.appendChild(bookRow); // Append the row to the container
}

// Debounce function to limit the rate at which a function can fire
function debounce(func, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

// Search functionality
function searchBooks() {
    const searchInput = document.querySelector('.search-bar input[type="text"]');
    const filteredBooks = books.filter(book =>
        book.name.toLowerCase().includes(searchInput.value.toLowerCase())
    );
    displayBooks(filteredBooks);
}

// Event listener for search input with debounce
const debouncedSearch = debounce(searchBooks, 300);
document.querySelector('.search-bar input[type="text"]').addEventListener('input', debouncedSearch);

// Add reset button functionality
const resetButton = document.createElement('button');
resetButton.textContent = 'Reset Search';
resetButton.style.marginLeft = '10px';
resetButton.style.padding = '8px 16px';
resetButton.style.backgroundColor = '#007bff';
resetButton.style.color = 'white';
resetButton.style.border = 'none';
resetButton.style.borderRadius = '4px';
resetButton.style.cursor = 'pointer';
resetButton.addEventListener('click', function() {
    const searchInput = document.querySelector('.search-bar input[type="text"]');
    searchInput.value = ''; // Clear the search input
    displayBooks(books); // Display all books
});

// Append reset button to the search bar
document.querySelector('.search-bar').appendChild(resetButton);

// Initial display of all books
displayBooks(books);





// Sample book data with additional properties
const book = [
    {
        name: "India that is Bharat",
        author: "Jaypal Singh",
        imgSrc: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTei_qGRNW6ljw-TVgSKAiFP2hYaUgrTj46GiHX-AYZztZFqYhz7zkapW6zO9w48TteueuwKikwv25UMxFqA9ofz8NhU4dZn7PsrutsB2k&usqp=CAE",
        link: "openbook.com",
        date: "2023",
        price: 20,
        category: "fiction"
    },
    {
        name: "Object to NCRT",
        author: "Dr. Viipin",
        imgSrc: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT-bzGxkAr03JiFFssb36bQCkG8GVbtzpjlfTQks4r0O5lPoVyVmNsrKLgQnag2q9xRjCQpmcB79Mo0ZZcBpUCUz9ZawvJkG2NAH48jgC15vRr_R_cKqrvI&usqp=CAE",
        link: "openbook.com",
        date: "2022",
        price: 15,
        category: "non-fiction"
    },
    {
        name: "Icebreaker",
        author: "Elena Armes",
        imgSrc: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQOe3uLHjaCImmE6N_oWV1zOlPzGOfQISQdHFkqTCbMML69RFYnAf2x5VexerMvizGee-2RJL8MO8nvQ-573VvCEFnyEbrkdnHJF2QfUnlS&usqp=CAE",
        link: "openbook.com",
        date: "2021",
        price: 25,
        category: "fiction"
    },
    {
        name: "Roots",
        author: "Alex Haley",
        imgSrc: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR_prIGjnx76ikoNIpzeNKw25vjIGkSH4Qk0xVgGEMl8-f3FnAk4_7HP-hPmkMrqKBv27Lt4T8vZE1khHtrPHcCngqCPMKOpE_lHJXRpuaI2TRWGx4dYnaVPA&usqp=CAE",
        link: "openbook.com",
        date: "2020",
        price: 30,
        category: "fiction"
    },
    {
        name: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        imgSrc: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRBTG5BIpOkqBFTv_-s2Eiku9zSLyx6Sl2m4ZfRorTtoDoVu6dwNQeS-vtdLliFX4c_ix8inoYAeemHY0qgj4I7FMt_9WSXCxl_2aywKHlbl7OjmFr8qot-mg&usqp=CAE",
        link: "openbook.com",
        date: "1925",
        price: 10,
        category: "fiction"
    }
];

// Function to display books
function displayBooks(books) {
    const booksContainer = document.querySelector('.books');
    booksContainer.innerHTML = ''; // Clear existing books

    if (books.length === 0) {
        const message = document.createElement('p');
        message.textContent = 'No books found matching your search.';
        message.style.textAlign = 'center';
        message.style.color = '#777'; // Optional styling for the message
        booksContainer.appendChild(message);
        return;
    }

    const bookRow = document.createElement('div');
    bookRow.classList.add('book-row-1'); // Add class for styling

    books.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book1');
        bookDiv.innerHTML = `
            <a href="${book.link}">
                <img src="${book.imgSrc}" class="book12" alt="${book.name}">
                <p class="bookname">${book.name}</p>
                <p class="author">by ${book.author}</p>
            </a>
        `;
        bookRow.appendChild(bookDiv);
    });

    booksContainer.appendChild(bookRow); // Append the row to the container
}

// Debounce function to limit the rate at which a function can fire
function debounce(func, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

// Search functionality
function searchBooks() {
    const searchInput = document.querySelector('.search-bar input[type="text"]');
    const filteredBooks = books.filter(book =>
        book.name.toLowerCase().includes(searchInput.value.toLowerCase())
    );
    displayBooks(filteredBooks);
}

// Event listener for search input with debounce
document.querySelector('.search-bar input[type="text"]').addEventListener('input', debounce(searchBooks, 300));

// Function to apply filters
function applyFilters() {
    const category = document.getElementById('category-filter').value;
    const date = document.getElementById('date-filter').value;
    const maxPrice = document.getElementById('price-filter').value;

    const filteredBooks = books.filter(book => {
        const matchesCategory = category ? book.category === category : true;
        const matchesDate = date ? book.date === date : true;
        const matchesPrice = maxPrice ? book.price <= parseFloat(maxPrice) : true;
        return matchesCategory && matchesDate && matchesPrice;
    });

    displayBooks(filteredBooks);
}

// Event listener for the filter button
document.getElementById('apply-filters').addEventListener('click', applyFilters);

// Initial display of all books
displayBooks(books);

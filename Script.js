// DOM elements
const usersContainer = document.getElementById('usersContainer');
const loadingElement = document.getElementById('loading');
const errorElement = document.getElementById('error');
const reloadBtn = document.getElementById('reloadBtn');
const filterBtn = document.getElementById('filterBtn');
const totalUsersElement = document.getElementById('totalUsers');

// API endpoint
const API_URL = 'https://jsonplaceholder.typicode.com/users';

// Function to fetch user data
async function fetchUsers() {
    try {
        // Show loading and hide error
        loadingElement.style.display = 'flex';
        errorElement.style.display = 'none';
        usersContainer.innerHTML = '';
        
        // Fetch data from API
        const response = await fetch(API_URL);
        
        // Check if response is OK
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        // Parse JSON response
        const users = await response.json();
        
        // Simulate network delay for demo purposes
        setTimeout(() => {
            // Hide loading
            loadingElement.style.display = 'none';
            
            // Update stats
            totalUsersElement.textContent = users.length;
            animateCounter(totalUsersElement, users.length);
            
            // Display users
            displayUsers(users);
        }, 1000);
        
    } catch (error) {
        // Hide loading and show error
        loadingElement.style.display = 'none';
        errorElement.textContent = `Failed to load user data: ${error.message}. Please check your internet connection and try again.`;
        errorElement.style.display = 'block';
        console.error('Error fetching users:', error);
    }
}

// Function to display users in the DOM
function displayUsers(users) {
    usersContainer.innerHTML = '';
    
    if (users.length === 0) {
        usersContainer.innerHTML = '<div class="loading">No users found.</div>';
        return;
    }
    
    users.forEach((user, index) => {
        const userCard = document.createElement('div');
        userCard.className = 'user-card';
        userCard.style.animationDelay = `${index * 0.1}s`;
        
        // Get initials for avatar
        const initials = user.name.split(' ').map(n => n[0]).join('').toUpperCase();
        
        // Format address
        const address = `${user.address.street}, ${user.address.suite}<br>${user.address.city}, ${user.address.zipcode}`;
        
        userCard.innerHTML = `
            <div class="user-avatar">${initials}</div>
            <h2 class="user-name">${user.name}</h2>
            <div class="user-username">
                <i class="fas fa-user"></i>
                @${user.username}
            </div>
            <div class="user-email">
                <i class="fas fa-envelope"></i>
                ${user.email}
            </div>
            <div class="user-address">
                <strong><i class="fas fa-map-marker-alt"></i> Address</strong>
                ${address}
            </div>
            <div class="user-contact">
                <div>
                    <i class="fas fa-phone"></i>
                    ${user.phone}
                </div>
                <a href="http://${user.website}" target="_blank" class="user-website">
                    <i class="fas fa-globe"></i>
                    Website
                </a>
            </div>
        `;
        
        usersContainer.appendChild(userCard);
    });
}

// Add animation to stats counter
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 30);
}

// Event listener for reload button
reloadBtn.addEventListener('click', fetchUsers);

// Event listener for filter button (placeholder functionality)
filterBtn.addEventListener('click', () => {
    alert('Filter functionality would be implemented here!');
});

// Initial fetch when page loads
document.addEventListener('DOMContentLoaded', fetchUsers);
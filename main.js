// Task 2: Fetch Tickets Using Async/Await and Handle Errors

async function fetchTickets() {
    // Get references to DOM elements for later use
    const ticketContainer = document.getElementById("ticket-container");
    const errorMessage = document.getElementById("error-message");
    const loadingIndicator = document.getElementById("loading-indicator"); // Task 4: Loading indicator reference

    // Show loading indicator at the start of the fetch process
    loadingIndicator.style.display = "block";

    try {
        // Fetch data from the Unresolved Tickets API
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        // Check if the response is successful (status in the range 200-299)
        if (!response.ok) {
            throw new Error("Failed to fetch tickets. Please try again later.");
        }

        // Parse the JSON response into an array of ticket objects
        const tickets = await response.json();

        // Check if tickets data is empty
        if (tickets.length === 0) {
            throw new Error("No tickets found.");
        }

        // Task 3: Display Tickets Dynamically on the Page
        
        // Loop through each ticket and create an HTML element to display its details
        tickets.forEach(ticket => {
            const ticketElement = document.createElement("div");
            ticketElement.className = "ticket"; // Set class for styling
            ticketElement.innerHTML = `
                <h3>Ticket ID: ${ticket.id}</h3>
                <p><strong>Customer Name:</strong> User ${ticket.userId}</p>
                <p><strong>Issue Description:</strong> ${ticket.title}</p>
                <p><strong>Details:</strong> ${ticket.body}</p>
                <hr>
            `;
            ticketContainer.appendChild(ticketElement); // Add the ticket element to the container
        });

    } catch (error) {
        // Display custom error message if fetch fails
        errorMessage.textContent = error.message; // Set the error message text
        errorMessage.style.display = "block"; // Show the error message
    } finally {
        // Ensure the loading indicator is hidden after the fetch operation
        loadingIndicator.style.display = "none"; // Hide loading indicator
    }
}

// Call the function to fetch and display tickets when the script runs
fetchTickets();

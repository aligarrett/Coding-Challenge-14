// Task 2: Fetch Tickets Using Async/Await and Handle Errors

async function fetchTickets() {
    const ticketContainer = document.getElementById("ticket-container");
    const errorMessage = document.getElementById("error-message");

    try {
        // Fetch data from the Unresolved Tickets API
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        // Check if response is successful
        if (!response.ok) {
            throw new Error("Failed to fetch tickets. Please try again later.");
        }

        const tickets = await response.json();

        // Check if tickets data is empty
        if (tickets.length === 0) {
            throw new Error("No tickets found.");
        }

// Task 3: Display Tickets Dynamically on the Page

        // Display tickets
        tickets.forEach(ticket => {
            const ticketElement = document.createElement("div");
            ticketElement.className = "ticket";
            ticketElement.innerHTML = `
                <h3>Ticket ID: ${ticket.id}</h3>
                <p><strong>Customer Name:</strong> User ${ticket.userId}</p>
                <p><strong>Issue Description:</strong> ${ticket.title}</p>
                <p><strong>Details:</strong> ${ticket.body}</p>
                <hr>
            `;
            ticketContainer.appendChild(ticketElement);
        });

    } catch (error) {
        // Display custom error message
        errorMessage.textContent = error.message;
        errorMessage.style.display = "block";
    }
}

// Call the function to fetch and display tickets
fetchTickets();
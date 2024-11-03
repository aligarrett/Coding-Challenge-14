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

        // Display tickets
        tickets.forEach(ticket => {
            const ticketElement = document.createElement("div");
            ticketElement.className = "ticket";
            ticketElement.innerHTML = `<h3>${ticket.title}</h3><p>${ticket.body}</p>`;
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

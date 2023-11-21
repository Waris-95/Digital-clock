let hrs = document.getElementById("hrs");
let mins = document.getElementById("mins");
let secs = document.getElementById("secs");

setInterval(() => {


    let currentTime = new Date();

    // console.log(currentTime.getHours());

    hrs.innerHTML = (currentTime.getHours() < 10?"0":"") + currentTime.getHours();
    mins.innerHTML = (currentTime.getMinutes() < 10?"0":"") + currentTime.getMinutes();
    secs.innerHTML = (currentTime.getSeconds() < 10?"0":"") + currentTime.getSeconds();
      },1000)

      // added functionality to switch between themes.
      document.getElementById('themeSwitcher').addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
    });

        // quote generator
        document.getElementById('refreshQuote').addEventListener('click', fetchQuote);

        async function fetchQuote() {
          // Create an options object containing HTTP method and URL for the API request
          const options = {
            method: 'GET',
            url: 'https://api.quotable.io/quotes/random',
          };
          
          // Start a try-catch block to handle potential errors in the async operation
          try {
            // Await the axios HTTP request using the defined options and store the response
            const response = await axios.request(options);
            // Log the entire response object to the console for debugging
            console.log(response);
            // Call 'displayQuote' function with the data part of the response object
            displayQuote(response.data);
          } catch (error) { // Catch block to handle any errors that occur in the try block
            // Log an error message to the console with details, if available, from the response or the error message
            console.error('Error fetching quote:', error.response ? error.response.data : error.message);
          }
        }
        
        // Add an event listener to the document that calls 'fetchQuote' when the DOM content is fully loaded
        document.addEventListener('DOMContentLoaded', fetchQuote);
        
        //'displayQuote' that updates the webpage with the quote data
        function displayQuote(data) {
          const quoteData = data[0];
          // Check if 'data' exists and has a 'content' property
          if (quoteData && quoteData.content) {
            // Find the element with ID 'dailyQuote' and set its text content to the quote content
            document.getElementById('dailyQuote').innerText = quoteData.content;
          } else { // If 'data' is missing or doesn't have 'content', display a default message
            document.getElementById('dailyQuote').innerText = "Quote not available";
          }
        }
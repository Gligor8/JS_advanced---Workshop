// Exercise 1

// CountrySearch

// CountrySearch is an application that is meant to search for countries and get data for them in real time. The application is very simple. It only has one functionality: Search and show the countries in a table.

// Requirements

// (=) There should be one search input to input name or partial name of a country
// (=) There should be a button for search to initiate
// (=) When the button is clicked, a table shows with the possible answers
// (=) The table shows:
//    <.> Flag
//    <.> Name
//    <.> Population
//    <.> Capital
//    <.> Area
// (=) The API for countries is: https://restcountries.eu/
// (=) Read the API documentation in order to figure out how to call for the countries


let inputField = document.getElementById("enterCountry").value


document.getElementById("src").addEventListener('click', function() {


    

    
    fetch('https://restcountries.eu/rest/v2/all')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
    });
    
        
    })
    
} false);
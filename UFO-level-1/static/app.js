//Assign data to a variable tableData

tableData = data;
var table = d3.select("tbody")

//Display all data
tableData.forEach((ufo) => {
    var row = table.append("tr");
    Object.values(ufo).forEach(value => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Select the button
var button = d3.select("#button");

// Select the form
var form_date = d3.select("#form-date");

// Create event handlers 
button.on("click", runEnter);
form_date.on("submit",runEnter);


// Complete the event handler function for the form
function runEnter() {

    // Clear table:
    table.html("");

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Get the value property of the input elements
   
    date = d3.select("#UFO-form-date").property("value");
  
    // Filter based on the user filter:

    function date_filter(ufo){
      if (date!=""){
        return ufo.datetime === date;
      }else{
        return true;
      }
    }

    filtered_data = tableData.filter(date_filter);
    
    filtered_data.forEach((ufo) => {
        var row = table.append("tr");
        Object.values(ufo).forEach(value => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
   
  };
  


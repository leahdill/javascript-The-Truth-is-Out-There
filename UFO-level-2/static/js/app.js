// from data.js
var tableData = data;

// YOUR CODE HERE!
var $tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputDateField = d3.select("#datetime");
var inputCityField = d3.select("#city");
var cols = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

var addData = (dataInput) => {
    dataInput.forEach(ufoSightings => {
        var row = $tbody.append("tr");
        cols.forEach(col => row.append("td").text(ufoSightings[col])
        )
    });
}

addData(tableData);

button.on("click", () => {
    d3.event.preventDefault();
    
    var inputDate = inputDateField.property("value").trim();
    var inputCity = inputCityField.property("value").toLowerCase().trim();
    var filterDates = tableData.filter(tableData => tableData.datetime === inputDate);
    var filterCity = tableData.filter(tableData => tableData.city === inputCity);
    var filterComboData = tableData.filter(tableData => tableData.datetime === inputDate && tableData.city === inputCity);

    $tbody.html("");

    let response = {
        filterDates, filterCity, filterComboData
    }
    if(response.filterComboData.length !== 0) {
        addData(filterComboData);
    }
        else if(response.filterComboData.length === 0 && ((response.filterDates.length !== 0 || response.filterCity.length !== 0))) {
            addData(filterDates) || addData(filterCity);
        }
        else {
            $tbody.append("tr").append("td").text("No Supernatural Events Here...Yet");
        }
})
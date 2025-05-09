document.addEventListener('DOMContentLoaded', function() {
    list();
});

function display_data(data) {
    const data_container = document.getElementById('data-container');
    
    // Displaying Data as Table
    innerHTMLstring = '<table><thead><tr><th>Product Name</th><th>Price</th><th>Description</th></tr></thead><tbody>';

    data.forEach(item => {
        console.log(innerHTMLstring);
        innerHTMLstring += '<tr><td>' + item.ProductName;
        innerHTMLstring += '</td><td>' + item.Price;
        innerHTMLstring += '</td><td>' + item.Description +'</td></tr>';
    });

    innerHTMLstring += '</tbody></table>';
    data_container.innerHTML = innerHTMLstring;
}


async function list() {
    // Connecting to Cloud
    const endpoint = '/data-api/rest/Person';
    const response = await fetch(endpoint);
    const data = await response.json();

    console.log(data); console.log(typeof(data));
    console.log(data.value); console.log(typeof(data.value));

    display_data(data.value);
    console.table(data.value);
}


async function add() {
    // Getting Entry Data from User
    prod_name = document.getElementById("ProdName").value;
    price = document.getElementById("Price").value;
    desc = document.getElementById("Description").value;

    if (prod_name == null || price == null || desc == null){
        console.log("Please enter required fields"); return;
    }

    const data = {
        ProductName: prod_name,
        Price: price,
        Description: desc,
    };

    // Connecting to Cloud
    const endpoint = `/data-api/rest/Person/`;
    const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });
    const result = await response.json();
    console.table(result.value);
}
document.addEventListener('DOMContentLoaded', function() {
    list();
});

function displayData(data) {
    const dataContainer = document.getElementById('data-container');
    
    dataContainer.innerHTML = '<table><thead><tr><th>Product Name</th><th>Price</th><th>Description</th></tr></thead><tbody></tbody></table>';
    //     <tr>
    //     <td>Data 1</td>
    //     <td>Data 2</td>
    //     <td>Data 3</td>
    // </tr>
    // <tr>
    //     <td>Data 4</td>
    //     <td>Data 5</td>
    //     <td>Data 6</td>
    // </tr>

    // data.forEach(item => {
    //     const dataItem = document.createElement('div');
    //     dataItem.classList.add('data-item');
    //     dataItem.textContent = `ProductId: ${item.ProductId}, ProductName: ${item.ProductName}, Price (in Dollars): ${item.Price}, Description: ${item.Description}`;
    //     dataContainer.appendChild(dataItem);
    // });
}


async function list() {
    const endpoint = '/data-api/rest/Person';
    const response = await fetch(endpoint);
    const data = await response.json();
    console.log(data); console.log(typeof(data));
    displayData(data.value);
    console.table(data.value);
}

async function add() {
    prod_name = document.getElementById("ProdName").value;
    price = document.getElementById("Price").value;
    desc = document.getElementById("Description").value;

    if (prod_name == null || price == null || desc == null){
        console.log("Please enter all fields"); return;
    }

    const data = {
      ProductName: prod_name,
      Price: price,
      Description: desc
    };

    const endpoint = `/data-api/rest/Person/`;
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    console.table(result.value);
}
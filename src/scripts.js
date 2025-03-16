document.addEventListener('DOMContentLoaded', function() {
    list();
});

function displayData(data) {
    const dataContainer = document.getElementById('data-container');
    
    dataContainer.innerHTML = '';

    data.forEach(item => {
        const dataItem = document.createElement('div');
        dataItem.classList.add('data-item');
        dataItem.textContent = `ProductId: ${item.ProductId}, ProductName: ${item.ProductName}, Price (in Dollars): ${item.Price}, Description: ${item.Description}`;
        dataContainer.appendChild(dataItem);
    });
}


async function list() {
    const endpoint = '/data-api/rest/Person';
    fetch(endpoint)
    .then(response => response.json())
    .then(data => {
        displayData(data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}

function trial(){
    console.log("Trial");
}

async function add() {
    console.log("Hello 3");
    prod_name = document.getElementById("ProdName").value;
    price = document.getElementById("Price").value;
    desc = document.getElementById("Price").value;

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
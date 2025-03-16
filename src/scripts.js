document.addEventListener('DOMContentLoaded', function() {
    list();
});

function displayData(data) {
    const dataContainer = document.getElementById('data-container');
    
    dataContainer.innerHTML = '';
    for (let key in data){
        item = data[key];
        console.log(item); console.log(item.ProductId);
        const dataItem = document.createElement('div');
        dataItem.classList.add('data-item');
        dataItem.textContent = `ProductId: ${item.ProductId}, ProductName: ${item.ProductName}, Price (in Dollars): ${item.Price}, Description: ${item.Description}`;
        dataContainer.appendChild(dataItem);
    }
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
    displayData(data);
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
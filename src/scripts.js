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
    // try {
    // const response = await fetch(endpoint);
    // const data = await response.json();
    // displayData(data)
    // console.table(data.value);
    // }
    // catch (error) {
    //     console.log("Error Fetching Data. Please try again after some time. If error persists, try contacting the website owner.")
    // }
}

function trial(){
    console.log("Trial");
}

async function add() {
    console.log("Hello 1");
    // const data = {
    //   Name: "Pedro"
    // };

    // const endpoint = `/data-api/rest/Person/`;
    // const response = await fetch(endpoint, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data)
    // });
    // const result = await response.json();
    // console.table(result.value);
}
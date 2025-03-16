document.addEventListener('DOMContentLoaded', function() {
    list();
});

function displayData(data) {
    const dataContainer = document.getElementById('data-container');
    
    dataContainer.innerHTML = '';
    data = JSON.parse(data)
    // Iterate over the data and create HTML elements to display it
    data.forEach(
        item => {
        const dataItem = document.createElement('div');
        dataItem.classList.add('data-item');
        dataItem.textContent = `ID: ${item.id}, Name: ${item.name}, Age: ${item.age}`;
        dataContainer.appendChild(dataItem);
    }
    );
}


async function list() {
    const endpoint = '/data-api/rest/Person';
    // try {
    const response = await fetch(endpoint);
    const data = await response.json();
    displayData(data)
    console.table(data.value);
    // }
    // catch (error) {
    //     console.log("Error Fetching Data. Please try again after some time. If error persists, try contacting the website owner.")
    // }
}

function trial(){
    console.log("Trial");
}

async function add() {
    console.log("Hi 2");
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
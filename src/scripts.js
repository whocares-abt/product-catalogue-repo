const { BlobServiceClient, ContainerClient} = require("@azure/storage-blob");

const accountName = "catalogueblob";
const sasToken = "@env('BLOB_SAS_TOKEN')";
const accountURL = `https://${accountName}.blob.core.windows.net?${sasToken}`;
const blobServiceClient = new BlobServiceClient(accountURL);
const blobContainerClient = new ContainerClient(accountURL);

async function uploadBlobFromReadStream(containerClient, blobName, localFilePath) {
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);
    console.log("HELLO");
    await blockBlobClient.uploadFile(localFilePath);
}

uploadBlobFromReadStream(blobContainerClient, 'TrialImg', 'Trial');

document.addEventListener('DOMContentLoaded', function() {
    list();
});

function display_data(data) {
    const data_container = document.getElementById('data-container');
    
    // Displaying Data as Table
    innerHTMLstring = '<table><thead><tr><th>Product Name</th><th>Price</th><th>Description</th><th>Product Image</th></tr></thead><tbody>';

    data.forEach(item => {
        console.log(innerHTMLstring);
        innerHTMLstring += '<tr><td>' + item.ProductName;
        innerHTMLstring += '</td><td>' + item.Price;
        innerHTMLstring += '</td><td>' + item.Description; 
        innerHTMLstring += '</td><td>' + item.BlobURL;'</td></tr>';
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

async function generate_blob(prod_img){
    blob_url = 0;

    return blob_url;
}

async function add() {
    // Getting Entry Data from User
    prod_name = document.getElementById("ProdName").value;
    price = document.getElementById("Price").value;
    desc = document.getElementById("Description").value;
    prod_img = document.getElementById("ProdImage").value;

    blob_url = "";
    if (prod_img != null){blob_url = generate_blob(prod_img);}

    if (prod_name == null || price == null || desc == null){
        console.log("Please enter required fields"); return;
    }

    const data = {
        ProductName: prod_name,
        Price: price,
        Description: desc,
        BlobURL: blob_url
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
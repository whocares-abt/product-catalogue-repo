async function list() {
    const endpoint = '/data-api/rest/Person';
    const response = await fetch(endpoint);
    const data = await response.json();
    console.table(data.value);
}

function trial(){
    console.log("Trial");
}

async function create() {

    const data = {
      Name: "Pedro"
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
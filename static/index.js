function init() {
    // get the current state
    fetch('/api/v1/switch')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            document.getElementById("currentProductionColor").textContent = data.current;
        });
    
    document.getElementById("btnSwitch").addEventListener("click", btnSwitch_clicked);

}

function btnSwitch_clicked(){
    // get the current state
    fetch('/api/v1/switch', {method: "PUT"})
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            document.getElementById("currentProductionColor").textContent = data.current;
        });
}

function calculateDesired()
{
    const desired = document.getElementById("desiredMonthly").value;
    let ownerShip = document.getElementById("ownershipPercent").value;
    ownerShip = ownerShip/100;
    document.getElementById("results").style.visibility = "visible";
    calculateDesiredA(desired,ownerShip);
    calculateDesiredB(desired,ownerShip);
}
function calculate()
{
    const sale = document.getElementById("salePrice").value;
    let ownerShip = document.getElementById("own").value;
    ownerShip = ownerShip/100;
    document.getElementById("results").style.visibility = "visible";
    calculateASale(sale,ownerShip);
    calculateBSale(sale,ownerShip);
}
function calculateASale(sale,ownerShip)
{
    let result = ((sale * ownerShip * .03)/12).toFixed(2);
    document.getElementById("option1Low").innerHTML = result;
    result = ((sale * ownerShip * .04)/12).toFixed(2);
    document.getElementById("option1High").innerHTML = result;
}
function calculateBSale(sale,ownerShip)
{
    let result = ((sale * ownerShip * .07)/12).toFixed(2);
    document.getElementById("option2Low").innerHTML = result;
    result = ((sale * ownerShip * .10)/12).toFixed(2);
    document.getElementById("option2High").innerHTML = result;
}

function calculateDesiredA(desired,ownerShip)
{
    let result = ((((desired * 12))/ownerShip)/.03).toFixed(2);
    document.getElementById("option1High").innerHTML = result;
    result = (((desired * 12)/ownerShip)/.04).toFixed(2);
    document.getElementById("option1Low").innerHTML = result;

}
function calculateDesiredB(desired,ownerShip)
{
    let result = ((((desired * 12))/ownerShip)/.07).toFixed(2);
    document.getElementById("option2High").innerHTML = result;
    result = ((((desired * 12))/ownerShip)/.10).toFixed(2);
    document.getElementById("option2Low").innerHTML = result;
}

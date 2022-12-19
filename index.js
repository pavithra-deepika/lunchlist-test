let lunchList = [
    {
        Name: "briyani",
        Ingredient1: "chicken",
        Ingredient2: "chicken powder"
    },
    {
        Name: "fried Rice",
        Ingredient1: "carrot",
        Ingredient2: "beans"
    },
    {
        Name: "curd Rice",
        Ingredient1: "curd",
        Ingredient2: "salt"
    }
];


// Show Function

let tableBodyElement = document.getElementById("table");

let currentIndex = -1;

function showLunchlist(item) {
    let trElement = document.createElement("tr")
    trElement.className='my-2'
    output = `
      <td>${item.Name}</td>
      <td>${item.Ingredient1}</td>
      <td>${item.Ingredient2}</td>
    `

    let editBtn = document.createElement("button")
    editBtn.innerHTML = "Edit"
    editBtn.className = 'btn btn-success add-btn'
    editBtn.onclick = () => editLunch(item);

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete"
    deleteBtn.className = 'btn btn-danger add-btn'
    deleteBtn.onclick = () => deleteLunch(item);

    trElement.innerHTML += output
    trElement.appendChild(editBtn);
    trElement.appendChild(deleteBtn);

    tableBodyElement.appendChild(trElement);
}


function showData() {
    tableBodyElement.innerHTML = "";
    lunchList.map((item) => showLunchlist(item));

}
showData();

// clear all fields

function clearData() {
    document.getElementById("name").value = "";
    document.getElementById("ingredient1").value = "";
    document.getElementById("ingredient2").value = "";
}

// Add Function

function addData() {
    let name = document.getElementById("name").value;
    let firstIng = document.getElementById("ingredient1").value;
    let secondIng = document.getElementById("ingredient2").value;

    if (name && firstIng && secondIng) {

        if (currentIndex === -1) {
            // add lunch flow
            lunchList.push({ Name: name, Ingredient1: firstIng, Ingredient2: secondIng })
        }
        else {
            // edit lunch flow
            lunchList[currentIndex] = { Name: name, Ingredient1: firstIng, Ingredient2: secondIng }
        }

        showData();
        clearData();
    } 
    else {
        window.alert('enter all details')
    }

}

// Edit Function

function editLunch(item) {
    document.getElementById("name").value = item.Name;
    document.getElementById("ingredient1").value = item.Ingredient1;
    document.getElementById("ingredient2").value = item.Ingredient2;


    currentIndex = lunchList.findIndex(ele => ele.Name === item.Name);
}
// Delete Function

function deleteLunch(item) {

    currentIndex = lunchList.findIndex(ele => ele.Name === item.Name);
    lunchList.splice(currentIndex, 1);
    showData();
}

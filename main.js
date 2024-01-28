document.getElementById("addButton").addEventListener("click", function () {
    let imageUrl = document.getElementById("imageInput").value;
    let firstName = document.getElementById("firstNameInput").value;
    let lastName = document.getElementById("lastNameInput").value;

    let div = document.createElement("div");
    let img = document.createElement("img");
    let text = document.createElement("p");

    img.src = imageUrl;
    text.innerText = firstName + " " + lastName;

    div.append(img);
    div.append(text);

    document.getElementById("output").append(div);
});

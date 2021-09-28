$("#addButton").on("click", function(event) {
    event.preventDefault()

    var listElement = document.createElement("li")
    var item = document.createElement("p")
    var checkButton = document.createElement("button")
    var deleteButton = document.createElement("button")

    item.textContent = document.getElementById("newText").value
    item.id = "item"
    checkButton.textContent = "Check"
    checkButton.id = "check"
    checkButton.className = "checar"
    deleteButton.textContent = "Delete"
    deleteButton.id = "delete"
    deleteButton.className = "del"
    listElement.className = "lis"
    listElement.appendChild(item)
    listElement.appendChild(checkButton)
    listElement.appendChild(deleteButton)
    $("#list").append(listElement)

    $("#newText").val("")
})

$("#list").on("click", "#check", function() {
    $(this).prev().toggleClass("done")
})

$("#list").on("click", "#delete", function() {
    $(this).parent().remove()
})

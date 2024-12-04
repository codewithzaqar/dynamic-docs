// Function to simulate saving the document
document.getElementById('saveButton').addEventListener('click', function() {
    const docTitle = document.getElementById('documentTitle').value
    const docContent = document.getElementById('editor').innerHTML

    if (docTitle.trim() === "") {
        alert("Please enter a document title!")
        return
    }

    // In a real application, you would send this data to an API
    console.log("Document saved!")
    console.log("Title: " + docTitle)
    console.log("Content: " + docContent)

    // Simulate saving the data to local storage (or backend in real use)
    localStorage.setItem("documentTitle", docTitle)
    localStorage.setItem("documentContent", docContent)

    alert("Document saved!")
})

// Function to load saved data (if any)
window.onload = function() {
    const savedTitle = localStorage.getItem("documentTitle")
    const savedContent = localStorage.getItem("documentContent")

    if (savedTitle) {
        document.getElementById('documentTitle').value = savedTitle
    }
    if (savedContent) {
        document.getElementById('editor').innerHTML = savedContent
    }
}
// Save the document content
document.getElementById('saveButton').addEventListener('click', function() {
    const docTitle = document.getElementById('documentTitle').value;
    const docContent = document.getElementById('editor').innerHTML;

    if (docTitle.trim() === "") {
        alert("Please enter a document title!");
        return;
    }

    // Simulate saving the data to local storage
    localStorage.setItem("documentTitle", docTitle);
    localStorage.setItem("documentContent", docContent);

    alert("Document saved!");
});

// Load saved data on page load
window.onload = function() {
    const savedTitle = localStorage.getItem("documentTitle");
    const savedContent = localStorage.getItem("documentContent");

    if (savedTitle) {
        document.getElementById('documentTitle').value = savedTitle;
    }
    if (savedContent) {
        document.getElementById('editor').innerHTML = savedContent;
    }
};

// Clear the editor and title
document.getElementById('clearButton').addEventListener('click', function() {
    document.getElementById('editor').innerHTML = ""
    document.getElementById('documentTitle').value = ""
})

// Bold, Italic, Underline, Strikethrough Button Functions
document.getElementById('boldButton').addEventListener('click', function() {
    document.execCommand('bold');
});

document.getElementById('italicButton').addEventListener('click', function() {
    document.execCommand('italic');
});

document.getElementById('underlineButton').addEventListener('click', function() {
    document.execCommand('underline');
});

document.getElementById('strikethroughButton').addEventListener('click', function() {
    document.execCommand('strikeThrough')
})

// Subscript and Superscript Buttons
document.getElementById('subscriptButton').addEventListener('click', function() {
    document.execCommand('subscript')
})

document.getElementById('superscriptButton').addEventListener('click', function() {
    document.execCommand('superscript')
})

// Text alignment buttons
document.getElementById('alignLeftButton').addEventListener('click', function() {
    document.execCommand('justifyLeft');
});

document.getElementById('alignCenterButton').addEventListener('click', function() {
    document.execCommand('justifyCenter');
});

document.getElementById('alignRightButton').addEventListener('click', function() {
    document.execCommand('justifyRight');
});

// Font size selector
document.getElementById('fontSizeSelect').addEventListener('change', function(event) {
    const fontSize = event.target.value;
    document.execCommand('fontSize', false, 3);  // Set a larger font size for effect
    const selectedElement = window.getSelection().anchorNode;
    if (selectedElement) {
        selectedElement.style.fontSize = fontSize;
    }
});

// Text and Background color
document.getElementById('textColor').addEventListener('input', function(event) {
    document.execCommand('foreColor', false, event.target.value);
});

document.getElementById('bgColor').addEventListener('input', function(event) {
    document.execCommand('backColor', false, event.target.value);
});

// show and hide navbar


document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".toggle-sidebar-btn");
    
    if (toggleButton) {
        toggleButton.addEventListener("click", function () {
            document.body.classList.toggle("toggle-sidebar");
        });
    }
});

// timepicker code in modal

function clearTime(inputId) {
    var inputElement = document.getElementById(inputId);
    if (inputElement) {
        inputElement.value = "";
    } else {
        console.error("Element with ID '" + inputId + "' not found.");
    }
}


// modal graph and buttons code 
function showSection(sectionId, modalId) {
    let modal = document.getElementById(modalId);
    if (modal) {
        modal.querySelector("#graph").style.display = sectionId === "graph" ? "block" : "none";
        modal.querySelector("#table").style.display = sectionId === "table" ? "block" : "none";
    } else {
        console.error("Modal not found with ID:", modalId);
    }
}

// custom dropdown functionality

document.addEventListener("DOMContentLoaded", function () {
    var menuBtn = document.getElementById("menu-btn");
    var dropdownMenu = document.getElementById("dropdown-menu");

    // Toggle dropdown visibility
    menuBtn.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent closing immediately
        dropdownMenu.style.display = (dropdownMenu.style.display === "block") ? "none" : "block";
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!menuBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = "none";
        }
    });
});

// function updateDropdownText(buttonId, text) {
//     const button = document.getElementById(buttonId);
//     const textSpan = button.querySelector("span.d-flex span:nth-child(2)");
//     if (textSpan) {
//         textSpan.innerText = text;
//     }
// }

function updateDropdownText(buttonId, text) {
    const button = document.getElementById(buttonId);

    // Case 1: Plain button with just text (like "OTD" dropdown)
    const directTextNode = Array.from(button.childNodes).find(node => node.nodeType === 3 && node.nodeValue.trim() !== '');
    if (directTextNode) {
        directTextNode.nodeValue = text + ' ';
        return;
    }

    // Case 2: Calendar button (icon + text + chevron)
    // Text is inside: <span class="d-flex"> <span class="icon"></span> <span>Today</span> </span>
    const textSpan = button.querySelector("span.d-flex span:nth-child(2)");
    if (textSpan) {
        textSpan.innerText = text;
        return;
    }

    console.warn(`updateDropdownText: Unable to find text span or text node for #${buttonId}`);
}





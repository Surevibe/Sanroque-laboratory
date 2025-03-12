// Function para sa dropdown for patient,healthcare,labManager,business
document.getElementById('patientButton').addEventListener('click', function() {
    document.getElementById('patientContent').classList.toggle('hidden');
});

document.getElementById('healthcareButton').addEventListener('click', function() {
    document.getElementById('healthcareContent').classList.toggle('hidden');
});

document.getElementById('labManagerButton').addEventListener('click', function() {
    document.getElementById('labManagerContent').classList.toggle('hidden');
});

document.getElementById('businessButton').addEventListener('click', function() {
    document.getElementById('businessContent').classList.toggle('hidden');
});

// Function para i-load ang Find Directions
function openGoogleMaps() {
    window.open("https://www.google.com/maps/dir/?api=1&destination=Lemery+Doctors+Medical+Center", "_blank");
}

// Get elements
    const openModal = document.getElementById("openModal");
    const closeModal = document.getElementById("closeModal");
    const scheduleModal = document.getElementById("scheduleModal");

    // Open Modal
    openModal.addEventListener("click", () => {
        scheduleModal.classList.remove("hidden");
    });

    // Close Modal
    closeModal.addEventListener("click", () => {
        scheduleModal.classList.add("hidden");
    });

    // The Latest From Quest
    function openTab(event, tabName) {
        var i, tabContent, tabButtons;
    
        tabContent = document.getElementsByClassName("tab-content");
        for (i = 0; i < tabContent.length; i++) {
            tabContent[i].style.display = "none";
        }
    
        tabButtons = document.getElementsByClassName("tab-btn");
        for (i = 0; i < tabButtons.length; i++) {
            tabButtons[i].classList.remove("active");
        }
    
        document.getElementById(tabName).style.display = "grid";
        event.currentTarget.classList.add("active");
    }
    

    
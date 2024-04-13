function showTab(tabId, element) {
    var tabs = document.getElementsByClassName('tab');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
    }
    document.getElementById(tabId).classList.add('active');

    var sidebarTabs = document.querySelectorAll('#sidebar ul li');
    for (var i = 0; i < sidebarTabs.length; i++) {
        sidebarTabs[i].classList.remove('active');
    }
    element.classList.add('active');
}

function toggleSubtabs(parentTabId, element) {
    var subtabs = document.getElementById(parentTabId + 'Subtabs');
    var openBracket = document.getElementById('openBracket');
    var closeBracket = document.getElementById('closeBracket');
    if (subtabs.style.display === 'none') {
        subtabs.style.display = 'block';
        closeBracket.style.display = 'block'; // Show the close bracket
        openBracket.innerHTML = '{'; // Change open bracket to '{'
    } else {
        subtabs.style.display = 'none';
        closeBracket.style.display = 'none'; // Hide the close bracket
        openBracket.innerHTML = '{ }'; // Change open bracket to '{ }'
    }

    var sidebarTabs = document.querySelectorAll('#sidebar ul li');
    for (var i = 0; i < sidebarTabs.length; i++) {
        sidebarTabs[i].classList.remove('active');
    }
    element.classList.add('active');
}

window.onload = function() {
    var subtabs = document.getElementsByClassName('subtabs');
    for (var i = 0; i < subtabs.length; i++) {
        subtabs[i].style.display = 'none';
    }
    var closeBracket = document.getElementById('closeBracket');
    closeBracket.style.display = 'none'; // Hide the close bracket on load

    var openBracket = document.getElementById('openBracket');
    openBracket.innerHTML = '{ }'; // Set the open bracket to '{ }' on load
}
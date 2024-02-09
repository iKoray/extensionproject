document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('scanButton').addEventListener('click', function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            var activeTab = tabs[0];
            chrome.tabs.sendMessage(activeTab.id, {action: "startScan"}, function(response) {
                if(response && response.insecure) {
                    alert('Insecure forms found: ' + response.count + ' on ' + activeTab.url);
                } else {
                    alert('No insecure forms found on ' + activeTab.url);
                }
            });
        });
    });
});

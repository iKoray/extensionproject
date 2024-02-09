document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('scanButton').addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {action: "startScan"}, function(response) {
              if(response && response.insecure) {
                  alert('Insecure forms found: ' + response.count);
              } else {
                  alert('No insecure forms found.');
              }
          });
      });
    });
  });
  
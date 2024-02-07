chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "startScan") {
        let forms = document.getElementsByTagName('form');
        let insecureForms = Array.from(forms).filter(form => form.action.startsWith('http://'));
        
        if (insecureForms.length > 0) {
            // If insecure forms are found, you can send this information back to the popup or take an action directly here
            console.log('Insecure forms found!');
            sendResponse({insecure: true, count: insecureForms.length});
        } else {
            console.log('No insecure forms found.');
            sendResponse({insecure: false});
        }
    }
    return true; // keep the messaging channel open for the response
});



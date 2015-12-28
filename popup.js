chrome.browserAction.onClicked.addListener(function (tab) {
	var ytValue = tab.url.match(new RegExp("(https?).*[\?\&]v=([^\&]*)(\&?)", "i"));
	var lol = RegExp('lolesports');
	var url = '';

	if (ytValue !== null) {
		var protocol = ytValue[1];
		var id = ytValue ? ytValue[2] : ytValue;
		url = protocol + '://youtube.com/embed/' + id;

	} else if (lol.test(tab.url)) {
		chrome.tabs.executeScript(tab.id, {
			file: "lolUrl.js"
			}
		);

	} else {
		alert("ERROR: Website not supported or there's no video in this page.");
	}
	
	if (url !== '') {
		var win = window.open(url, '_blank');
		win.focus();
	}
});
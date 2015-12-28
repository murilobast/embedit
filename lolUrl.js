var href = window.location.href;
var reg = RegExp('lolesports');

if (reg.test(href)) {
	var url = document.querySelector('#vod-modal iframe').getAttribute('src');
	if (url !== null) {
		var win = window.open(url, '_blank');
		win.focus();
	} else {
		alert("Open an embed video first.");
	}
}
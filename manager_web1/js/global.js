// baseurl定义
var httpUserBaseURL = 'http://www.renxl.club/user'
var httpArticleBaseURL = 'http://www.renxl.club/article'
var httpsUserBaseURL = 'https://www.renxl.club/user'
var httpsArticleBaseURL = 'https://www.renxl.club/article'

var baseUrl = 'http://127.0.0.1:8951/schoolManager/'












/**
 * 时间戳转时间
 * @param {Object} timestamp
 */
function timeStampToDate(timestamp) {
	var unixTimestamp = new Date(timestamp);
	commonTime = unixTimestamp.toLocaleString();
	return commonTime
}

function secutity() {
	try {　　
		top.location.hostname;　　
		if(top.location.hostname != window.location.hostname) {　　　　
			top.location.href = window.location.href;　　
		}
	} catch(e) {　　
		top.location.href = window.location.href;
	}
}
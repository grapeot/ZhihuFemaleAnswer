chrome.browserAction.onClicked.addListener(function(tab) {
    var url = tab.url;
    if (/zhihu.com\/question/.exec(url) == null) {
        alert('该插件只能在知乎问题页面上使用。请确认您所在的页面不是某个具体答案的页面或者您的时间线。');
    }
    else {
        chrome.tabs.executeScript(null, {
            file: 'removeNonfemale.js'
        });
    }
});

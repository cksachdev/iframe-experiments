### Iframe updating files view
```
jQuery.noConflict();

jQuery('.icon.file').each(function(event) {
    var btn = jQuery(`<button onClick="getHref('${this.href}')">${this.parentElement.dataset.value}</button>`);
    btn.appendTo(this.parentElement);
});

function getHref(href) {
    alert(href);
    window.parent.postMessage(href, "*");
}


window.addEventListener('message', function (event) {
    alert(`Data received ${event.data}`);
}, false);
```

## Using Brave for experiments
```
open -na /Applications/Brave\ Browser.app/ --args --user-data-dir= --disable-web-security --disable-site-isolation-trials
```
https://stackoverflow.com/questions/35432749/disable-web-security-in-chrome-48
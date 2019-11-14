jQuery.noConflict();
var linkArray = [];
function getHref() {
    console.log(linkArray);
    window.parent.postMessage(linkArray, '*');
}
function getVideos() {
    jQuery('.icon.file').each(function(event) {
        var fileName = this.parentElement.dataset.value;
        var ext = fileName.substr(fileName.lastIndexOf('.') + 1);
        if(ext == 'mp4' || ext == 'MP4') {
            linkArray.push({src: this.href, name: fileName});
        }
    });
    getHref();
}
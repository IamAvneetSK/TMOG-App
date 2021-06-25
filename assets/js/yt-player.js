$(document).ready(function() {
    var ytVideo = [];
    $.ajax({
    url: 'https://cors-anywhere.herokuapp.com/https://www.youtube.com/feeds/videos.xml?channel_id=UCq6e2nuNB3LMIMOgeV2ReFA',
    success: function(respj){
        console.log("respj", respj);
        respj = respj.getElementsByTagName("entry");
        $.each(respj, function(index, val) {
            ytVideo[index] = {
                "videoId":val.children[1].innerHTML,
                "title":val.children[3].innerHTML,
                "published":val.children[6].innerHTML
            };
        });
        setVideoCards(ytVideo);
    }
    });
});
function setVideoCards(ytVideo) {
var index = 0;
for (var i = 0; i <= 15; i++) {
    $("#ytframe").append('<div id="cplay" class="col-md-3"><iframe src="https://www.youtube.com/embed/'+ytVideo[i].videoId+'" allowfullscreen></iframe><p>'+ytVideo[i].title+'</p><p>'+ytVideo[i].published+'</p></div>');
}
}
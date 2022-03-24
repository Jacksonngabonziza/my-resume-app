// Put your channel id here and you are good to go
var channelID = "UCeLjtIGPExUN80nZJVJ8izQ";
tutorials = $.getJSON('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3D' + channelID);
console.log(tutorials['items'])
$.getJSON('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3D' + channelID, function (data) {
// change the number how many video you want from your feed
    for (i = 0; i < Object.keys(tutorials).length; i++) {
        output = ""
        var title = data.items[i].title;
        var link = data.items[i].link;
        var id = link.substr(link.indexOf("=") + 1);
        output += `<div class="videos__content grid swiper-slide">`;
        output += `<img src="${data.items[i].thumbnail}" class="videos__img" alt="Cover image">`;
        output += `<div class="videos__data">`;
        output += `<h3 class="videos__title">${title}</h3>`;
        output += `<a href="${link}" class="button button--flex button--small videos__button">`;
        output += `Play video <i class="uil uil-play button__icon"></i></a>`;
        output += '</div></div>';
        console.log(output)
        $('#youtube-videos').append(output);
    }
});

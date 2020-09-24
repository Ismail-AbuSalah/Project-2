const list = $(".list");

const videoTitle = $(".title");

videoTitle.text(`${videos[0].title}`);

const frame = $("iframe")

videos.forEach ((video) => {
    const more = $(`<span class='jj'>                 
        <img width=50% height=100% src=${video.thumbnail}><p>${video.title}</p></span>`);          
    list.append(more);  
    more.click( () => {
        videoTitle.text(`${video.title}`);
        more.css("display","none")
    })
    more.click( () => {
        frame.attr(`src`,`https://www.youtube.com/embed/${video.id}`);
    })
    
});
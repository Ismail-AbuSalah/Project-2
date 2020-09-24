
// Selecting document elemnt using Jquery  
const list = $(".list");
const videoTitle = $(".title");

// update the first video from array on load page.
$("iframe").attr(`src`,`https://www.youtube.com/embed/${videos[0].id}`);
videoTitle.text(`${videos[0].title}`);

// Iterate over array to create a span for each video inculdes the img&title
videos.forEach ((video) => {
    const more = $(`<span class='jj'>                 
        <img width=50% height=100% src=${video.thumbnail}><p>${video.title}</p></span>`);          
    list.append(more);
    
    // on click ( update title & disply to none & src to new one)
    more.click( () => {
    videoTitle.text(`${video.title}`);
    more.css("display","none")
    })
    more.click( () => {
        $("iframe").attr(`src`,`https://www.youtube.com/embed/${video.id}`);
    })
    
});
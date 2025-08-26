function card(title, viwes, month, duration, thumbnail, cname) {
    let viewstr
    if (viwes >= 1000000) {
        viewstr = (viwes / 100000 + "M")
    }
    else if (viwes >= 100000) {
        viewstr = (viwes / 10000 + "K")
    }
    else if (viwes >= 1000) {
        viewstr = (viwes / 1000 + "K")
    }
    else {
        viewstr = viwes
    }

    let html = `
    <div class="container">
        <div class="img">
            <img src="${thumbnail}" 
             alt = "">
                         <span class="capsule">
                ${duration}
            </span>
        </div>
        <div class="txt">
            <b>${title}</b>
            <p>${cname} . ${viewstr} views  . ${month} months ago</p>
        </div>
    </div>`

    document.querySelector("body").innerHTML += html

}

card("JavaScript Exercise 13 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #77", 1563256, 4, "34:89", "https://i.ytimg.com/vi/UzYRQURh_pY/hq720.jpg?sqp=-oaymwEnCOgCEMoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBLQFA5sbRClQ1PY-7KaWBDlu_p5w", "ABDUL RAFAY")

card("JavaScript Exercise 8 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #77", 156, 4, "3:89", "https://i.ytimg.com/vi/UzYRQURh_pY/hq720.jpg?sqp=-oaymwEnCOgCEMoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBLQFA5sbRClQ1PY-7KaWBDlu_p5w", "ABDUL ")

card("JavaScript Exercise 8 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #87", 156000, 15, "375:89", "https://i.ytimg.com/vi/UzYRQURh_pY/hq720.jpg?sqp=-oaymwEnCOgCEMoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBLQFA5sbRClQ1PY-7KaWBDlu_p5w", "ABDUL rafay")
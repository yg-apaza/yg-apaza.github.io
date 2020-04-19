fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@yuli.apaza')
   .then((res) => res.json())
   .then((data) => {
        const res = data.items;
        const posts = res.filter(item => item.categories.length > 0);
        var mediumPostList = document.getElementById("medium-posts");
        posts.forEach((mp) => {
            content = mp.content.replace(/<\/?[^>]+(>|$)/g, "").substring(0,250) + " ...";
            tags = "";
            mp.categories.forEach((c) => {
                tags = tags + `<li>${c}</li>`
            });
            mediumPostList.insertAdjacentHTML( 'beforeend',
                `<li>
                    <a class="post-link" href="${mp.link}" target="_blank">
                        <h2>${mp.title}</h2>
                    </a>
                    <div class="post-meta">
                        <ul class="post-categories">
                            ${tags}
                        </ul>
                        <div class="post-date"><i class="icon-calendar"></i>${mp.pubDate.substring(0,10)}</div>
                    </div>
                    <div class="post">
                        ${content}
                    </div>
                </li>`
            );
        });
    });
const prep = document.querySelector('#prep');
const spinner = document.querySelector('#spinner');

fetch('https://www.btpstesting.com/wp-json/wp/v2/posts?categories=22&_embed')
    .then((res) => {
        return res.json();
    })
    .then((j) => {

        j.reverse();

        spinner.classList.add('stop');
        spinner.classList.remove('loading');

        j.forEach((el) => {

            const featuredImage = el._embedded['wp:featuredmedia'];

            featuredImage.forEach((imgRes) => {

                prep.innerHTML += `                
                
                <div class="col-sm-6 col-md-4 col-lg-4 set-id">
                    <div class="thumbnail" id="prep">
                        <img src="${imgRes.source_url}" alt="...">
                        <div class="caption">
                            <h3 style="text-align: center">${el.title.rendered}</h3>
                            <p>${el.content.rendered}</p>
                            <a type="button" class="btn btn-primary btn-lg btn-block" href="http://www.btpstesting.com/prepsessions/${el.title.rendered}">Learn more...</a>
                        </div>
                    </div>
                </div>   

                `;
            });

        });

    })
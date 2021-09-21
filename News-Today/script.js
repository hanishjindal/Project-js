let newsAccordion = document.getElementById("newsAccordion");
let newsHtml = "";

const xhr = new XMLHttpRequest();
xhr.open("GET", `news.json`, true);
xhr.onreadystatechange = news2;
xhr.send();

function news1() {
  if (xhr.readyState === 4 && this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    articles.forEach((news, index) => {
      let newz = `
                  <div class="card">
                              <div class="card-header" id="heading${index}">
                                  <h2 class="mb-0">
                                  <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                      aria-expanded="false" aria-controls="collapse${index}">
                                     <b>Breaking News ${index + 1}:</b> ${
        news["title"]
      }
                              </button>
                          </h2>
                      </div>
  
                      <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}"
                          data-parent="#newsAccordion">
                          <center><img src="${news["urlToImage"]}"/></center>
                          <div class="card-body">
                              ${news["content"]}. <a href="${
        news["url"]
      }" target="_blank">Read more here</a>
                          </div>
                      </div>
                  </div>
                  `;
      newsHtml += newz;
    });
    newsAccordion.innerHTML = newsHtml;
  }
}
function news2() {
  if (xhr.readyState === 4 && this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    let newsHtml = "";
    articles.forEach((news, index) => {
      let newz = `
        <div class="noteCard card my-2 mx-2" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${index + 1}- ${news["title"]}</h5>
                <img class="img-fluid" src="${news["urlToImage"]}" />
                <p class="card-text">${news["content"]}. <a href="${
        news["url"]
      }" target="_blank">Read more here</a></p>
            </div>
        </div>
        `;
      newsHtml += newz;
    });
    newsAccordion.innerHTML = newsHtml;
  }
}

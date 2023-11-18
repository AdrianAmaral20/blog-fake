// https://jsonplaceholder.typicode.com/posts

async function readPosts() {
  const postArea = document.querySelector('.posts');
  postArea.innerHTML = 'Carregando...';

  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const json = await response.json();

  if(json.length > 0) {
    postArea.innerHTML = '';

    for(let i in json) {
      let postHtml = `
        <div>
          <h1>${json[i].title}</h1>
          ${json[i].body}
          <hr/>
        </div>
      `;
      postArea.innerHTML += postHtml;
    }
  } else {
    postArea.innerHTML = 'Nenhum post para exibir.'
  }
}

readPosts();
async function pegaImagens() {
  const imagensJSON = await fetch('https://picsum.photos/v2/list?limit=1000')
  const imagens = await imagensJSON.json()
  return imagens
}

async function renderizaImagens() {
  const ulTag = document.querySelector('ul')
  const imagens = await pegaImagens()

  imagens.forEach(imagem => {
      ulTag.insertAdjacentHTML("beforeend", `
          <li>
              <img data-src=${imagem.download_url} alt=${imagem.author}>
          </li>
      `)
  })
}

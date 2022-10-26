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

const imgTags = document.querySelectorAll("img[data-src]") 

async function adicionaIntersectionAsImagens() {
  await renderizaImagens() 
  
  const imgTags = document.querySelectorAll("img[data-src]")

  imgTags.forEach(imgTag => {
      let intersectionObserver = new IntersectionObserver((entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
					// Puxa a URL da imagem que guardamos em data-src, e passa para src
          imgTag.src = imgTag.getAttribute("data-src")
        }
      })

      intersectionObserver.observe(imgTag)
  })
}

adicionaIntersectionAsImagens()

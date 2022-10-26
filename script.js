async function pegaImagens() {
  const imagensJSON = await fetch('https://picsum.photos/v2/list?limit=1000')
  const imagens = await imagensJSON.json()
  return imagens
}

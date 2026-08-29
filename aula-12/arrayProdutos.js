const produtos = [
  {
    nome: "Notebook",
    preco: 3500,
    categoria: "Eletrônicos",
    imagem: "https://images.kabum.com.br/produtos/fotos/sync_mirakl/895426/xlarge/Notebook-Lenovo-Ideapad-Slim-3-15irh10-Intel-Core-i5-13420h-8GB-512gb-SSD-Linux-15-3-83nss00000-Luna-Grey_1784923148.jpg",
  },
  {
    nome: "Smartphone",
    preco: 1800,
    categoria: "Eletrônicos",
    imagem: "https://s2-techtudo.glbimg.com/2wmdKp7a0IvCnHpNspvKvB_hLr8=/400x0/smart/filters:strip_icc()/s.glbimg.com/po/tt2/f/original/2013/08/07/smartphone-iphone-3gs-8gb-desbloqueado-apple-7903044987163569272ba20a17cdfc1f.jpg",
  },
  {
    nome: "Camiseta",
    preco: 79.9,
    categoria: "Roupas",
    imagem: "https://r2.mont.ink/mockups/146733/Preto_897212.png",
  },
  {
    nome: "Tênis",
    preco: 249.9,
    categoria: "Calçados",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxUsmCgY-Srwng1wbcKyfI8HC5niGvYiSNEIIIj5e8vs7HuaNHky2I3ew&s=10",
  },
  {
    nome: "GTA 6",
    preco: 99.9,
    categoria: "Jogos",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV901Pp9y_PXpIEyOMaR3SK-yGjRi9HiMZUS14Gq5f9Q&s=10",
  },
];

function listarProdutos(lista = produtos) {
  lista.forEach(({ nome, preco, categoria, imagem }) => {
    console.log({ nome, preco, categoria, imagem });
  });
}

function filtrarPorCategoria(categoria, lista = produtos) {
  return lista
    .filter(
      ({ categoria: categoriaProduto }) =>
        categoriaProduto.toLowerCase() === categoria.toLowerCase(),
    )
    .map((produto) => ({ ...produto }));
}

console.log("Todos os produtos:");
listarProdutos();

const eletronicos = filtrarPorCategoria("Eletrônicos");
console.log("Produtos da categoria Eletrônicos:");
listarProdutos([...eletronicos]);

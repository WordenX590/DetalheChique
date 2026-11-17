// Ano automático no rodapé
document.getElementById("ano").textContent = new Date().getFullYear();

// Menu mobile
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

// Número do WhatsApp da DetalheChik
const WHATSAPP_NUMBER = "244950522100";

// Botões que enviam mensagem directa para o WhatsApp
document.querySelectorAll("[data-pedido]").forEach(botao => {
  botao.addEventListener("click", evento => {
    evento.preventDefault();

    const mensagem = botao.getAttribute("data-pedido");
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
  });
});

// Botões "Pedir" nos produtos
document.querySelectorAll(".btn-order").forEach(botao => {
  botao.addEventListener("click", () => {
    const produto = botao.getAttribute("data-produto");

    const mensagem =
      `Olá DetalheChik! Tenho interesse no produto: ${produto}. ` +
      `Pode enviar fotos, preços e tamanhos disponíveis?`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
  });
});

// Filtros da coleção
const filtros = document.querySelectorAll(".filter");
const produtos = document.querySelectorAll(".product-card");

filtros.forEach(filtro => {
  filtro.addEventListener("click", () => {
    filtros.forEach(item => item.classList.remove("active"));
    filtro.classList.add("active");

    const categoria = filtro.getAttribute("data-filter");

    produtos.forEach(produto => {
      const mostrar =
        categoria === "todos" ||
        produto.getAttribute("data-category") === categoria;

      produto.style.display = mostrar ? "block" : "none";
    });
  });
});

// Formulário de pedido
const pedidoForm = document.getElementById("pedidoForm");

pedidoForm.addEventListener("submit", evento => {
  evento.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const produto = document.getElementById("produto").value.trim();
  const mensagemExtra = document.getElementById("mensagem").value.trim();

  const mensagem =
    `Olá DetalheChik! Quero fazer um pedido.\n\n` +
    `Nome: ${nome}\n` +
    `Telefone: ${telefone}\n` +
    `Produto: ${produto}\n` +
    `Detalhes: ${mensagemExtra || "Não informado"}`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");

  pedidoForm.reset();
});

// Animações ao rolar a página
const observador = new IntersectionObserver(entradas => {
  entradas.forEach(entrada => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("visible");
      observador.unobserve(entrada.target);
    }
  });
}, {
  threshold: 0.15
});

document.querySelectorAll(".reveal").forEach(elemento => {
  observador.observe(elemento);
});
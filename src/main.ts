import './style.css'

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="card">
    <div class="card-front"></div>
    <div class="card-back"></div>
  </div>
`;

const card = document.querySelector<HTMLDivElement>(".card")!;

card.addEventListener("click", () => {
  card.classList.toggle("flipped");
});

const main_coins = document.getElementById(`main_coins`);
const URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&locale=es`;

fetch(URL)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Ocurrio un error: ${response.status}`);
    }
    return response.json();
  })
  .then((dataArray) => {
    let content = "";
    dataArray.forEach((data) => {
      const symbol = data.symbol;
      const name = data.name;
      const image = data.image;
      const currentPrice = data.current_price;
      const marketCap = data.market_cap;
      const alto = data.high_24h;
      const bajo = data.low_24h;


      content += `
        <div class="coins">
          <img class="img" src="${image}">
          <h2 class="nombre">${name}</h2>
          <p class="precio">$${currentPrice}</p>
          <p class="cap">Mak. Cap: ${marketCap}</p>
          <p class="nombre">ID: ${symbol}</p>
          <p class="precio">low 24h: $${bajo}</p>
          <p class="precio">Alto 24h: $${alto}</p>
        </div>`;
    });

    main_coins.innerHTML = content;
  })
  .catch((error) => {
    console.error("Ocurrio un error:", error);
    throw new Error(`Ocurrio un error: ${response.status}`);
  });

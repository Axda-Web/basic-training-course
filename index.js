console.log("Hello World");
const mediaContainer = document.getElementById("media-container");

async function fetchMedias() {
  const medias = await fetch("./data.json");
  const jsonMedias = await medias.json();

  jsonMedias.forEach((media) => {
    const mediaCard = `<article class="media-card">
                        <div class="media-card__image-container">
                            <img class="media-card__image" src="./Rectangle.jpg" alt="media cover">
                            <button class="media-card__bookmark-button">
                                <img src="./bookmark.svg" alt="bookmark icon">
                            </button>
                        </div>
                            <div class="media-card__body">
                            <div class="media-card__body__info">
                                <span class="media-card__body__info__year">${media.year}</span>
                                ·<span class="media-card__body__info__type">
                                    <img class="media-card__body__info__type__icon" src="${media.image}" alt="movie icon">Movie
                                </span>
                                    ·<span class="media-card__body__info__rate">${media.rate}</span>
                            </div>
                            <h3 class="media-card__body__title">${media.title}</h3>
                        </div>
                    </article>`;
    mediaContainer.innerHTML += mediaCard;
  });
}

fetchMedias();

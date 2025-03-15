console.log("Hello World");
const mediaContainer = document.getElementById("media-container");

async function fetchMedias() {
  const medias = await fetch("./data.json");
  const jsonMedias = await medias.json();

  jsonMedias.forEach((media) => {
    const mediaCard = `<article class="media-card">
                        <div class="media-card__image-container">
                            <img class="media-card__image" src="./Rectangle.jpg" alt="media cover">
                            <button data-id=${
                              media.id
                            } class="media-card__bookmark-button">
                                <img class="media-card__bookmark-button__icon" src=${
                                  media.isBookmarked
                                    ? "/bookmark-full.svg"
                                    : "/bookmark.svg"
                                } alt="bookmark icon">
                            </button>
                        </div>
                            <div class="media-card__body">
                            <div class="media-card__body__info">
                                <span class="media-card__body__info__year">${
                                  media.year
                                }</span>
                                ·<span class="media-card__body__info__type">
                                    <img class="media-card__body__info__type__icon" src="${
                                      media.image
                                    }" alt="movie icon">Movie
                                </span>
                                    ·<span class="media-card__body__info__rate">${
                                      media.rate
                                    }</span>
                            </div>
                            <h3 class="media-card__body__title">${
                              media.title
                            }</h3>
                        </div>
                    </article>`;
    mediaContainer.innerHTML += mediaCard;
  });

  const bookmarkButtons = document.querySelectorAll(
    ".media-card__bookmark-button"
  );

  const toggleBookmark = (event) => {
    const currentSrc = event.currentTarget.children[0].src;
    const currentDataId = event.currentTarget.dataset.id;

    if (currentSrc === "http://127.0.0.1:5500/bookmark.svg") {
      event.currentTarget.children[0].src =
        "http://127.0.0.1:5500/bookmark-full.svg";
    } else {
      event.currentTarget.children[0].src =
        "http://127.0.0.1:5500/bookmark.svg";
    }
  };

  bookmarkButtons.forEach((button) => {
    button.addEventListener("click", toggleBookmark);
  });
}

fetchMedias();

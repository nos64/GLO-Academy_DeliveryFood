const partners = () => {
  const cardsRestaurants = document.querySelector(".cards-restaurants");
  // console.log(cardsRestaurants);

  const renderItems = (data) => {
    // console.log(data);
    // for (let i = 0; i < data.length; i++) {
    //   console.log(data[i])
    // }
    data.forEach((item) => {
      const { image, kitchen, name, price, products, stars, time_of_delivery } =
        item;
      const a = document.createElement("a");

      a.setAttribute("href", "/restaurant.html");
      a.classList.add("card");
      a.classList.add("card-restaurant");
      a.dataset.products = products;

      a.innerHTML = `
        <img
          src="${image}"
          alt="${name}"
          class="card-image"
        />
        <div class="card-text">
          <div class="card-heading">
            <h3 class="card-title">${name}</h3>
            <span class="card-tag tag">${time_of_delivery} мин</span>
          </div>
          <!-- /.card-heading -->
          <div class="card-info">
            <div class="rating">${stars}</div>
            <div class="price">От ${price} ₽</div>
            <div class="category">${kitchen}</div>
          </div>
        </div>
        `;

      a.addEventListener("click", (event) => {
        event.preventDefault();

        if (localStorage.getItem("user")) {
          localStorage.setItem("restaurant", JSON.stringify(item));
          window.location.href = "/restaurant.html";
        } else {
          const modalAuth = document.querySelector(".modal-auth");
          modalAuth.style.display = "flex";
        }
      });

      cardsRestaurants.append(a);
    });
  };

  //Метод fetch для работы с серверными запросами (запрос делаем относительно корневого каталога проекта)
  fetch(
    "https://glo-intensive-delivery-food-default-rtdb.firebaseio.com/db/partners.json"
  )
    .then((response) => response.json())
    .then((data) => {
      renderItems(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default partners;
const renderItems = (data) => {
  console.log(data);
  // for (let i = 0; i < data.length; i++) {
  //   console.log(data[i])
  // }
  data.forEach((element) => {
    console.log(element);
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

const restourant = "tanuki";

const renderItems = (data) => {
  console.log(data);
  data.forEach((element) => {
    console.log(element);
  });
};

//Метод fetch для работы с серверными запросами (запрос делаем относительно корневого каталога проекта)
fetch(
  `https://glo-intensive-delivery-food-default-rtdb.firebaseio.com/db/${restourant}.json`
)
  .then((response) => response.json())
  .then((data) => {
    renderItems(data);
  })
  .catch((error) => {
    console.log(error);
  });

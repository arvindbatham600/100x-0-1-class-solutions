// one way of doing this using then
/* const fetchData = () => {
  const data = fetch("https://fakerapi.it/api/v1/persons").then((response) => {
    response.json().then((finalData) => {
      console.log(finalData);
    });
  });
}; */

// second way of doing the same thing using await and much cleaner

const fetchData = async () => {
  const data = await fetch("https://fakerapi.it/api/v1/persons");
  const finalData = await data.json();

  console.log(finalData.data);
};

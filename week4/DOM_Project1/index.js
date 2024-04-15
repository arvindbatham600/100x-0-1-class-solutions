let timeout;

const deBouncing = () => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    calculateSum();
  }, 1000);
};

const calculateSum = () => {
  const firstNumber = parseFloat(document.getElementById("firstNumber").value);
  const secondNumber = parseFloat(
    document.getElementById("secondNumber").value
  );
  fetch(
    "https://sum-server.100xdevs.com/sum?a=" +
      firstNumber +
      "&b=" +
      secondNumber +
      " "
  ).then((response) => {
    console.log(response);
    response.text().then((ans) => {
        console.log(ans);
        document.getElementById("answer").innerHTML = ans
    });
  });
};

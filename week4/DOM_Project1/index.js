const calculateSum = () => {
  const firstNumber = parseFloat(document.getElementById("firstNumber").value);
  const secondNumber = parseFloat(
    document.getElementById("secondNumber").value
  );
    fetch("https://sum-server.100xdevs.com/sum?a=" + firstNumber + "&b=" + secondNumber + " ").then((response) => {
        console.log(response);
        response.text().then((ans) => {
            console.log(ans)
        })
    })
//   const sum = firstNumber + secondNumber;
//   const answerField = document.getElementsByClassName("answer")[0];
//   answerField.innerHTML = "Answer : " + sum;
};
const button = document.getElementsByClassName("sum")[0]; 
button.addEventListener("click", calculateSum);


// calculateSum();&

// create a map function that takes 2 inputs and array and a transformation callback function and transform the  array into new one using the transformation function. -->

const MapFunction = (arrayValue, fn) => {
  const tranformationArray = [];

  for (let i = 0; i < arrayValue.length; i++) {
    const transformationValue = fn(arrayValue[i]);
    tranformationArray.push(transformationValue);
  }

  return tranformationArray;
};

const arr = [1, 2, 3, 4, 5, 6];

console.log(MapFunction(arr, (i) => i * 2));

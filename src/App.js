import './App.css';

function App() {

  const arr = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']

  let sortedArr = arr.map(item => item.split('').sort().join(''));
  let setArr = new Set(sortedArr);
  let reducedObj = {};
  for (let setItem of setArr) {
    let indexArr = sortedArr.reduce((acc, cur, index) => {
      if (setItem === cur) {
        acc.push(index);
      }
      return acc;
    }, []);
    reducedObj[setItem] = indexArr;
  }
  let finalArr = [];
  for (let reduceItem in reducedObj) {
    finalArr.push(reducedObj[reduceItem].map(item => arr[item]));
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Anagram</h1>
          <p>
            {arr.map(item => {
              return <span>{item}, </span>;
            })}
          </p>
          <p>
            {finalArr.map(item => {
              return <li>{item.map(item => {
                return <span>{item}, </span>
              })}</li>;
            })}
          </p>
        </div>
        {/* <p>{word}</p> */}
      </header>
    </div>
  );
}

export default App;

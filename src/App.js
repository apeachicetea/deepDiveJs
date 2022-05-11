function App() {
  /* 예제 04-10 */
  console.log(score); //undefined
  score = 80;
  var score;
  console.log(score); //80

  return (
    <>
      <div>Deep Dive Javascript</div>
    </>
  );
}

export default App;

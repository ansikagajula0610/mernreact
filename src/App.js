import './App.css';
import App1 from "./App1"
import App2 from "./App2"
function App(props) {
  const flg = props.flag;
  console.log(props.log)
  if (flg){
    return <App2/>;
  }else{
    return< App1/>;
  }
  // return (
  //   <>
  //     <App1/>
  //     <hr></hr>
  //     <App2 name="Mike" age={25} />
  //   </>
  // );
}

export default App;
import Card from './Card'
import './App.css';

function App() {
  return (
    <div className="first">
      <Card bgColor="red" width="300px" height="300px" title="Card 1" subTitle="Sub Card 1" info="Hello One"/>
      <Card bgColor="orange" width="300px" height="300px" title="Card 2" subTitle="Sub Card 2" info="Hello Two"/>
      <Card bgColor="yellow" width="300px" height="300px" title="Card 3" subTitle="Sub Card 3" info="Hello Three"/>
      <Card bgColor="green" width="300px" height="300px" title="Card 4" subTitle="Sub Card 4" info="Hello Four"/>
    </div>
  );
}

export default App;

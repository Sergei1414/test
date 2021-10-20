// import logo from './logo.svg';
// import './App.css';
import Information from './Information';
function App() {
  return (
 <div class='test'>
   <h1>test</h1> 
   <Information first={1} second={2}
    message={
      <div style={{color:'red'}}>message</div>
    }
    user={
      {
       name:'pavel',
       state:'happy',
       questions:20,
      }
  }>

      </Information>  
 </div>
  );
}

export default App;

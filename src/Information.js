const Information=({first,second,message,
  user:{name,state,questions},


})=> {


    return( <div>
      <p>я компонент</p>
      
      <p>if i add {first} to {second}</p>
      <h3>{message}</h3>
      <p>
        my name is {name},i am {state} and i will try
        blalblalba {questions}
      </p>
       </div>
      
      
      );
  }
  

  export default Information;
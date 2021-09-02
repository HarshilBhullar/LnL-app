import React, { useState, useEffect } from 'react';
import { isPropertySignature } from 'typescript';
import { useReadCypher, useLazyWriteCypher } from 'use-neo4j'
//import { BrowserRouter as Router, Link } from 'react-router-dom'
import './App.css';
import CustomInput from './inputs';

function App() {

  // const { cypher, error, loading, first } = useReadCypher('MATCH (n) RETURN count(n) AS count')

  // // Default to Loading Message
  // let result = (<div className="ui active dimmer">Loading...</div>)

  // // Was there an error om the query?
  // if ( error ) {
  //   result = (<div className="ui negative message">{ error.message }</div>)
  // }
  // else if ( !loading ) {
  //   // Get the count
  //   const count = first?.get('count').toNumber()
  //   result = (<div>There are {count} nodes in the database.</div>)
  // }

  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [health, setHealth] = useState("");
  const [form, setForm] = useState("");
  const [phone, setPhone] = useState("");
  const [goal, setGoal] = useState("");
  const [email, setEmail] = useState("");

  const handleChange1 = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setName1(e.target.value);
  };

  const handleChange2 = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setName2(e.target.value);
  };

  const handleChange3 = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setHealth(e.target.value);
  };

  const handleChange4 = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setForm(e.target.value);
  };

  const handleChange5 = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setPhone(e.target.value);
  };

  const handleChange6 = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setGoal(e.target.value);
  };

  const handleChange7 = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setEmail(e.target.value);
  };


  const [run, {loading, first}] = useLazyWriteCypher(`CREATE (n:Customer {firstName: '${name1}', lastName: '${name2}', health: '${health}', form: '${form}', phone: '${phone}', goal: '${goal}', email: '${email}'})`)

  const handleSubmit = (f: any) => {
    run()
  }

  const query = `CREATE (n:Customer {firstName: '${name1}', lastName: '${name2}', health: '${health}', form: '${form}', phone: '${phone}', goal: '${goal}', email: '${email}'})`

  return (
    <div className="App">
        {/* <pre>{cypher}</pre>
        {result} */}
        <div>
          First name:   
          <CustomInput handleChange={handleChange1} />
        </div>
        <div>
          Last name:    
          <CustomInput handleChange={handleChange2} />
        </div>
        <div>
          Health:    
          <CustomInput handleChange={handleChange3} />
        </div>
        <div>
          Release Form:    
          <CustomInput handleChange={handleChange4} />
        </div>
        <div>
          Phone Number:    
          <CustomInput handleChange={handleChange5} />
        </div>
        <div>
          Email:    
          <CustomInput handleChange={handleChange7} />
        </div>
        <div>
          Goal:    
          <CustomInput handleChange={handleChange6} />
        </div>
        <div>{query}</div>
        <div>
          <button onClick={handleSubmit}>
            add customer
          </button>
        </div>
    </div>

  );

  
}

export default App;

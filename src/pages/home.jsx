import React from 'react';
const title = 'Hello gerardo';
const  autor = 'Tango';
const style = {color : 'yellow'}
function Home() {
  return (
    <main className="timeline">
      <h1> {title} <b style = {style}>{autor}</b> 
      </h1>
    </main>
  );
}

export default Home;
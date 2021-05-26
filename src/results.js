import React from 'react';

const Results = (props) => {
  return (
    <section className="results">
      <ul>
        <pre>{JSON.stringify(props, null, 4)}</pre>
      </ul>
    </section>
  )
}

export default Results;
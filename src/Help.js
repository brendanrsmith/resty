import React from 'react';

const Help = props => {
  return (
    <section className="help">
      <div>

        <h1>About this app</h1>
        <ol>
          <li>
            Enter your url in the input box.
          </li>
          <li>
            Select your request method using the buttons.
          </li>
          <li>
            Enter any desired body content in the text box.
          </li>
          <li>
            Hit GO!
          </li>
        </ol>
      </div>

    </section>
  )
}

export default Help;
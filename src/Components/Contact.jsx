import React from 'react'

const Contact = () => {
  return (
    <div className="contact">

      <main>
        <h1>Contact Us </h1>
        <form >
          <div>
            <label>Name</label>
            <input type="text" required placeholder='ABBBB' />
          </div>
          <div>
            <label>Email</label>
            <input type="email" required placeholder='ABBBB@gmail.com' />
          </div>
          <div>
            <label>Message</label>
            <input type="text" required placeholder='Tel Us Abourt Your query ....' />
          </div>
          <button type="submit">Send</button>
        </form>


      </main>



    </div>
  )
}

export default Contact
import React from 'react'
import {Bookmark} from 'lucide-react'
const App = () => {
  return (
    <div className="parent">
      <div className="card">
        <div>
          <div className="top">
          <img src="https://www.bing.com/th/id/OIP.mfjIDgZfzL5i-BViz7SCnwHaD4?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" />
          <button>Save <Bookmark size={12}/></button>
        </div>
        <div className="center">
          <h3>Amazon <span> 5 days ago </span></h3>
          <h2> Senior UI/UX designer</h2>
          <div className="tag">
            <h4>Part time</h4>
            <h4>Senior level</h4>
          </div>
        </div>
        </div>
        <div className='bottom'>
          <div>
            <div>
              <h3> $120/hr </h3>
              <p> Mumbai,India </p>
            </div>
          </div>
           <button>Apply Now</button>
        </div>
      </div>
    </div>
  )
}

export default App
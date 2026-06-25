import React from 'react'
import Section1 from './components/Section1/Section1.jsx'
import Section2 from './components/Section2/Section2.jsx'

const App = () => {

  const users= [
    {
      img: 'https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWxzfGVufDB8fDB8fHww',
      intro: 'Experienced software engineer building scalable applications, solving complex problems, collaborating with teams, and delivering innovative technology solutions.', 
      tag: 'Satisfied'
    },
    {
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D', 
      intro: 'Product manager driving strategy, coordinating cross-functional teams, analyzing market needs, and delivering customer-focused products successfully.', 
      tag: 'Underserved'
    },
    {
      img: 'https://images.unsplash.com/photo-1665436035665-d7dad9086ee2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D', 
      intro: 'Data analyst transforming raw data into actionable insights, creating reports, identifying trends, and supporting business decisions.', 
      tag: 'Underbanked'
    }
  ]
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App
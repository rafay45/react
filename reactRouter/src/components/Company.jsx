import React, { useEffect, useState } from 'react'

function Company() {
  const [rank, setRank] = useState([])
  useEffect(() =>{
fetch('https://api.github.com/user/rafay45')
.then((response) => response.json())
.then(data => setRank(data))
  },[])
return (
    <div className="bg-white min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-amber-900">Our Company</h1>
         <h2 className=' text-3xl font-mono text-center font-bold mb-4 '>Rank:<span className='text-gray-500'>{rank.followers}</span> </h2>
        <p className="text-center text-gray-600 mb-10">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere ut at asperiores dolores animi accusamus iure nulla sunt?
        </p>

        <div className="grid md:grid-cols-2 gap-10 mb-10">
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">Our Mission</h2>
            <p className="text-gray-600">
Lorem, ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, earum. consectetur adipisicing elit. Voluptate, rerum soluta veniam, ab nisi doloribus eius quod nulla, qui non facilis inventore perferendis illo voluptatum fuga! Aliquid qui sunt consequuntur!            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">What We Do</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem ipsum dolor sit amet.</li>
            </ul>
          </div>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
          <img src="src/assets/first.jpg" alt="Office" className="rounded-2xl shadow-md" />
          <img src= "src/assets/second.jpg" alt="Team" className="rounded-2xl shadow-md" />
          <img src= "src/assets/third.jpg" alt="Product" className="rounded-2xl shadow-md" />
        </div>
      </div>
    </div>
  );
};



export default Company
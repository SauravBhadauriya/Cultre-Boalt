import React from 'react'

export default function Header() {

  const menuItems = [
    { name: "DESIGN", link: "#home" },
    { name: "PR", link: "#PR" },
    { name: "SOCIAL", link: "#SOCIAL" },
    { name: "About", link: "#About" },
    { name: "Contact", link: "#Contact" }
  ];

  return (
    <nav className='flex justify-between mx-20 items-center'>
      
      <h1 className='text-[20px] font-bold'>Culte Boat</h1>

      <ul className='flex gap-8 items-center'>
        {menuItems.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}

        <button className='border bg-blue-500 text-white px-2 rounded'>
          Get Started
        </button>
      </ul>

    </nav>
  )
}
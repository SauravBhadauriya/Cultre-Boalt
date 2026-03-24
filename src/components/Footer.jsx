import React from 'react'

export default function Footer() {

  const footerData = [
    {
      title: "Services",
      links: [
        { name: "Brand Design", link: "#BD" },
        { name: "PR & Communications", link: "#PR&C" },
        { name: "Social Media", link: "#SM" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", link: "#aboutus" },
        { name: "Contact", link: "#contact" },
        { name: "Privacy Policy", link: "#PP" }
      ]
    },
    {
      title: "Connect",
      links: [
        { name: "Facebook", link: "#facebook" },
        { name: "Instagram", link: "#instagram" },
        { name: "LinkedIn", link: "#linkedin" }
      ]
    }
  ];

  return (
    <footer className="mt-10">

      {/* Top Section */}
      <div className='flex justify-around border-b m-5 pb-5'>

        {/* Logo + Tagline */}
        <div className='w-60'>
          <h1 className='text-[20px] font-bold'>Culte Boat</h1>
          <p>Everybody loves a good story. We love to build them.</p>
        </div>

        {/* Dynamic Sections */}
        {footerData.map((section, index) => (
          <ul key={index}>
            <h3 className='text-[18px] font-semibold'>{section.title}</h3>

            {section.links.map((item, i) => (
              <li key={i}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}

          </ul>
        ))}

      </div>

      {/* Bottom Section */}
      <div className='flex justify-around items-center pb-5'>
        <p>© {new Date().getFullYear()} Cultre Boat. All rights reserved.</p>

        <ul className='flex gap-8'>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>LinkedIn</li>
        </ul>
      </div>

    </footer>
  )
}
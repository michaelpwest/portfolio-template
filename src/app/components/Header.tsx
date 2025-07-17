import Image from 'next/image';
import React from 'react';
import { Details } from '../../portfolio';

const Header = () => {
  return (
    <header>
      <div className="flex flex-row gap-4">
        {Details.socialLinks.map((socialLink, i) => (
          <a key={i} href={socialLink.link} target="_blank" rel="noopener noreferrer">
            <Image
              src={socialLink.icon}
              alt={`Link to ${socialLink.name}`}
              width={25}
              height={25}
              className="icon h-[25px] w-auto"
            />
          </a>
        ))}
      </div>
      <h1 className="mt-8 text-4xl">{Details.about.title}</h1>
      <h2 className="mt-2 text-2xl text-stone-400">{Details.about.subtitle}</h2>
      <p className="mt-2">{Details.about.summary}</p>
    </header>
  );
};

export default Header;

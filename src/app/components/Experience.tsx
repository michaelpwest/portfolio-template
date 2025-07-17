import Image from 'next/image';
import React from 'react';
import { Details } from '../../portfolio';

const Experience = () => {
  return (
    <section className="card mt-6">
      <h2 className="text-2xl">Experience</h2>
      {Details.experiences.map((experience, i) => (
        <a
          key={i}
          href={experience.website}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row items-start gap-6 mt-6"
        >
          <Image
            src={experience.logo}
            alt={`Icon for ${experience.company}`}
            width={64}
            height={64}
            className="rounded-md"
          />
          <div>
            <p className="font-bold">{experience.company}</p>
            <p className="text-stone-400">{experience.title}</p>
            <p className="text-stone-400">{experience.date}</p>
            <p className="text-stone-400">{experience.location}</p>
          </div>
        </a>
      ))}
    </section>
  );
};

export default Experience;

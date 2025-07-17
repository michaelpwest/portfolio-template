import Image from 'next/image';
import React from 'react';
import { Details } from '../../portfolio';

const Projects = () => {
  return (
    <section className="card mt-6">
      <h2 className="text-2xl">Projects</h2>
      {Details.projects.map((project, i) => (
        <div key={i}>
          <div className="flex flex-row items-start gap-6 mt-6">
            <Image src={project.icon} alt={`Icon for ${project.name}`} width={64} height={64} className="rounded-md" />
            <div>
              <p className="font-bold">{project.name}</p>
              <p className="text-stone-400">{project.description}</p>
            </div>
          </div>
          <div className="flex flex-row gap-2 mt-4">
            {project.links.map((link, j) => (
              <a key={j} href={link.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={link.icon}
                  alt={`Link to ${project.name}`}
                  width={100}
                  height={100}
                  className="h-[32px] w-auto"
                />
              </a>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;

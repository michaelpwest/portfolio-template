import React from 'react';
import { Details } from '../../portfolio';

const Skills = () => {
  return (
    <section className="card mt-6">
      <h2 className="text-2xl">Skills</h2>
      <ul>
        {Details.skills.map((skill, i) => (
          <li key={i} className="mt-2 ml-4">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;

import React from 'react';
import { Details } from '../../portfolio';
import parse from 'html-react-parser';

const About = () => {
  return (
    <section className="card mt-6">
      <h2 className="text-2xl">About</h2>
      <p className="mt-3">{parse(Details.about.description)}</p>
      <p className="mt-4 text-stone-400">{parse(Details.about.footer)}</p>
    </section>
  );
};

export default About;

'use client';

import React from 'react';

const Project = ({ params }) => {
  console.log('Component is rendering');
  console.log(`The params are: ${JSON.stringify(params)}`);

  return (
    <section>
      <div>Project: {params.all}</div>
      <ul>
        {params.all?.map((route, id) => (
          <li key={id}>{route}</li>
        ))}
      </ul>
    </section>
  );
};

export default Project;

'use client';

import React from 'react';
import { projectsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import Project from './Project';
import SectionHeading from './SectionHeading';

const Projects = (): React.JSX.Element => {
  const { ref } = useSectionInView('Projects', 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>Activities</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;

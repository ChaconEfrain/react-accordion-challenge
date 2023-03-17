import React from "react";
import useAccordion from "../hooks/useAccordion";
import Section from "./Section";

const Accordion = ({ sections, allowMultipleExpansion }) => {
  const { sectionsMap, handleExpand } = useAccordion(allowMultipleExpansion);
  return (
    <main>
      {!!sections &&
        sections.map(({ title, content }) => (
          <Section
            key={title}
            title={title}
            content={content}
            sectionsMap={sectionsMap}
            handleExpand={() => handleExpand(title)}
          />
        ))}
    </main>
  );
};

export default Accordion;

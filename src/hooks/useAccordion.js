import { useMemo, useState } from "react";
import { sections } from "../mocks/sections";

const useAccordion = (allowMultipleExpansion) => {
  const [sectionsMap, setSectionsMap] = useState({});

  //We don't need to set the sectionsMap on every re-render, so we wrap it inside a useMemo hook
  useMemo(() => {
    const newSectionsMap = {};
    sections.forEach(({ title }) => {
      newSectionsMap[title] = false;
    });
    setSectionsMap(newSectionsMap);
  }, [sections]);
  console.log(sectionsMap);

  const handleExpand = (title) => {
    //Create a copy of the sectionsMap so we don't reset the state on every iteration
    const newExpanded = {
      ...sectionsMap,
    };
    for (const key of Object.keys(newExpanded)) {
      // Only set every section to false if multiple expansion is not allowed
      if (!allowMultipleExpansion) newExpanded[key] = false;
      if (key === title) {
        newExpanded[key] = true;
      }
    }
    //Set the state once the for loop is done
    setSectionsMap(newExpanded);
  };

  return { sectionsMap, handleExpand };
};

export default useAccordion;

import React from "react";

const Section = ({ title, content, sectionsMap, handleExpand }) => {
  return (
    <section style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <h2 onClick={handleExpand} style={{ cursor: "pointer" }}>
        {title}
      </h2>
      <div style={{ overflow: "hidden" }}>
        <p
          style={{
            transform: `${
              sectionsMap[title] ? "translateY(0)" : "translateY(-100%)"
            }`,
            transition: "all 0.5s",
          }}
        >
          {content}
        </p>
      </div>
    </section>
  );
};

export default Section;

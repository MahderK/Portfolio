import { skills } from "./skills";

function SkillsView() {
  return (
    <div className="skills">
      {skills.map((group) => (
        <div key={group.category} className="skill-group">
          <span className="skill-category">-- {group.category} --</span>
          <div className="skill-items">
            {group.items.map((skill) => (
              <span key={skill} className="skill-tag">
                [<span className="skill-item">{skill}</span>]
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkillsView;

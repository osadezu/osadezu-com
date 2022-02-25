import { SkillType } from './Skills';

function Skill({
  skill,
  filtered,
}: {
  skill: SkillType;
  filtered: string | null;
}) {
  return (
    <div
      className={`skill card${
        filtered && skill.tags.includes(filtered)
          ? ` filtered ${filtered} ${skill.classes.join(' ')}`
          : ' unfiltered'
      }`}>
      {skill.skillName}
    </div>
  );
}

export default Skill;

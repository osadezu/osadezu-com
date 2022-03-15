import { SkillType } from './content';

function Skill({
  skill,
  filtered,
}: {
  skill: SkillType;
  filtered: string | null;
}) {
  return (
    <div
      className={`skill${
        filtered && skill.tags.includes(filtered)
          ? ` filtered ${filtered} ${skill.classes.join(' ')}`
          : ' unfiltered'
      }`}>
      {skill.skillName}
    </div>
  );
}

export default Skill;

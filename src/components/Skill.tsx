import { SkillType } from './Skills';

function Skill({ skill }: { skill: SkillType }) {
  return (
    <>
      <h3>{skill.skillType}</h3>
      {skill.skillList.map((e, i) => {
        return (
          <div key={i} className='skill card'>
            {e}
          </div>
        );
      })}
    </>
  );
}

export default Skill;

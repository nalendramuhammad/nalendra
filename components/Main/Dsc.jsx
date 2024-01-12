import style from "@/styles/Main/dsc.module.scss";

export default function Dsc() {
  return (
    <div className={`${style.dsc}`}>
      <div className={`${style.dscDescription}`}>
        <p>
          A dedicated and enthusiastic final-year student, fueled by a profound
          passion for the intricate realms of UI/UX design and the dynamic
          landscape of web development, seeking to explore, innovate.
        </p>
      </div>
      <div className={`${style.foot}`}>
        <p>© nalendra 2023</p>
      </div>
    </div>
  );
}

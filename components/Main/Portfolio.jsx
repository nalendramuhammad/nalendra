import style from "@/styles/Main/portfolio.module.scss";

export default function Portfolio() {
  return (
    <div className={`${style.whole}`}>
      <div className={`${style.port__container}`}>
        <div className={`${style.port__container__title}`}>
          <p>Projects</p>
        </div>
        <div className={`${style.port__container__kecil}`}>
          <p>a collection of</p>
        </div>
        <div className={`${style.port__container__name}`}>
          <p>Nalendra's Work</p>
        </div>
      </div>
      <div className={`${style.card__wrap}`}>
        <div className={`${style.card}`}>
          <p>Lorem ipsum </p>
          <div className={`${style.card__img}`}></div>
        </div>
        <div className={`${style.card}`}>
          <p>Lorem ipsum </p>
          <div className={`${style.card__img}`}></div>
        </div>
        <div className={`${style.card}`}>
          <p>Lorem ipsum </p>
          <div className={`${style.card__img}`}></div>
        </div>
        <div className={`${style.card}`}>
          <p>Lorem ipsum </p>
          <div className={`${style.card__img}`}></div>
        </div>
      </div>
    </div>
  );
}

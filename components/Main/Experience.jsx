import style from "@/styles/Main/esc.module.scss";

export default function Experience() {
  return (
    <div className={`${style.esc}`}>
      <div className={`${style.esc__container}`}>
        <div className={`${style.esc__container__title}`}>
          <div className={`${style.word}`}>
            <p>Selected Work</p>
            <div className={`${style.gatau}`}>
              <p>
                <span></span>2023
              </p>
            </div>
          </div>
        </div>
        <div className={`${style.esc__container__main}`}>
          <p>Experience</p>
        </div>
        <div className={`${style.esc__container__foot}`}>
          <div className={`${style.esc__container__foot_left}`}>
            <p>PT. Japung Kreasindo Bersama</p>
            <p>SEAMEO QITEP in Language</p>
            <p>Kelurahan Tanjung Duren Selatan</p>
          </div>
          <div className={`${style.esc__container__foot_right}`}>
            <p>Front-End Developer</p>
            <p>Web Designer</p>
            <p>UI/UX Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

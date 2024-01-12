import style from "@/styles/Main/main.module.scss";

export default function Main() {
  return (
    <main className={`${style.main}`}>
      <div className={`${style.container}`}>
        <p>Nalendra</p>
      </div>
      <div className={`${style.foot} ${style.bouncyText}`}>
        <p>scroll</p>
      </div>
    </main>
  );
}

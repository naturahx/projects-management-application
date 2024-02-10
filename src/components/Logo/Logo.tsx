import style from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={style.display}>
      <div className={style.circle}></div>
      <div className={style.text}>Проект</div>
    </div>
  );
};

export default Logo
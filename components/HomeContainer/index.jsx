import Image from "next/image";
import style from "./HomeContainer.module.css";

function HomeContainer() {
  return (
    <div className={style.container}>
      <div className={style.container__primary}>
        <Image src="/logo.svg" width={500} height={100} />
      </div>

      <div className={style.container__secondary}>
        <Image src="/images/vector.svg" width={400} height={300} />
      </div>
    </div>
  );
}

export default HomeContainer;

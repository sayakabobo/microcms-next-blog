import Link from "next/link";
import styles from "../styles/Header.module.scss";
import Image from "next/image";

const LogoImage = () => (
  <Image
    src="/images/logo.svg"
    // Route of the image file
    height={40} // Desired size with correct aspect ratio
    width={120} // Desired size with correct aspect ratio
    //layout={"fixed"}
    alt="logo"
  />
);

const MainImage = () => (
  <Image
    src="/images/mainvisual.jpg"
    // Route of the image file
    height={600} // Desired size with correct aspect ratio
    width={1920} // Desired size with correct aspect ratio
    //layout="fill"
    //objectFit="cover"
    alt="mainvisual-image"
  />
);

export default function Header() {
  return (
    <>
      <div className={styles.wrapper}>
        <h1 className={styles.logo}>
          <Link href="/">
            <LogoImage />
          </Link>
        </h1>
        <nav>
          <ul className={styles.navigation}>
            <li className={styles.list}>
              <Link href="/">
                <a>About</a>
              </Link>
            </li>
            <li className={styles.list}>
              <Link href="/">
                <a>Bicycle</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.mainvisual}>
        <MainImage className={styles.image} />
      </div>
    </>
  );
}

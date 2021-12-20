// pages/index.js
import Link from "next/link";
import { client } from "../libs/client";
import Head from "next/head";
import styles from "../styles/Body.module.scss";
import Image from "next/image";

const AboutImage = () => (
  <Image
    src="/images/about.jpg"
    // Route of the image file
    height={100} // Desired size with correct aspect ratio
    width={100} // Desired size with correct aspect ratio
    //layout={"fill"}
    alt="about-image"
  />
);

const ItemImage = () => (
  <Image
    src="/images/bicycle1.jpg"
    // Route of the image file
    height={424} // Desired size with correct aspect ratio
    width={640} // Desired size with correct aspect ratio
    //layout={"fill"}
    alt="bicycle1"
  />
);

export default function Home({ blog }) {
  return (
    <>
      <Head>
        <title>トップページ</title>
      </Head>
      <div className={styles.wrapper}>
        <h2 className={styles.sectitle}>About</h2>
        <div className={styles.inner}>
          <AboutImage />
          <div className={styles.text}>
            <h3 className={styles.contenttitle}>KAKERU MIYAICHI</h3>
            <p>
              テキストテキストテキストテキストテキストテキストテキスト
              <br />
              テキストテキストテキストテキストテキストテキストテキスト
              <br />
              テキストテキストテキストテキストテキストテキストテキスト
            </p>
          </div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <h2 className={styles.sectitle}>Bicycle</h2>
        <ul className={styles.item}>
          {blog.map((blog) => (
            <li className={styles.imageitem} key={blog.id}>
              <ItemImage />
              <Link href={`/blog/${blog.id}`}>
                <a className={styles.blogtitle}>{blog.title}</a>
              </Link>
              <p>テキストテキストテキスト</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};

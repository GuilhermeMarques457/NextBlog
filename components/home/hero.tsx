import Image from "next/image";
import classes from "./hero.module.css";

export function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src={""}
          alt="An image about Guilherme"
          width={300}
          height={300}
        ></Image>
      </div>
      <h1>Hi, I&apos;m Guilherme</h1>
      <p>
        I blog about web development - especially .Net, Angular and Next
        frameworks
      </p>
    </section>
  );
}

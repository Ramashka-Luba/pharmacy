import { Button } from "../../../components/ButtonForLayout";
import { Explanation } from "./Explanation/Explanation";

import parrot from "../../../static/images/parrot.svg";
import dog from "../../../static/images/dog.svg";
import hare from "../../../static/images/hare.svg";

import style from "./index.module.css";

export const HowItWorks = () => {
  return (
    <div className={style.page} style={{ backgroundColor: "#FAF9F6" }}>
      <div className={style.container}>
        <h2 className={style.titleH2} >How it works</h2>
        <div className={style.containerExplanation}>
          <Explanation
            title={"We receive your prescription"}
            description={
              "Either your veterinarian sends us a prescription or we reach out to them for you. Whatever is easiest!"
            }
            image={parrot}
          />
          <Explanation
            title={"We deliver your care package"}
            description={
              "Fast and free next-day delivery, straight to your door. Same-day in NYC and LA."
            }
            image={hare}
          />
          <Explanation
            title={"You treat your pet"}
            description={
              "Give your pet the care they need to feel better. Plus they can play with our included toy!"
            }
            image={dog}
          />
        </div>
        <Button title={"Learn More"} />
      </div>
    </div>
  );
};

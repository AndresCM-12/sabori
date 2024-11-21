"use client";
import "swiper/css";

import React, { useEffect, useRef, useState } from "react";
import styles from "../css/where-find-us.module.css";
import { fetchArrayInPost } from "@/app/utils/methods";
import { whereFindUs } from "@/app/utils/constants";
import bannerStyles from "./where-find-us.module.css";

export default function ClientWhereFindUs({ title }: { title: string }) {
  const [stores, setStores] = useState([] as any);
  const didFetch = useRef(false);
  useEffect(() => {
    if (didFetch.current === false) {
      fetchArrayInPost(whereFindUs).then((data) => {
        setStores(data);
      });
      didFetch.current = true;
    }
  }, []);
  return (
    <section className={styles.whereFindUsWrapper}>
      <h6>{title}</h6>
      <div className={bannerStyles.inner}>
        <div className={bannerStyles.wrapper}>
          <section style={{ "--speed": `${90500}ms` } as React.CSSProperties}>
            {stores.map(
              ({ image, index }: { image: string; index: number }) => (
                <div className={bannerStyles.image} key={index + Math.random()}>
                  <img src={image} alt={String(index)} />
                </div>
              )
            )}
          </section>
          <section style={{ "--speed": `${90500}ms` } as React.CSSProperties}>
            {stores.map(
              ({ image, index }: { image: string; index: number }) => (
                <div className={bannerStyles.image} key={index + Math.random()}>
                  <img src={image} alt={String(index)} />
                </div>
              )
            )}
          </section>
        </div>
      </div>
    </section>
  );
}

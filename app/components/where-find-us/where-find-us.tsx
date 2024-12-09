import React from "react";
import { fetchArrayInPost } from "../../utils/methods";
import { homeInfo, whereFindUs } from "../../utils/constants";
import WhereFindUsClientWrapper from "./client.wrapper";

export default async function WhereFindUs({ title }: { title: string }) {
  const stores = await fetchArrayInPost(whereFindUs);
  const homeInfoData = await fetchArrayInPost(homeInfo);

  return <WhereFindUsClientWrapper title={title} stores={stores} homeInfo={homeInfoData.dondeEncontrarnos} />;
}

import React from "react";
import { fetchArrayInPost } from "../../utils/methods";
import { whereFindUs } from "../../utils/constants";
import WhereFindUsClientWrapper from "./client.wrapper";

export default async function WhereFindUs({ title }: { title: string }) {
  const stores = await fetchArrayInPost(whereFindUs);

  return <WhereFindUsClientWrapper title={title} stores={stores} />;
}

import { headers } from "next/headers";

export default async function Home() {
  const h = await headers();
  const host = h.get("host");
  const protocol = h.get("x-forwarded-proto") || "http";
  const fullUrl = `${protocol}://${host}${h.get("x-invoke-path") || ""}`;

  return <div>{fullUrl}</div>;
}

export const dynamicParams = false;

export default async function Page({
  params,
}: {
  params: { lang: string; country: string; slug?: string[] };
}) {
  const p = await params;

  return (
    <div>
      <pre>
        Paese: {p.country}
        <br />
        Lingua: {p.lang}
        <br />
        slug: {p.slug?.join("/")}
      </pre>
    </div>
  );
}

export async function generateStaticParams() {
  // Example hard-coded params. Replace with your own data source.
  const langs = ["de", "fr"];
  const countries = ["de", "fr"];
  const slugs = [["about"], ["products", "123"]];

  const params: { lang: string; country: string; slug: string[] }[] = [];

  for (const lang of langs) {
    for (const country of countries) {
      for (const slug of slugs) {
        params.push({ lang, country, slug });
      }
    }
  }

  return params;
}

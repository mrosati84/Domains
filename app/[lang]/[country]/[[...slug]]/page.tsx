export default async function Page({ params }: { params: { lang: string; country: string, slug?: string[] } }) {
    const p = await params;

    return (
        <div>
            <pre>
                Paese: {p.country}<br />
                Lingua: {p.lang}<br />
                slug: {p.slug?.join("/")}
            </pre>
        </div>
    )
}

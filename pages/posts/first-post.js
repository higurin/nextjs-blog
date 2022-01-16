import Link from 'next/link'

export default function FirstPost() {
    return (
        <>
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    {/* クラスを書くときはLinkタグではなく、aタグに追加  */}
                    <a className="foo">Back to home</a>
                </Link>
            </h2>
        </>
    )
}
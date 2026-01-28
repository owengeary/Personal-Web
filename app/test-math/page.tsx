import { compileMDX } from 'next-mdx-remote/rsc'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

const source = `
# Math Test Page

This is an MDX page rendered via **next-mdx-remote**.

Here is an inline equation: $E = mc^2$.

Here is a block equation (Black-Scholes):

$$
\\frac{\\partial f}{\\partial t} + \\frac{1}{2}\\sigma^2 S^2 \\frac{\\partial^2 f}{\\partial S^2} + rS \\frac{\\partial f}{\\partial S} - rf = 0
$$

If you see the math above, the pipeline is working!
`

export default async function Page() {
    const { content } = await compileMDX({
        source,
        options: {
            parseFrontmatter: true,
            mdxOptions: {
                remarkPlugins: [remarkMath],
                rehypePlugins: [rehypeKatex],
            },
        },
    })

    return (
        <div className="prose dark:prose-invert max-w-4xl mx-auto p-8">
            {content}
        </div>
    )
}

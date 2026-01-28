export interface Book {
    id: string
    title: string
    author: string
    cover?: string // URL to cover image
    status: 'Reading' | 'Read' | 'To Read'
    link?: string
    thoughts?: string
    note?: string // Long form content
}

export interface Podcast {
    id: string
    title: string
    host: string
    image?: string
    link?: string
    description?: string
    favorite?: boolean
    note?: string // Long form content
}

export const books: Book[] = [
    {
        id: "man-who-solved-the-market",
        title: "The Man Who Solved the Market",
        author: "Gregory Zuckerman",
        status: 'Reading',
        cover: "/images/book_placeholder.png",
        link: "https://www.amazon.com/Man-Who-Solved-Market-Revolution/dp/073521798X",
        thoughts: "Fascinating insight into Jim Simons and Renaissance Technologies.",
        note: "This book provides an incredible look into the secretive world of Renaissance Technologies. Zuckerman does a great job of explaining the history of Jim Simons, from his time as a codebreaker to his academic career and eventually his shift to finance. What stands out most is the sheer determination and the unique culture he built at RenTech. It wasn't just about the math; it was about hiring the right people—physicists, astronomers, and computer scientists—and letting them loose on the data. I'm particularly interested in how they handled infrastructure and data cleaning in the early days, which seems to remain a competitive advantage."
    },
    {
        id: "active-portfolio-management",
        title: "Active Portfolio Management",
        author: "Grinold and Kahn",
        status: 'Read',
        cover: "/images/book_placeholder.png",
        thoughts: "The bible of quantitative investing. Essential reading.",
        note: "Grinold and Kahn's work is foundational for anyone serious about quantitative equity portfolio management. The Fundamental Law of Active Management (IR = IC * sqrt(BR)) provides a rigorous framework for evaluating investment strategies. I found the chapters on risk models and portfolio construction particularly useful. It bridges the gap between theoretical finance and practical implementation, covering everything from multifactor models to transaction cost analysis. It's a dense read, but worth every minute."
    },
    {
        id: "thinking-fast-and-slow",
        title: "Thinking, Fast and Slow",
        author: "Daniel Kahneman",
        status: 'Read',
        cover: "/images/book_placeholder.png",
        thoughts: "Profound impact on how I view decision making under uncertainty.",
        note: "Kahneman's exploration of System 1 (fast, intuitive) and System 2 (slow, deliberative) thinking is essential for understanding market psychology and our own cognitive biases. For a quantitative trader, this book is a reminder that markets are driven by human behavior, which is often irrational. Understanding concepts like loss aversion, the availability heuristic, and anchoring can help in designing robust trading systems that exploit these behavioral anomalies rather than falling victim to them."
    }
]

export const podcasts: Podcast[] = [
    {
        id: "flirting-with-models",
        title: "Flirting with Models",
        host: "Corey Hoffstein",
        description: "Advanced quantitative investing strategies.",
        image: "/images/podcast_placeholder.png",
        favorite: true,
        note: "Corey Hoffstein is an excellent interviewer who isn't afraid to get technical. This podcast is a goldmine for hearing from practitioners about how they actually build and manage quantitative strategies. I love the variety of guests, from CTA managers to crypto prop traders. It's not just high-level theory; they get into the weeds of implementation, risk management, and the realities of running money."
    },
    {
        id: "odd-lots",
        title: "Odd Lots",
        host: "Tracy Alloway & Joe Weisenthal",
        description: "Deep dives into finance and economics topics.",
        image: "/images/podcast_placeholder.png",
        note: "Odd Lots is my go-to for understanding the plumbing of the financial system. Tracy and Joe cover everything from supply chain issues to complex derivatives. Their ability to explain complex topics in an accessible way is unmatched. I particularly enjoyed their series on the crypto market crisis and their discussions on market structure."
    },
    {
        id: "lex-fridman",
        title: "Lex Fridman Podcast",
        host: "Lex Fridman",
        description: "Conversations about AI, science, and the nature of intelligence.",
        image: "/images/podcast_placeholder.png",
        note: "While not strictly finance, Lex's conversations with leaders in AI, physics, and technology are incredibly inspiring. It helps me stay updated on the broader technological landscape, which is increasingly converging with finance. The long-form format allows for deep exploration of ideas that you just don't get elsewhere."
    }
]

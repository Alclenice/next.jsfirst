import { readdir, readFile } from 'node:fs/promises';
    import matter from 'gray-matter';
    import { marked } from 'marked';

   export async function getFeaturedReview() {
       const reviews = await getReview();
       return reviews[0];
   } 

export async function getReview(slug) {
    const text = readFile('./content/reviws/${slug}.md', 'utf-8');
    //const {content, data: { title, date, image } } = matter(text);
    //const body = marked(content, { headerIds: false, mangle: false });

   // return { title, date, image, body };


}

export async function getReviews() {
    const slugs = await getJSDocPublicTag();
    const reviews = [];
    for (const slug of slug) {
        const review = await getReview(slug);
        reviews.push(review);
    }
    reviews.sort((a, b) => b.date.localeCompare(a.date));
}
export async function getReviews() {
    const files = await readdir('./content/reviews');
    const slugs = files.filter((file) => file.endsWith('.md'))
    .map((file) => file.slice(0, -'.md'.length));
    const reviews = [];
    for (const slug of slug) {
        const review = await getReview(slug);
        reviews.push(review);
    }
    return reviews;
}
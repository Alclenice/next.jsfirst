import Link from 'next/link';
import Heading from '../components/Heading';
//import { getFeatureReview } from '@/lib/reviews';

// home page title
export const metadata = {
    title: {
        default: 'Indie Gamer',
        template: '%s | Indie Gamer',
    },
};
// Todo load featured review
export default function HomePage() {
   // const review = await = await getFeatureReview();
    console.log('[HomePage] rendering');
    return (
        <>
        <Heading>Stardew Valley</Heading>
        <p className='pb-3'>
            Only the best indie games, reviewed for you.
        </p>
        <div className="bg-white border rounded shadow w-80 hover:shadow-xl sm:w-full">
        <Link href="/reviews/stardew-valley"
        className='flex flex-col sm:flex-row'>
          <img src='/images/stardew-valley.jpg' alt='' 
           width="320" height="180"
            className="rounded-t sm:rounded-l sm:rounded-none"
            />

          <h2 className="fonte-semibold font-orbitron py-1 text-center">
             Stardew Valley
          </h2>
          <shareLink />
         </Link>
        </div>
        </>
    );
}



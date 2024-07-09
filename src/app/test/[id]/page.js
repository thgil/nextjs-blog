import { createClient } from '../../../lib/supabase/client';
import Link from 'next/link';
import { getFriends } from '../../../lib/db';

export async function generateMetadata(
  { params }
) {
  const supabase = createClient();

  const { data: rikishi } = await supabase.from('rikishi').select().eq('id', params.id);

  return {
    title: `Sumostats - ${rikishi.shikona}`,
    openGraph: {
      images: [`https://sumostats.vercel.app/api/og/${rikishi.id}`],
    },
  };
}


export default async function Home({ params }) {
  // get time of page load
  const start = new Date().getTime();

  const supabase = createClient();
  const { data } = await supabase.from('rikishi').select().eq('id', params.id);


  const friends = await getFriends(params.id);

  // get time of page load
  const end = new Date().getTime();


  return (
    <div>
      The id of this page is {params.id} for {data?.shikona}

      {
        friends?.map((rikishi) => (
          <div key={rikishi.id}>
            <Link href={`/test/${rikishi.id}`}>{rikishi.shikona}</Link>
          </div>
        ))}
      <p>Current time was {new Date(end).getHours()}:{new Date(end).getMinutes()}:{new Date(end).getSeconds()}:{new Date(end).getMilliseconds()}</p>
      <p>Page loaded in {end - start}ms</p>
    </div>
  );
}

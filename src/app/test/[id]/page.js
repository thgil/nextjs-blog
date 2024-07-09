import { createClient } from '../../../lib/supabase/client';

export async function generateStaticParams() {
  const ids = [1, 2, 3, 4, 5]
  return ids.map((id) => ({
    id: id.toString(),
  }));
}

export default async function Home({ params }) {
  // get time of page load
  const start = new Date().getTime();

  const supabase = createClient();
  const { data, error } = await supabase.from('rikishi').select().eq('id', params.id);

  // get time of page load
  const end = new Date().getTime();


  return (
    <div>
      The id of this page is {params.id}

      {
        data?.map((rikishi) => (
          <div key={rikishi.id}>
            {rikishi.shikona}
          </div>
        ))}
      <p>Current time was {new Date(end).getHours()}:{new Date(end).getMinutes()}:{new Date(end).getSeconds()}:{new Date(end).getMilliseconds()}</p>
      <p>Page loaded in {end - start}ms</p>
    </div>
  );
}

import { createClient } from '../../../lib/supabase/client';

export default async function Home({ params }) {
  const supabase = createClient();
  const { data, error } = await supabase.from('rikishi').select().limit(10);

  console.log(data, error)

  return (
    <div>
      The id of this page is {params.id}

      {
        data?.map((rikishi) => (
          <div key={rikishi.id}>
            {rikishi.shikona}
          </div>
        ))}
    </div>
  );
}

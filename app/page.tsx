import { Poster } from './_components/Poster';

export default async function Home() {
  await fetch('https://httpbin.org/delay/1');

  return (
    <div>
      <h1 className="text-3xl font-bold">Home</h1>

      <div className="mt-8 space-y-8">
        <section>
          <p>Top Picks For You</p>
          <div className="grid grid-cols-3 gap-4 mt-2">
            <Poster title="a" color={'#00c950'} />
            <Poster title="a" color={'#00c950'} />
            <Poster title="a" color={'#00c950'} />
          </div>
        </section>

        <section>
          <p>Recently Played</p>
          <div className="grid grid-cols-6 gap-4 mt-2">
            <Poster title="a" color={'#00c950'} />
            <Poster title="a" color={'#00c950'} />
            <Poster title="a" color={'#00c950'} />
            <Poster title="a" color={'#00c950'} />
            <Poster title="a" color={'#00c950'} />
            <Poster title="a" color={'#00c950'} />
          </div>
        </section>
      </div>
    </div>
  );
}

export const dynamic = 'force-dynamic';

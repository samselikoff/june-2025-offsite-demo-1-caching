import { Poster } from '../_components/Poster';

export default async function Home() {
  await fetch('https://httpbin.org/delay/1');

  return (
    <div>
      <h1 className="text-3xl font-bold">Radio</h1>

      <div className="mt-8 space-y-8">
        <section>
          <p>On Air Now</p>
          <div className="grid grid-cols-3 gap-4 mt-2">
            <Poster title="a" color="#ad46ff" />
            <Poster title="a" color="#ad46ff" />
            <Poster title="a" color="#ad46ff" />
          </div>
        </section>

        <section>
          <p>Latest Episodes</p>
          <div className="grid grid-cols-6 gap-4 mt-2">
            <Poster title="a" color="#ad46ff" />
            <Poster title="a" color="#ad46ff" />
            <Poster title="a" color="#ad46ff" />
            <Poster title="a" color="#ad46ff" />
            <Poster title="a" color="#ad46ff" />
            <Poster title="a" color="#ad46ff" />
          </div>
        </section>
      </div>
    </div>
  );
}

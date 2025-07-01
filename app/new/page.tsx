import { Poster } from '../_components/Poster';

export default async function Home() {
  await fetch('https://httpbin.org/delay/1');

  return (
    <div>
      <h1 className="text-3xl font-bold">New</h1>

      <div className="mt-8 space-y-8">
        <section>
          <p>Latest Songs</p>
          <div className="grid text-blue-500 grid-cols-3 gap-4 mt-2">
            <Poster title="a" color="#2b7fff" />
            <Poster title="a" color="#2b7fff" />
            <Poster title="a" color="#2b7fff" />
          </div>
        </section>

        <section>
          <p>New Releases</p>
          <div className="grid grid-cols-6 gap-4 mt-2">
            <Poster title="a" color="#2b7fff" />
            <Poster title="a" color="#2b7fff" />
            <Poster title="a" color="#2b7fff" />
            <Poster title="a" color="#2b7fff" />
            <Poster title="a" color="#2b7fff" />
            <Poster title="a" color="#2b7fff" />
          </div>
        </section>
      </div>
    </div>
  );
}

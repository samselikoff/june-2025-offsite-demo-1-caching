import { createUser } from './actions';

export default function Page() {
  return (
    <div>
      <p className="text-3xl">New user</p>
      <form action={createUser} className="space-y-4 mt-4">
        <label className="block">
          Name
          <input
            className="border px-2 py-1 block rounded"
            type="text"
            name="name"
          />
        </label>

        <label className="block">
          Age
          <input
            className="border px-2 py-1 block rounded"
            type="number"
            name="age"
          />
        </label>

        <button
          type="submit"
          className="bg-blue-500 text-white rounded px-3 py-2 font-medium"
        >
          Save
        </button>
      </form>
    </div>
  );
}

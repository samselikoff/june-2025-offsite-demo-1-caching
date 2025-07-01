(Branch: `no-loading-between-siblings-in-dev`)

I'm seeing a difference in loading behavior between dev and prod:

- In dev, I see the loading state when navigating from Home to any playlist, but not when navigating from one playlist to another.

- In prod, I always see the loading state when navigating from one playlist to another.

## Repro

To see the buggy dev behavior:

```sh
npm run dev
```

Then click from Home, to the first playlist, then to the second. You won't see a loading spinner show up when going from the first playlist to the second.

To see the correct prod behavior:

```sh
npm run build
npm run start
```

Follow the same steps. You should see the loading spinner whenever clicking on a playlist, regardless of which route you come from.

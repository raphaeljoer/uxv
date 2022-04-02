## App Description

Contains specific settings for application operation. Here inside you will
find global styles, routing, instance of global stores (like redux, for example),
Layouts, Providers etc.

> The most important rule here is: `index.ts` only exposes `App.tsx` to
> be rendered in `src/index.html`, ie no other project files import from
> the `/app` folder.

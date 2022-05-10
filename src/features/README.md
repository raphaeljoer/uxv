## Features Description

Each application functionality will be contained in its own folder
(example: `/features/landing-page` or `/features/auth`) and will expose its
public API in its `index.ts` (i.e. any piece of code that can be publicly
consumed by other features or pages) must necessarily be exposed in
the `index.ts` file.

Defines the boundaries between `features`. Think of them as modules that
can be extracted and become a package in NPM, that is, preferably, features
should be self-sufficient and not have dependencies on other features.

> If this is not possible, limit it to using only the public API of a given
> feature (always import files from `/features/bills` and never from
> `/features/bills/components`) and try to depend as little as possible on
> others features.

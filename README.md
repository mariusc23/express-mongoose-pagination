# express-query-pagination

> No frills skip/limit middleware.

## Installation

    npm install --save express-query-pagination

## Usage

Mount it in your router:

```js
app.get('/api/items', require('express-query-pagination'), ctrl);
```

```
`?skip=10`          => res.locals.skip === 10
`?skip=10&limit=10` => res.locals.skip === 10 && res.locals.limit === 10
`?p=2`              => res.locals.skip === 10 && res.locals.limit === 10
`?p=3&limit=20`     => res.locals.skip === 40 && res.locals.limit === 20
```

## License

Copyright (c) 2016 Marius Craciunoiu. Licensed under the MIT license.

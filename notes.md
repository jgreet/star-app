## DB in us-west-2, Vecel functions in pdx1

```
prisma:info Starting a mysql pool with 4 connections.
🔌 connecting to database took 467ms

prisma:info Starting a mysql pool with 4 connections.
🔌 connecting to database took 480ms
```

## DB in us-west-2 from my laptop in NYC

```
prisma:info Starting a mysql pool with 4 connections.
🔌 connecting to database took 664ms
```

## DB in us-east-1, Vercel functions in iad1
```
prisma:info Starting a mysql pool with 4 connections.
🔌 connecting to database took 550ms

prisma:info Starting a mysql pool with 4 connections.
🔌 connecting to database took 468ms
```

## DB in us-east-1, Vercel functions in pdx1

```
prisma:info Starting a mysql pool with 4 connections.
🔌 connecting to database took 948ms

prisma:info Starting a mysql pool with 4 connections.
🔌 connecting to database took 868ms
```

try a smaller pool size

```
** Set pool size to 1
prisma:info Starting a mysql pool with 1 connections.
🔌 connecting to database took 905ms
```

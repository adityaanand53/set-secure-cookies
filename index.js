const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:4200",
    credentials: true,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

// set a cookie
app.use(function (req, res, next) {
  res.cookie(
    "rtFa",
    "0SN05h9lNOQpWxq980LOlT0gdSXrRs5TKWdhbpk/YsAmRUMzQzdERUUtRDU1Mi00OTRCLUEzOTMtN0Y5NDFBOTBCOTg1nhKsVVcJU8Nv1dEeORURRfFDe5KHWSU/ZrG84DASIy8GPu13Lfht6wHdH0tVKKhoR4DbF6SHvs5LT4DOv0lJRMRkwTAu4uY2mruhc8yvMAUvF9Bv7+CNcVKuJot5tofGIGOBNmbPUsO1sIMAwMUyksVhmlKisJWUz9unw6AEy4o/BwX7gIxD/tHChsVxV0o/2AXXY6BbEJp9/ufwQgXOHVhAl5lVS84PVuEMNj6NwSvASMyxDFoE3UK1VZ29uDXYZPd9nC9SN5sZNU3ZEUgFIY7X6pTvVfogEz5FXxab0PfrV9MYDsREoRkpcWTIgLOJWK9cgJ3JTokWYIW2Nt/vJ0UAAAA=",
    { maxAge: 900000, httpOnly: true, secure: true, sameSite: "none", path:"/" }
  );
  res.cookie(
    "FedAuth",
    "77u/PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48U1A+VjYsMGguZnxtZW1iZXJzaGlwfDEwMDMyMDAwOTJkODI5MmRAbGl2ZS5jb20sMCMuZnxtZW1iZXJzaGlwfGFkaXR5YS5zLmFuYW5kQHpzLmNvbSwxMzIzMDQ3NDExNTAwMDAwMDAsMTMyMjg4NTM1MjQwMDAwMDAwLDEzMjMwNTYyOTg4NzMyNDA5NiwxNjUuMjI1LjEwNi41MCwyLGVjM2M3ZGVlLWQ1NTItNDk0Yi1hMzkzLTdmOTQxYTkwYjk4NSwsVjIhMTAwMzIwMDA5MkQ4MjkyRCExMzIzMDQ3NDExNSxhYzE5NjY0ZC05Nzc3LTQzOWEtYmZlMy1hODllZjlhNTk2ODUsYWMxOTY2NGQtOTc3Ny00MzlhLWJmZTMtYTg5ZWY5YTU5Njg1LCwwLDEzMjMwNDgwMTg4Njg1NTM1MywxMzIzMDczNTc4ODY4NTUzNTMsLCwsYjYvMnBJK3k0cEdXdEdzZUQrL1NNb05JWG1jTlRITXhJaVVDUDBPc1hJOEpJdkY4ZlZ5U0o1a2syMEU3ME1UZFRhVmJTK0pLY2VXdDhoRkxMNmVLcERjOFVBOHlRMlJoeXJ4TmREaFF4R1lLbnJrM2lDdUlXd0o5Ry92eG92SFB6R0FCZ0NJVnF5blRONkhaUTlDZllLU0w5ZTlISFZFZk5TZnhOcnZaWEpEWDVJNXkxaTJHTDc4L3VHN0ovWlQvM25CcnJ0QmZOQkxsTVJScEE5TmZ0N0pyai95U0RYVnVVbzRNR2VsM0xaYllIOU03OFBCR2N0SVpsU0tqbnNuU1YybkJLMW92WmRNY1dLRFFzZ3JyMHFHTXRnQ2trV3gxTS9ta0FVektpQWdIWERDL0s0TzRwUTBlTjNWSnhsSHN5bk1CVW5BY21sYkdmd0c5K2xqK2J3PT08L1NQPg==",
    { maxAge: 900000, httpOnly: true, secure: true, sameSite: "none", path:"/" }
  );
  console.log("cookie created successfully");
  next();
});

app.get("/", async (req, res) => {
  res.send("Success");
});

app.listen(process.env.PORT || 3000);

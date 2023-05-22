### Sharp Missing In Production

#### Why This Error Occurred

- The next/image component's default loader uses squoosh because it is quick to install and suitable for a development environment.

- For a production environment using next start, it is strongly recommended you install sharp.

- You are seeing this error because Image Optimization in production mode (next start) was detected.

- For a production environment using output: "standalone", you must install sharp.
- You are seeing this error because Image Optimization in standalone mode (output: "standalone") was detected.

#### Possible Ways to Fix It

```
npm i sharp
```

Then, build your project with next build. Finally, restart the server with either next start for production mode or node server.js for standalone mode.

- If sharp is already installed but can't be resolved, set the NEXT_SHARP_PATH environment variable such as export NEXT_SHARP_PATH=/tmp/node_modules/sharp. Then, build your project with next build. Finally, restart the server with either next start for production mode or node server.js for standalone mode.

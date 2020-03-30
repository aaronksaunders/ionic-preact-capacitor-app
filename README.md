# ionictest

## CLI Commands

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# test the production build locally
npm run serve

# run tests with jest and preact-render-spy 
npm run test
```

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).



## HOW THIS WORKS

- running from local host, see capacitor.config.json
- getting weird capacitor url scheme error when running with out it
- cannot make a production build because of some error with Uglify
- have to turn off pre-rendering in the build, see package.json script modification


## TO WORK WITH CAPACITOR
- turn off prerendering
- building for deployment on device, not sure why yet
  - npm run -s serve
  - then kill the server
  - then do npm cap sync ios
- when i run the same commands, minus the server, the build doesnt work properly

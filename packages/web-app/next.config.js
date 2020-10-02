
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

// Tell webpack to compile the "bar" package, necessary if you're using the export statement for example
// https://www.npmjs.com/package/next-transpile-modules
const withTM = require('next-transpile-modules')(['bar', 'foo']); 

module.exports = withBundleAnalyzer(withTM());

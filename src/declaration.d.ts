/**
 * note: from here - https://stackoverflow.com/questions/69516868/loading-svg-file-using-esbuild
 *
 * file: app-svg-element-onclick
 */

declare module '*.svg' {
  const content: string;
  export default content;
}
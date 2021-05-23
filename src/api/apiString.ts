import env from "react-dotenv"

console.log('env', env)

const base: string = env.URL


const apiString = {
  text: `${base}/text`,
  vocabulary: `${base}/vocabulary`,
  script: `${base}/script`,
  sound: `${base}/sound`,
  page: `${base}/page`
}

export default apiString

// npm run build
// tar -zcvf build.tar.gz build
// echo 5566 | scp -S taka@203.204.160.248:/home/taka/project/frontend/vocabulary-trainer

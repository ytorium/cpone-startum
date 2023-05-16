import TwitterApi from 'twitter-api-v2';
//import { fetchUser } from '../services/twitter'

// mod A

export default function Twitter() {
/*
const twitterClient = new TwitterApi({
    appKey: process.env.APP_KEY!,
    appSecret: process.env.APP_SECRET!,
    accessToken: process.env.ACCESS_TOKEN!,
    accessSecret: process.env.ACCESS_SECRET!,
});
*/
  const twitterClient = new TwitterApi('6lzVZHTWWEaqocAewMyhNFdmL');
  const readOnlyClient = twitterClient.readOnly;
  const user = readOnlyClient.v2.userByUsername('YToimich');
  console.log(user);

  return (
    <div className="p-2 max-w-xs lg:max-w-md mx-auto mt-12">
      <h2 className="text-2xl font-semibold">Twitter Card</h2>

      <div className="mt-8">
       <p>Hello Mir</p>
      </div>
    </div>
  )
}

// mod B

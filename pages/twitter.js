import { fetchUser } from '../services/twitter'

// mod A

export default function Twitter(props) {
  return (
    <div className="p-2 max-w-xs lg:max-w-md mx-auto mt-12">
      <h2 className="text-2xl font-semibold">Twitter Card</h2>

      <div className="mt-8">
        {
          (!props.twitterInfo)? <p>Couldnt fetch information from Twitter</p>: <TwitterCard twitterInfo={props.twitterInfo} />
        }
      </div>
    </div>
  )
}

// mod B

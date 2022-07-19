export default function AuthStepDiscord(props: { username: string }) {
  return (
    <div className={`auth-step ${props.username !== '' ? 'border-green-400' : 'border-white'}`}>
      <div className="break-words text-xl font-extrabold">
        <div className="">
          Link your Discord to complete authentication {props.username !== '' && <span className="ml-2">✅</span>}
        </div>
      </div>
    </div>
  );
}

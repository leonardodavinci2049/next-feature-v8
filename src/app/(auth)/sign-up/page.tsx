import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="grid h-screen w-full place-content-center">
      <SignUp afterSignUpUrl="/" signInUrl="/sign-in" redirectUrl="/" />
    </div>
  );
}

'use client';

import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white dark:bg-black px-4">
      <div className="w-full max-w-md">
        <SignIn
          path="/sign-in"
          routing="path"
          signUpUrl="/sign-up"
          appearance={{
            elements: {
              card: "shadow-xl rounded-xl border border-gray-200 dark:border-gray-700",
            },
          }}
        />
      </div>
    </div>
  );
}

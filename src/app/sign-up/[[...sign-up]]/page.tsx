'use client';

import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white dark:bg-black px-4">
      <div className="w-full max-w-md">
        <SignUp
          path="/sign-up"
          routing="path"
          signInUrl="/sign-in"
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

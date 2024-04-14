
import { redirect } from "next/navigation";

export default function Login() {
  const redirectToDashboard = async () => {
    'use server'
    redirect("/home");
  }
  
  return (
    <main className="w-full text-white h-dvh flex justify-center items-center bg-gradient-to-br from-blue-900 via-pink-500 to-cyan-300">
      <form action={redirectToDashboard}>
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm mx-auto max-w-sm" data-id="1" data-v0-t="card">
        <div className="flex flex-col px-6 pt-6 space-y-1" data-id="2">
          <h3 className="whitespace-nowrap tracking-tight text-2xl font-bold" data-id="3">Login</h3>
          <p className="text-sm text-muted-foreground" data-id="4">
          Enter your email and password to login to your account
          </p>
        </div>
      <div className="p-6" data-id="5">
        <div className="space-y-4" data-id="6">
          <div className="space-y-2" data-id="7">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Email
              <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="email" placeholder="m@example.com" required type="email" />
            </label>
          </div>
          <div className="space-y-2" data-id="10">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Password
              <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="password" placeholder="Your password" required type="password" />
            </label>
          </div>
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full" type="submit">
        Login
      </button>
      </div>
      </div>
      </div>
      </form>
    </main>
  );
}

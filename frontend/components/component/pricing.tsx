
import Link from "next/link"

export function Pricing() {
  return (
    <section className="w-full py-6 md:py-12 lg:py-16">
      <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">EdRAGon</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/landing/pricing">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/login">
            Login
          </Link>
        </nav>
      </header>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Choose Your Plan
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">The perfect plan for every workflow.</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Whether you're a solo developer, a growing team, or an enterprise with advanced needs, we have a plan
              that's right for you.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          <div className="flex flex-col gap-1">
            <div className="space-y-1.5">
              <h3 className="text-xl font-bold">Hobbyist</h3>
              <p className="text-2xl font-bold">$9</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Perfect for individual projects and experiments.
              </p>
            </div>
            <ul className="grid gap-2 py-4">
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                Unlimited bandwidth
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                Custom subdomain
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                Basic edge network
              </li>
            </ul>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Purchase
            </Link>
          </div>
          <div className="flex flex-col gap-1">
            <div className="space-y-1.5">
              <h3 className="text-xl font-bold">Pro</h3>
              <p className="text-2xl font-bold">$25</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Supercharge your site with advanced features.</p>
            </div>
            <ul className="grid gap-2 py-4">
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                Unlimited bandwidth
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                Custom subdomain
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                Basic edge network
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                Advanced edge handlers
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                A/B testing
              </li>
            </ul>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Contact Sales
            </Link>
          </div>
          <div className="flex flex-col gap-1">
            <div className="space-y-1.5">
              <h3 className="text-xl font-bold">Enterprise</h3>
              <p className="text-2xl font-bold">$99</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                The platform for rapid progress. Let your team focus on shipping features instead of managing
                infrastructure with automated CI/CD, built-in testing, and integrated collaboration.
              </p>
            </div>
            <ul className="grid gap-2 py-4">
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                Unlimited bandwidth
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                Custom subdomain
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                Basic edge network
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                Advanced edge handlers
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                A/B testing
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                Instant form processing
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                Edge functions
              </li>
            </ul>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}

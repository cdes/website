import Link from "next/link";

const links = [
  { href: "https://github.com/vercel/next.js", label: "GitHub" },
  { href: "https://nextjs.org/docs", label: "Docs" },
];

export default function Nav() {
  return (
    <nav>
      <ul className="flex items-center justify-between p-8">
        <li>
          <Link
            href="/"
            className="text-blue-500 no-underline text-accent-1 dark:text-blue-300"
          >
            Home
          </Link>
        </li>
        <ul className="flex items-center justify-between space-x-4">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <Link href={href} className="no-underline btn-blue">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  );
}

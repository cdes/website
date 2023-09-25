import Image from "next/image";
import Icon from "@mdi/react";
import { mdiGithub, mdiLinkedin, mdiTwitter } from "@mdi/js";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-4 p-12 rounded-xl">
      <Image
        src="/personal-photo.jpg"
        width={80}
        height={80}
        alt="Portrait"
        className="rounded-full border-4 border-white"
      />

      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">أحمد الحداد</h1>
      </div>

      <div className="flex flex-row space-x-4">
        <a
          href="https://www.linkedin.com/in/ahmad-al-haddad-394b5710"
          className="hover:text-zinc-400"
        >
          <Icon path={mdiLinkedin} size={1} />
        </a>
        <a href="https://twitter.com/cdes" className="hover:text-zinc-400">
          <Icon path={mdiTwitter} size={1} />

          {/* <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.48048 6.82598H7.70337L15.5509 17.1742H17.328L9.48048 6.82598Z" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V5C21 4.46957 20.7893 3.96086 20.4142 3.58579ZM11.0508 12.6188L6.03163 6H9.9L13.1905 10.339L17.2628 6H18.3996L13.6983 11.009L19 18H15.1316L11.5589 13.2886L7.13682 18H6L11.0508 12.6188Z"
            />
          </svg> */}
        </a>
        <a href="https://github.com/cdes/" className="hover:text-zinc-400">
          <Icon path={mdiGithub} size={1} />
        </a>
      </div>
    </main>
  );
}

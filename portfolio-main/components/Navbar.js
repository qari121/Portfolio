import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import userData from "@constants/data";

export default function Navbar() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="backdrop-filter backdrop-blur-xl sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-10">
        <div className="flex  md:flex-row justify-between items-center">
          <div className="flex flex-col">
            <Link href="/">
              <a>
                <h1 className="font-semibold text-xl dark:text-gray-100">
                  {userData.name}
                </h1>
                <p className="text-base font-light text-gray-500 dark:text-gray-300">
                  {userData.designation}
                </p>
              </a>
            </Link>
          </div>

          <div className="space-x-8 hidden md:block">
            <Link href="/projects">
              <a
                className={`text-base  ${router.asPath === "/projects"
                  ? "text-gray-800 font-bold dark:text-gray-400"
                  : "text-gray-600 dark:text-gray-300 font-normal "
                  }`}
              >
                Projects
                {router.asPath === "/projects" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-down inline-block h-3 w-3"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                    />
                  </svg>
                )}
              </a>
            </Link>
            {/* <Link href="/experience">
              <a
                className={`text-base  ${router.asPath === "/experience"
                  ? "text-gray-800 font-bold dark:text-gray-400"
                  : "text-gray-600 dark:text-gray-300 font-normal "
                  }`}
              >
                Experience{" "}
                {router.asPath === "/experience" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-down inline-block h-3 w-3"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                    />
                  </svg>
                )}
              </a>
            </Link>
            <Link href="/thinkific">
              <a
                className={`text-base  ${router.asPath === "/thinkific"
                  ? "text-gray-800 font-bold dark:text-gray-400"
                  : "text-gray-600 dark:text-gray-300 font-normal "
                  }`}
              >
                Thinkific
                {router.asPath === "/thinkific" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-down inline-block h-3 w-3"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                    />
                  </svg>
                )}
              </a>
            </Link> */}
          </div>

          <div className="space-x-4 flex flex-row items-center">
            <a
              href={`mailto:${userData.email}`}
              className="text-base font-normal text-gray-600 dark:text-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
              </svg>
            </a>
            <a
              href={"https://calendly.com/qarixaeed1/new-project"}
              target="_blank"
              className="text-base font-normal text-gray-600 dark:text-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17 3v-2c0-.552.447-1 1-1s1 .448 1 1v2c0 .552-.447 1-1 1s-1-.448-1-1zm-12 1c.553 0 1-.448 1-1v-2c0-.552-.447-1-1-1-.553 0-1 .448-1 1v2c0 .552.447 1 1 1zm13 13v-3h-1v4h3v-1h-2zm-5 .5c0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5-4.5 2.019-4.5 4.5zm11 0c0 3.59-2.91 6.5-6.5 6.5s-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5zm-14.237 3.5h-7.763v-13h19v1.763c.727.33 1.399.757 2 1.268v-9.031h-3v1c0 1.316-1.278 2.339-2.658 1.894-.831-.268-1.342-1.111-1.342-1.984v-.91h-9v1c0 1.316-1.278 2.339-2.658 1.894-.831-.268-1.342-1.111-1.342-1.984v-.91h-3v21h11.031c-.511-.601-.938-1.273-1.268-2z" />
              </svg>
            </a>
            <button
              aria-label="Toggle Dark Mode"
              type="button"
              className="w-12 h-12 p-3 rounded focus:outline-none"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {mounted && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  className="w-4 h-4 text-yellow-500 dark:text-yellow-500"
                >
                  {theme === "dark" ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  )}
                </svg>
              )}
            </button>
          </div>
        </div>
        <div className="space-x-8 block md:hidden mt-4">
          {/* <Link href="/thinkific">
            <a className="text-base font-normal text-gray-600 dark:text-gray-300">
              Thinkific
            </a>
          </Link> */}
          <Link href="/projects">
            <a className="text-base font-normal text-gray-600 dark:text-gray-300">
              Projects
            </a>
          </Link>
          {/* <Link href="/experience">
            <a className="text-base font-normal text-gray-600 dark:text-gray-300">
              Experience
            </a>
          </Link> */}
        </div>
      </div>
    </nav>
  );
}

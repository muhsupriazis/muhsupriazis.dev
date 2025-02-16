import { Social } from "./find-me";

export function Footer() {
  return(
    <footer className='font-[family-name:var(--font-inter)] px-6 mb-5'>
      <Social />
      <p className="py-4">
        Feel free to contact me if you want to know more or just want to say hello.
      </p>
    </footer>
  )
}
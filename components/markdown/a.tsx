import Link from "next/link";

export function mdxA({ children, className = "", href, ...props } : any) {
  if (href[0] === "#") {
    return (
      <a
        href={href}
        className={`text-red-600  ${className}`}
        {...props}
      >
        {children}
      </a>
    );
  } else {
    return (
      <Link
        href={href}
        className={`${className}`}
        {...props}
      >
        {children}
      </Link>
    );
  }
}
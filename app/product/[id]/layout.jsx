import page from "./page";
import { generateMetadata } from "./metadata";

export default function RootLayout({ children, params }) {
  console.log(params);
  return <>{children}</>;
}

export const metadata = {
  openGraph: {
    title: "oneHub - " + getPathname(),
  },
};
export const revalidate = 3600;
function getPathname() {
  if (typeof window !== "undefined") {
    let path = window.location.pathname;
    debugger;
    return;
  }
  // else {
  //   return process.env.PUBLIC_URL;
  // }
}

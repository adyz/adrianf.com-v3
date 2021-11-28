import {
  Link,
  Links,
  LiveReload,
  LoaderFunction,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLocation,
  json,
  useLoaderData
} from "remix";
import * as React from 'react';
import type { LinksFunction } from "remix";

import globalStylesUrl from "~/styles/global.css";

import Header from "./components/Header/Header"
import VectorCharacter404 from "./components/VectorCharacter404"
import { COLOR_MODE_KEY } from "./constants";
import { getCookie } from "./utils/cookie";

/**
 * The `links` export is a function that returns an array of objects that map to
 * the attributes for an HTML `<link>` element. These will load `<link>` tags on
 * every route in the app, but individual routes can include their own links
 * that are automatically unloaded when a user navigates away from the route.
 *
 * https://remix.run/api/app#links
 */
export let links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: globalStylesUrl },
    {
      rel: "icon",
      type: "image/png",
      href: "/images/favicon.png"
    }
  ];
};

export let loader: LoaderFunction = (props) => {
  const realCookieString = props.request.headers.get('cookie');
  const cookieString = realCookieString ? realCookieString : '';
  const colorMode = getCookie(COLOR_MODE_KEY, cookieString);
  
  
  return json({colorMode: colorMode ? colorMode : 'unset'});
};

/**
 * The root module's default export is a component that renders the current
 * route via the `<Outlet />` component. Think of this as the global layout
 * component for your app.
 */
export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

const specialMeta = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "url": "http://www.adrianf.com",
  "logo": "https://res.cloudinary.com/adrianf/image/fetch/f_auto,q_100/https://adrianf.com/images/favicon.png"
}

function Document({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
        <script 
          type='application/ld+json' 
          dangerouslySetInnerHTML={{ 
            __html: `${JSON.stringify(specialMeta)}`
          }} 
        />
      </head>
      <body>
        {children}
        <RouteChangeAnnouncement />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

function Layout({ children }: React.PropsWithChildren<{}>) {
  const profileImage = `http://adrianf.com/images/profile.jpeg`;
  const resizedProfileImage = `https://res.cloudinary.com/adrianf/image/fetch/f_auto,c_fill,h_800,w_800,q_60/${profileImage}`
  const resizedProfileImageMobile = `https://res.cloudinary.com/adrianf/image/fetch/f_auto,c_fill,h_200,w_200,q_60/${profileImage}`
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer>

        <div className="profile">
          <picture>
            <source width="100%" height="100%" media="(max-width: 799px)" srcSet={resizedProfileImageMobile} />
            <source width="100%" height="100%" media="(min-width: 800px)" srcSet={resizedProfileImage} />
            <img width="100%" height="100%" src={resizedProfileImage} alt="Adrian Florescu" />
          </picture>
        </div>
        <div className="copy">
          <p> © {new Date().getFullYear()} Designed & coded by Adrian Florescu</p>
          <p>Developed on <a href="https://www.remix.run">💿Remix</a></p>
          <p><small style={{ fontSize: '7px' }}>Latest update: 24 Nov 2021</small></p>
        </div>
      </footer>
    </>
  );
}

export function CatchBoundary() {
  let caught = useCatch();

  let message;
  switch (caught.status) {
    case 401:
      message = (
        <p>
          Oops! Looks like you tried to visit a page that you do not have access
          to.
        </p>
      );
      break;
    case 404:
      message = (
        <p>Oops! Looks like you tried to visit a page that does not exist.</p>
      );
      break;

    default:
      throw new Error(caught.data || caught.statusText);
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Layout>
        <div className="notFoundWrapper">
          <div className="notFound">
            <VectorCharacter404 />
            <h1>
              {caught.status}: {caught.statusText}
            </h1>
            <p>{message}</p>
            <a href="/">Go Home</a>
          </div>
        </div>

      </Layout>
    </Document>
  );
}

export function ErrorBoundary({ error, request }: { error: Error, request: any }) {
  return (
    <Document title="Error!">

      <Layout>
        <div className="notFoundWrapper">
          <div className="notFound">
            <VectorCharacter404 />
            <h1>There was an error</h1>
            <p>{error.message}</p>
            <a href="/">Go Home</a>
          </div>
        </div>

      </Layout>
    </Document>
  );
}

/**
 * Provides an alert for screen reader users when the route changes.
 */
const RouteChangeAnnouncement = React.memo(() => {
  let [hydrated, setHydrated] = React.useState(false);
  let [innerHtml, setInnerHtml] = React.useState("");
  let location = useLocation();

  React.useEffect(() => {
    setHydrated(true);
  }, []);

  let firstRenderRef = React.useRef(true);
  React.useEffect(() => {
    // Skip the first render because we don't want an announcement on the
    // initial page load.
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }

    let pageTitle = location.pathname === "/" ? "Home page" : document.title;
    setInnerHtml(`Navigated to ${pageTitle}`);
  }, [location.pathname]);

  // Render nothing on the server. The live region provides no value unless
  // scripts are loaded and the browser takes over normal routing.
  if (!hydrated) {
    return null;
  }

  return (
    <div
      aria-live="assertive"
      aria-atomic
      id="route-change-region"
      style={{
        border: "0",
        clipPath: "inset(100%)",
        clip: "rect(0 0 0 0)",
        height: "1px",
        margin: "-1px",
        overflow: "hidden",
        padding: "0",
        position: "absolute",
        width: "1px",
        whiteSpace: "nowrap",
        wordWrap: "normal"
      }}
    >
      {innerHtml}
    </div>
  );
});

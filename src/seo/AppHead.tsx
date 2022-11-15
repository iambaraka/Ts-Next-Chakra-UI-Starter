import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";

type MetaItem = {
  name: string;
  content: string;
};

interface SeoProps {
  description?: string;
  title?: string;
  iconUrl?: string;
  author?: string;
  slogan?: string;
  meta?: MetaItem[];
}

const AppHead: React.FC<SeoProps> = ({
  description = "A starter template for Next.js with Chakra UI",
  title = "Next.js Chakra UI Starter",
  iconUrl = "/favicon.ico",
  author = "Next.js Chakra UI Starter",
  slogan = "A starter template for Next.js with Chakra UI",
  meta = [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
  ],
}) => {
  const { asPath } = useRouter();

  const currentUrl = asPath.split("/")[1];
  const currentPath = currentUrl?.includes("?")
    ? currentUrl?.slice(
        0,
        currentUrl.split("")?.findIndex((char) => char === "?") ??
          currentUrl.length - 1
      )
    : currentUrl;

  const pageTitle = `${title}  ${
    currentPath
      ? " | " + currentPath[0]?.toUpperCase() + currentPath.slice(1)
      : " - " + slogan
  }`;

  const metaData = [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: pageTitle,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: pageTitle,
    },
    {
      name: `twitter:description`,
      content: description,
    },
  ].concat(meta);

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta charSet="UTF-8" />
      <meta
        httpEquiv="X-UA-Compatible"
        content="IE=edge"
      />
      {metaData.map(({ name, content }, i) => (
        <meta
          key={i}
          name={name}
          content={content}
        />
      ))}
      <link
        rel="apple-touch-icon"
        href={iconUrl}
        key="apple"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={iconUrl}
        key="icon32"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={iconUrl}
        key="icon16"
      />
      <link
        rel="icon"
        href={iconUrl}
        key="favicon"
      />
    </Head>
  );
};

export default AppHead;

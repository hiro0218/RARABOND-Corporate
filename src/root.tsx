import type { MinistaLocation } from "minista"

import { Head } from "minista"

import "./root.css"
import AppLayout from "./components/Layout"

import pkj from "../package.json"

type RootProps = {
  children: React.ReactNode
}

export type PageProps = {
  location: MinistaLocation
}

const Root = ({ children }: RootProps) => {
  const site = pkj.site
  const siteTitle = `${pkj.site} | ${pkj.description}`
  const siteDescription = pkj.description
  const siteUrl = "https://www.rarabond.com/"
  const title = `${site} | ${pkj.description}`
  const ogUrl = siteUrl
  const ogImage = siteUrl + "/assets/images/logo_large.png"
  const ogType = location.pathname === "/" ? "website" : "article"
  const twitterCard = "summary_large_image"

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={siteDescription} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content={siteTitle} />
        <meta property="og:type" content={ogType} />
        <meta name="twitter:card" content={twitterCard} />
        <meta name="viewport" content='width=device-width, initial-scale=1' />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;700&display=swap" rel="stylesheet" />
        <script
          key="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": ${site},
              "url": ${siteUrl},
            }`
          }}
        />
      </Head>
      <AppLayout>{children}</AppLayout>
    </>
  )
}

export default Root

import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./styles.scss";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.ammarkhurshid.com"),
  title: {
    default: "Ammar Khurshid | Fullstack Web Developer",
    template: "%s | Ammar Khurshid",
  },
  description:
    "Ammar Khurshid is a fullstack web developer with 4+ years of experience building with React and Next.js. Currently shipping product analytics at Sainsbury's. MSc Computing Science with Distinction from the University of Glasgow.",
  keywords: [
    "Ammar Khurshid",
    "fullstack developer",
    "React developer",
    "Next.js developer",
    "frontend developer",
    "software engineer",
    "Adobe Analytics",
    "web developer portfolio",
    "JavaScript developer",
    "TypeScript developer",
  ],
  authors: [{ name: "Ammar Khurshid", url: "https://www.ammarkhurshid.com" }],
  creator: "Ammar Khurshid",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1 },
  },
  alternates: {
    canonical: "https://www.ammarkhurshid.com",
  },
  openGraph: {
    type: "profile",
    url: "https://www.ammarkhurshid.com",
    title: "Ammar Khurshid | Fullstack Web Developer",
    description:
      "Fullstack web developer with 4+ years of experience in React, Next.js and Adobe Analytics. Currently at Sainsbury's. MSc CS with Distinction from the University of Glasgow.",
    siteName: "Ammar Khurshid",
    images: [
      {
        url: "/images/ammar.jpg",
        width: 280,
        height: 280,
        alt: "Ammar Khurshid — Fullstack Web Developer",
      },
    ],
    firstName: "Ammar",
    lastName: "Khurshid",
  },
  twitter: {
    card: "summary",
    title: "Ammar Khurshid | Fullstack Web Developer",
    description:
      "Fullstack web developer with 4+ years of experience in React, Next.js and Adobe Analytics. Currently at Sainsbury's.",
    images: ["/images/ammar.jpg"],
  },
};

export const viewport = {
  colorScheme: "light dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ammar Khurshid",
  url: "https://www.ammarkhurshid.com",
  image: "https://www.ammarkhurshid.com/images/ammar.jpg",
  jobTitle: "Software Engineer",
  description:
    "Fullstack web developer with 4+ years of experience specialising in React, Next.js and Adobe Analytics. MSc Computing Science with Distinction from the University of Glasgow.",
  sameAs: [
    "https://github.com/zorgonide",
    "https://www.linkedin.com/in/ammar-khurshid-757140177/",
    "https://www.instagram.com/ammar.khurshid/",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Sainsbury's",
    url: "https://www.sainsburys.co.uk",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "University of Glasgow",
      url: "https://www.gla.ac.uk/",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Manipal Institute of Technology",
    },
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Adobe Analytics",
    "Web Development",
    "UI/UX Design",
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name: "MSc Computing Science",
      recognizedBy: { "@type": "CollegeOrUniversity", name: "University of Glasgow" },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

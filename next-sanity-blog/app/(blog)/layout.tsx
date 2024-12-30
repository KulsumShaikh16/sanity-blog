// import "../globals.css";

// import { SpeedInsights } from "@vercel/speed-insights/next";
// import type { Metadata } from "next";
// import {
//   VisualEditing,
//   toPlainText,
//   type PortableTextBlock,
// } from "next-sanity";
// import { Inter } from "next/font/google";
// import { draftMode } from "next/headers";

// import AlertBanner from "./alert-banner";
// import PortableText from "./portable-text";

// import * as demo from "@/sanity/lib/demo";
// import { sanityFetch } from "@/sanity/lib/fetch";
// import { settingsQuery } from "@/sanity/lib/queries";
// import { resolveOpenGraphImage } from "@/sanity/lib/utils";

// export async function generateMetadata(): Promise<Metadata> {
//   const settings = await sanityFetch({
//     query: settingsQuery,
//     // Metadata should never contain stega
//     stega: false,
//   });
//   const title = settings?.title || demo.title;
//   const description = settings?.description || demo.description;

//   const ogImage = resolveOpenGraphImage(settings?.ogImage);
//   let metadataBase: URL | undefined = undefined;
//   try {
//     metadataBase = settings?.ogImage?.metadataBase
//       ? new URL(settings.ogImage.metadataBase)
//       : undefined;
//   } catch {
//     // ignore
//   }
//   return {
//     metadataBase,
//     title: {
//       template: `%s | ${title}`,
//       default: title,
//     },
//     description: toPlainText(description),
//     openGraph: {
//       images: ogImage ? [ogImage] : [],
//     },
//   };
// }

// const inter = Inter({
//   variable: "--font-inter",
//   subsets: ["latin"],
//   display: "swap",
// });

// export default async function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const data = await sanityFetch({ query: settingsQuery });
//   const footer = data?.footer || [];
//   const { isEnabled: isDraftMode } = await draftMode();

//   return (
//     <html lang="en" className={`${inter.variable} bg-white text-black`}>
//       <body>
//         <section className="min-h-screen">
//           {isDraftMode && <AlertBanner />}
//           <main>{children}</main>
//           <footer className="bg-accent-1 border-accent-2 border-t">
//             <div className="container mx-auto px-5">
//               {footer.length > 0 ? (
//                 <PortableText
//                   className="prose-sm text-pretty bottom-0 w-full max-w-none bg-white py-12 text-center md:py-20"
//                   value={footer as PortableTextBlock[]}
//                 />
//               ) : (
//                 <div className="flex flex-col items-center py-28 lg:flex-row">
//                   <h3 className="mb-10 text-center text-4xl font-bold leading-tight tracking-tighter lg:mb-0 lg:w-1/2 lg:pr-4 lg:text-left lg:text-5xl">
//                     Built with Next.js.
//                   </h3>
//                   <div className="flex flex-col items-center justify-center lg:w-1/2 lg:flex-row lg:pl-4">
//                     {/* <a
//                       href="https://nextjs.org/docs"
//                       className="mx-3 mb-6 border border-black bg-black py-3 px-12 font-bold text-white transition-colors duration-200 hover:bg-white hover:text-black lg:mb-0 lg:px-8"
//                     >
//                       Read Documentation
//                     </a>
//                     <a
//                       href="https://github.com/vercel/next.js/tree/canary/examples/cms-sanity"
//                       className="mx-3 font-bold hover:underline"
//                     >
//                       View on GitHub
//                     </a> */}

// <form className="bg-black px-6 sm:px-8 lg:px-12 py-6 w-1/3 md:w-1/2 ">
//       <div className="w-full">
//         <h2 className="text-3xl font-bold mb-5 text-gray-400 text-center uppercase">
//           reach us
//         </h2>
//         <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 mb-4">
//           <input
//             type="text"
//             placeholder="Name"
//             name="name"
//             className="w-full px-3 py-2  text-black placeholder-gray-400 bg-white border rounded"
//           />

//           <input
//             type="email"
//             placeholder="Email"
//             required
//             name="email"
//             className="w-full px-3 py-2  text-black placeholder-gray-400 bg-light border rounded"
//           />
//         </div>

//         <textarea
//           rows={3}
//           placeholder="Message"
//           name="message"
//           className="mb-4 w-full px-3 py-2  text-black placeholder-gray-400 bg-light border rounded"
//         />

//         <button className="px-12 py-3 text-xl font-semibold border-2 border-dark  text-light hover:text-dark uppercase transition-all duration-150 ease-linear bg-dark hover:bg-light rounded-lg block mx-auto text-gray-300">
//           Submit
//         </button>
//       </div>
//     </form>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </footer>
//         </section>
//         {isDraftMode && <VisualEditing />}
//         <SpeedInsights />
//       </body>
//     </html>
//   );
// }
import "../globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import {
  VisualEditing,
  toPlainText,
  type PortableTextBlock,
} from "next-sanity";
import { Inter } from "next/font/google";
import { draftMode } from "next/headers";

import AlertBanner from "./alert-banner";
import PortableText from "./portable-text";

import * as demo from "@/sanity/lib/demo";
import { sanityFetch } from "@/sanity/lib/fetch";
import { settingsQuery } from "@/sanity/lib/queries";
import { resolveOpenGraphImage } from "@/sanity/lib/utils";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await sanityFetch({
    query: settingsQuery,
    stega: false,
  });
  const title = settings?.title || demo.title;
  const description = settings?.description || demo.description;

  const ogImage = resolveOpenGraphImage(settings?.ogImage);
  let metadataBase: URL | undefined = undefined;
  try {
    metadataBase = settings?.ogImage?.metadataBase
      ? new URL(settings.ogImage.metadataBase)
      : undefined;
  } catch {
    // ignore
  }
  return {
    metadataBase,
    title: {
      template: `%s | ${title}`,
      default: title,
    },
    description: toPlainText(description),
    openGraph: {
      images: ogImage ? [ogImage] : [],
    },
  };
}

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await sanityFetch({ query: settingsQuery });
  const footer = data?.footer || [];
  const { isEnabled: isDraftMode } = await draftMode();

  return (
    <html lang="en" className={`${inter.variable} bg-white text-black`}>
      <body>
        <section className="min-h-screen">
          {isDraftMode && <AlertBanner />}
          <main>{children}</main>
          <footer className="bg-accent-1 border-accent-2 border-t">
            <div className="container mx-auto px-5">
              {footer.length > 0 ? (
                <PortableText
                  className="prose-sm text-pretty bottom-0 w-full max-w-none bg-white py-12 text-center md:py-20"
                  value={footer as PortableTextBlock[]}
                />
              ) : (
                <div className="flex flex-col items-center py-28 lg:flex-row">
                  <h3 className="mb-10 text-center text-4xl font-bold leading-tight tracking-tighter lg:mb-0 lg:w-1/2 lg:pr-4 lg:text-left lg:text-5xl">
                    Built with Next.js & Sanity.
                  </h3>
                  <div className="flex flex-col items-center justify-center lg:w-1/2 lg:flex-row lg:pl-4">
                    <form className="bg-white shadow-lg rounded-lg px-6 sm:px-8 lg:px-12 py-6 w-full max-w-md">
                      <h2 className="text-3xl font-bold mb-5 text-gray-700 text-center uppercase">
                        Reach Us
                      </h2>
                      <div className="flex flex-col sm:flex-row gap-4 mb-4">
                        <input
                          type="text"
                          placeholder="Name"
                          name="name"
                          className="w-full px-3 py-2 text-black placeholder-gray-400 placeholder-border-white bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-white"
                        />
                        <input
                          type="email"
                          placeholder="Email"
                          required
                          name="email"
                          className="w-full px-3 py-2 text-black placeholder-gray-400 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-white"
                        />
                      </div>

                      <textarea
                        rows={3}
                        placeholder="Message"
                        name="message"
                        className=" mb-4 w-full px-3 py-2 text-black placeholder-gray-400 placeholder-border-white bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-white"
                      />

                      <button className="w-full px-4 py-3 text-xl font-semibold border-2 border-black text-white bg-black hover:bg--700 transition-all duration-150 ease-linear rounded-lg">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>
            <div className="bg-black text-white text-center py-4 ">

            <div>

            <p className="">
            Developed
            <span>&nbsp;with&nbsp;💖&nbsp;</span>
          </p>
          <p className="text-xs text-light">
            © 2024 <span className="text-light font-bold">&nbsp;KULSUM </span>
            <span className="text-accentDarkPrimary font-bold">
              SHAIKH&nbsp;
            </span>{" "}
            All rights reserved.
          </p>
        </div>

</div>
          </footer>
        </section>
        {isDraftMode && <VisualEditing />}
        <SpeedInsights />
      </body>
    </html>
  );
} 

//This updated code enhances the form's styling with a cleaner layout, improved color contrast, and better focus states for inputs. The button is now more prominent, and the overall design is more user-friendly and visually appealing.
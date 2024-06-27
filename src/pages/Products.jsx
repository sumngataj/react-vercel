import {
  ExtendedNav,
  Hero,
  Analytics,
  Cards,
  Newsletter,
  Featured,
  Footer,
  Team,
} from "../components/index";

export default function Services() {
  // Example array of image URLs
  const imageUrls = [
    "https://ueeshop.ly200-cdn.com/u_file/UPAM/UPAM822/2007/products/02/38dad62004.jpg.500x500.jpg?x-oss-process=image/format,webp",
    "https://ueeshop.ly200-cdn.com/u_file/UPAM/UPAM822/2007/products/02/d50f642f45.png.500x500.png?x-oss-process=image/format,webp",
    "https://ueeshop.ly200-cdn.com/u_file/UPAM/UPAM822/2008/products/07/47e821056e.jpg.500x500.jpg?x-oss-process=image/format,webp",
    "https://ueeshop.ly200-cdn.com/u_file/UPAM/UPAM822/2008/products/07/b42da49e53.jpg.500x500.jpg?x-oss-process=image/format,webp",
    "https://ueeshop.ly200-cdn.com/u_file/UPAM/UPAM822/2006/products/17/e276b7ea43.jpg.500x500.jpg?x-oss-process=image/format,webp",
    "https://ueeshop.ly200-cdn.com/u_file/UPAM/UPAM822/2006/products/17/3dd7d19801.jpg.500x500.jpg?x-oss-process=image/format,webp",
    "https://ueeshop.ly200-cdn.com/u_file/UPAM/UPAM822/2006/products/17/4d2e5fc162.jpg.500x500.jpg?x-oss-process=image/format,webp",
    "https://ueeshop.ly200-cdn.com/u_file/UPAM/UPAM822/2006/products/17/b0c7ef7290.jpg.500x500.jpg?x-oss-process=image/format,webp",
    "https://ueeshop.ly200-cdn.com/u_file/UPAM/UPAM822/2006/products/17/06b4937eef.jpg.500x500.jpg?x-oss-process=image/format,webp",
    "https://ueeshop.ly200-cdn.com/u_file/UPAM/UPAM822/2006/products/17/f178b98f75.png.500x500.png?x-oss-process=image/format,webp",

    // Add more image URLs as needed
  ];
  const imageDescriptions = [
    "Mono 166mm 9BB Half-cut Solar Panels - 120 Cells",
    "Mono 166mm 9BB Half-cut Solar Panels - 144 Cells",
    "Mono 158.75mm 5BB Half-cut Solar Panels - 120 Cells",
    "Mono 158.75mm 5BB Half-cut Solar Panels - 144 Cells",
    "Mono 158.75mm 5BB Full-cell Solar Panels - 60 Cells",
    "Mono 158.75mm 5BB Full-cell Solar Panels - 72 Cells",
    "Mono 156.75mm 5BB Full-cell Solar Panels - 60 Cells",
    "Mono 156.75mm 5BB Full-cell Solar Panels - 72 Cells",
    "Poly 156.75mm 5BB Full-cell Solar Panels - 60 Cells",
    "Poly 156.75mm 5BB Full-cell Solar Panels - 72 Cells",
    // Add more descriptions as needed
  ];

  return (
    <div>
      <ExtendedNav />
      <div className="grid grid-cols-4 justify-items-center py-24 space-y-5">
        {imageUrls.map((url, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-3/4 space-y-2"
          >
            <img
              src={url}
              alt={`Image ${index}`}
              className="mb-2 hover:opacity-85"
            />
            <a className="text-sm text-center" href="">
              {imageDescriptions[index]}
            </a>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

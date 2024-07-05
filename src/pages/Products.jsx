import { Navbar, Footer } from "../components/index";

export default function Products() {
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
    <>
      <Navbar />
      <div
        className="bg-[#7dae07] w-full h-[35rem] relative"
        style={{
          backgroundImage: `url(${"https://images.unsplash.com/photo-1615232714706-6b3adc67138b?q=80&w=1787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="flex justify-center items-center max-w-[1300px]"></div>
      </div>
      <div className="flex items-center mx-8 font-semibold space-x-2 italic mt-8">
        <h1 className="underline">Home</h1>
        <h1>&gt;</h1>
        <h1 className="underline">Products</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
        {imageUrls.map((url, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center max-w-xs mx-auto bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:opacity-90 transition duration-300 mt-8"
          >
            <img
              src={url}
              alt={`Image ${index}`}
              className="w-full h-64 object-contain"
            />
            <div className="p-4 text-center">
              <a className="text-sm font-semibold" href="">
                {imageDescriptions[index]}
              </a>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

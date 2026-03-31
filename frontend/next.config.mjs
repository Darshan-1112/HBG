// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   /* config options here */
//   reactCompiler: true,
  
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "stage.hbgsolo.com",
      },
    ],
  },
};

export default nextConfig;
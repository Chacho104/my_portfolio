import Image from "next/image";
import { Metadata } from "next";

import { MdOutlineDesignServices } from "react-icons/md";
import { FaCodeBranch } from "react-icons/fa";
import { MdDevices } from "react-icons/md";
import { HiOutlineChat } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

import Container from "@/components/ui/container";
import Card from "@/components/ui/card";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Churchil Owino | Designer & Full-stack Software Developer",
  description:
    "Hello, welcome to my portfolio webiste. Get to know my skills and review some of the projects I have designed and built. Start a conversation and, together, we could build something amazing.",
};

const socialLinks = [
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/churchilowino/",
  },
  { name: "GitHub", icon: FaGithub, href: "https://github.com/Chacho104" },
  { name: "Email", icon: HiOutlineMail, href: "mailto:chachowino75@gmail.com" },
];

export default function Home() {
  return (
    <main>
      <div>
        <Container>
          <nav className="flex justify-between items-center py-4">
            <div className="text-3xl font-bold text-brand-200">chacho.</div>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-x-2 w-auto bg-transparent border-2 border-brand-200 rounded-full px-4 py-2 text-brand-200 hover:bg-brand-200 hover:text-white disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none transition"
            >
              Say Hello
            </Link>
          </nav>
          <div className="flex flex-col items-center justify-center gap-y-8 py-20 text-center">
            <h1 className="text-5xl font-bold leading-snug">
              Designer & Full-stack Software Developer
            </h1>
            <p className="text-lg">
              I design and code dynamic, interactive, accessible, and responsive
              applications for the web.
            </p>
            <Image
              src="/images/profile-pic.jpeg"
              alt="My Profile Image"
              width={200}
              height={200}
              className="rounded-full bg-transparent"
            />
          </div>
        </Container>
      </div>
      <div className="bg-brand-100 h-[450px]">
        <Container>
          <div className="flex flex-col items-center justify-center gap-y-8 py-20 text-center">
            <h2 className="text-4xl font-semibold text-white leading-snug">
              Hello there, great to connect with you!
            </h2>
            <p className="w-full lg:w-[60%] text-center text-neutral-200 text-lg tracking-wider">
              My name is Churchil Owino, and I am passionate about using modern
              technologies and best practices to turn ideas into software
              solutions that thrive on the web.
            </p>
          </div>
        </Container>
      </div>
      <div>
        <Container>
          <div className="h-auto bg-white -mt-[20%] sm:-mt-[20%] lg:-mt-[15%] xl:-mt-[10%] rounded-xl flex justify-between p-8 shadow-md flex-wrap sm:flex-nowrap gap-y-10 sm:gap-y-0">
            <div className="flex flex-col items-center text-center gap-y-4 px-4">
              <div className="w-16 h-16 rounded-full bg-brand-200 flex items-center justify-center text-center text-white">
                <MdOutlineDesignServices size={28} />
              </div>
              <h3 className="text-xl font-semibold">
                Fully Responisve Designs
              </h3>
              <p>
                I offer responsive design services that ensure your web
                applications are optimized for viewing on any device, providing
                a seamless user experience across desktops, laptops, tablets,
                and smartphones.
              </p>
              <div>
                <h4 className="text-lg text-brand-200 font-medium">
                  Preferred Tools:
                </h4>
                <p className="font-medium">Figma & Canvas</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-y-4 border-x-0 sm:border-x border-x-neutral-300 px-4">
              <div className="flex flex-col items-center text-center gap-y-4">
                <div className="w-16 h-16 rounded-full bg-brand-200 flex items-center justify-center text-center text-white">
                  <MdDevices size={28} />
                </div>
              </div>
              <h3 className="text-xl font-semibold">Front-end Development</h3>
              <p>
                I pay meticulous attention to detail, ensuring that every
                element of the design is perfectly implemented and functions
                smoothly across all devices and browsers.
              </p>
              <div>
                <h4 className="text-lg text-brand-200 font-medium">
                  Preferred Tools:
                </h4>
                <p className="font-medium">
                  HTML5, CSS3, Sass, Tailwind CSS, Bootstrap, Chakra UI, Shadcn
                  UI, JavaScript, React.js, Next.js, Git & GitHub, Netlify,
                  Vercel, & VS Code.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-y-4 px-4">
              <div className="flex flex-col items-center text-center gap-y-4">
                <div className="w-16 h-16 rounded-full bg-brand-200 flex items-center justify-center text-center text-white">
                  <FaCodeBranch size={28} />
                </div>
              </div>
              <h3 className="text-xl font-semibold">Back-end Development</h3>
              <p>
                I ensure that your application's logic, database interactions,
                and server configurations are secure, efficient, reliable and
                easily scalable.
              </p>
              <div>
                <h4 className="text-lg text-brand-200 font-medium">
                  Preferred Tools:
                </h4>
                <p className="font-medium">
                  Node.js, Next.js, Mongo DB, Firebase, AWS RDS, AWS S3, Prisma,
                  Cloudinary, Git & GitHub, Netlify, Vercel, VPS, & VS Code.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div>
        <Container>
          <div className="my-10 text-center flex flex-col gap-y-4">
            <h1 className="text-4xl font-bold leading-snug">Recent Projects</h1>
            <p>
              Here are some of the projects I have designed and built over the
              past year.
            </p>
            <div className="flex items-center justify-between gap-x-3 lg:gap-x-10 pt-6 flex-wrap sm:flex-nowrap gap-y-10 sm:gap-y-0">
              <Card
                imageUrl="/images/saruk-banner-4.png"
                title="Saruk"
                description="Leading seller of laptops, desktops, tablets, phones, projectors, printers, and many more in Nairobi, Kenya."
                link="https://saruk.co.ke/"
              />
              <Card
                imageUrl="/images/adir-banner.jpeg"
                title="Adir Solutions"
                description="Web design and development agency driving growth in small businesses through the power of technology."
                link="https://adirsolutions.com/"
              />
              <Card
                imageUrl="/images/little-lemon-banner-2.jpeg"
                title="Little Lemon"
                description="Simple implementation of ordering and table booking process for Little Lemon, an imaginary restaurant."
                link="https://little-lemon-theta.vercel.app/"
              />
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-white text-center flex flex-col gap-y-4">
        <h1 className="text-4xl font-bold leading-snug">
          Need to get a project done?
        </h1>
        <p className="font-medium">
          Let&#39;s have a chat about the project and who knows? Maybe we can
          build the next big thing...together!
        </p>
        <div className="pt-4 flex items-center justify-center">
          <Link
            href="/contact"
            className="flex items-center justify-center gap-x-2 w-auto bg-transparent border-2 border-brand-200 rounded-full px-6 py-2 text-brand-200 hover:bg-brand-200 hover:text-white disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none transition"
          >
            <HiOutlineChat size={24} />
            Start a conversation
          </Link>
        </div>
      </div>
      <div className="bg-black h-24 mt-10 flex items-center justify-center gap-x-10">
        {socialLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="hover:text-brand-200 text-white"
          >
            <link.icon size={38} />
          </Link>
        ))}
      </div>
    </main>
  );
}

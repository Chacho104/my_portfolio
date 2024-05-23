import Image from "next/image";

import ContactMeForm from "@/components/ui/contactForm";
import Container from "@/components/ui/container";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Churchil Owino | Designer & Full-stack Software Developer",
  description:
    "Hello, welcome to my portfolio webiste. Get to know my skills and review some of the projects I have designed and built. Start a conversation and, together, we could build something amazing.",
};

const ContactMePage = () => {
  return (
    <div>
      <Container>
        <nav className="flex justify-between items-center py-4">
          <div className="text-3xl font-bold text-brand-200">chacho.</div>
          <Link
            href="/"
            className="flex items-center justify-center gap-x-2 w-auto bg-transparent border-2 border-brand-200 rounded-full px-4 py-2 text-brand-200 hover:bg-brand-200 hover:text-white disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none transition"
          >
            Go Back
          </Link>
        </nav>
        <Image
          src="/images/profile-pic.jpeg"
          alt="My Profile Image"
          width={100}
          height={100}
          className="rounded-full bg-transparent mx-auto"
        />
        <hr className="-my-12 text-neutral-200 pt-28" />
        <ContactMeForm />
      </Container>
    </div>
  );
};

export default ContactMePage;

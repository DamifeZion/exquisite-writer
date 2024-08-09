import { HiOutlineUsers } from "react-icons/hi";
import { MdPlaylistPlay } from "react-icons/md";
import { MdScreenshotMonitor } from "react-icons/md";
import { WhatWeDOCardProps } from "@/components/home/what-we-do-card";
import { Edit } from "lucide-react";
import { TeamCardProps } from "@/components/home/team-card";
import { TestimonialCardProps } from "@/components/home/testimonial-card";
import { FAQProps } from "@/sections/home/Faq";

export const WHAT_WE_DO: Array<WhatWeDOCardProps> = [
   {
      icon: Edit,
      title: "Ghostwriting & Editing",
      description:
         "Professional ghostwriting for books and projects, alongside meticulous editing to polish your work.",
      iconContainerStyle: "bg-[#8FD200]",
   },
   {
      icon: MdScreenshotMonitor,
      title: "Interactive Workshops & Webinars",
      description:
         "Live sessions with industry experts to enhance your writing skills.",
      iconContainerStyle: "bg-[#FF8080]",
   },
   {
      icon: MdPlaylistPlay,
      title: "Custom Content Creation",
      description:
         "Tailored content for businesses and individuals, including blog posts, articles, and marketing materials.",
      iconContainerStyle: "bg-[#B785FA]",
   },
   {
      icon: HiOutlineUsers,
      title: "Community & Networking",
      description:
         "Connect with other writers through forums, events, and collaborative projects.",
      iconContainerStyle: "bg-[#F9B286]",
   },
];

export const THE_TEAM: Array<TeamCardProps> = [
   {
      src: "/team-1.svg",
      name: "Adegboye Opeyemi",
      position: "Product Designer",
      email: "exquisite@gmail.com",
      twitterLink: "https://twitter.com/i/flow/signup?lang=en",
      linkedInLink: "https://www.linkedin.com/login",
   },
   {
      src: "/team-1.svg",
      name: "Adegboye Opeyemi",
      position: "Product Designer",
      email: "exquisite@gmail.com",
      twitterLink: "https://twitter.com/i/flow/signup?lang=en",
      linkedInLink: "https://www.linkedin.com/login",
   },
   {
      src: "/team-1.svg",
      name: "Adegboye Opeyemi",
      position: "Product Designer",
      email: "exquisite@gmail.com",
      twitterLink: "https://twitter.com/i/flow/signup?lang=en",
      linkedInLink: "https://www.linkedin.com/login",
   },
   {
      src: "/team-1.svg",
      name: "Adegboye Opeyemi",
      position: "Product Designer",
      email: "exquisite@gmail.com",
      twitterLink: "https://twitter.com/i/flow/signup?lang=en",
      linkedInLink: "https://www.linkedin.com/login",
   },
];

export const TESTIMONIALS: Array<TestimonialCardProps> = [
   {
      src: "",
      name: "Bash",
      rating: "2",
      description:
         "He is a fantastic writer, understood my requirements and delivered beyond my expectation",
      date: "Mar 29, 2022",
   },
   {
      src: "",
      name: "Bash",
      rating: "5",
      description:
         "He is a fantastic writer, understood my requirements and delivered beyond my expectation",
      date: "Mar 29, 2022",
   },
   {
      src: "",
      name: "Bash",
      rating: "5",
      description:
         "He is a fantastic writer, understood my requirements and delivered beyond my expectation",
      date: "Mar 29, 2022",
   },
   {
      src: "",
      name: "Bash",
      rating: "3",
      description:
         "He is a fantastic writer, understood my requirements and delivered beyond my expectation",
      date: "Mar 29, 2022",
   },
   {
      src: "",
      name: "Bash",
      rating: "4",
      description:
         "He is a fantastic writer, understood my requirements and delivered beyond my expectation",
      date: "Mar 29, 2022",
   },
];

export const FAQ_DATA: Array<FAQProps> = [
   {
      title: "What services does Exquisite Writers offer?",
      description:
         "soiwoi epmeg 434jf wmcoimw 404j0v w0imwc03m v33vm03vm w03vmv30i",
   },
   {
      title: "How can I request revisions?",
      description:
         "soiwoi epmeg 434jf wmcoimw 404j0v w0imwc03m v33vm03vm w03vmv30i",
   },
   {
      title: "Is the content checked for plagiarism?",
      description:
         "soiwoi epmeg 434jf wmcoimw 404j0v w0imwc03m v33vm03vm w03vmv30i",
   },
   {
      title: "How do you ensure content security?",
      description:
         "soiwoi epmeg 434jf wmcoimw 404j0v w0imwc03m v33vm03vm w03vmv30i",
   },
   {
      title: "What if I need a service not listed?",
      description:
         "soiwoi epmeg 434jf wmcoimw 404j0v w0imwc03m v33vm03vm w03vmv30i",
   },
   {
      title: "Are there any community features?",
      description:
         "soiwoi epmeg 434jf wmcoimw 404j0v w0imwc03m v33vm03vm w03vmv30i",
   },
   {
      title: "How do I get started?",
      description:
         "soiwoi epmeg 434jf wmcoimw 404j0v w0imwc03m v33vm03vm w03vmv30i",
   },
];

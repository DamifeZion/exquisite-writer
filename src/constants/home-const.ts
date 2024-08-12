import { HiOutlineUsers } from "react-icons/hi";
import { MdPlaylistPlay } from "react-icons/md";
import { MdScreenshotMonitor } from "react-icons/md";
import { WhatWeDOCardProps } from "@/components/home/what-we-do-card";
import { Edit } from "lucide-react";
import { TeamCardProps } from "@/components/home/team-card";
import { TestimonialCardProps } from "@/components/home/testimonial-card";
import { FAQProps } from "@/sections/home/FAQ";
import { CommitmentCardProps } from "@/components/home/our-commitment-card";
import { PricingCardProps } from "@/components/home/pricing-card";

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

export const OUR_COMMITMENTS: Array<CommitmentCardProps> = [
   {
      title: "Ensuring Originality",
      description:
         " Advanced plagiarism detection guarantees 100% original content, complemented by thorough checks for grammar, spelling, and readability.",
   },
   {
      title: "Easily Request Revisions",
      description:
         "Requesting revisions is a breeze with a click. Two free revisions are offered within a specified window after delivery.",
   },
   {
      title: "Support for All Team Sizes",
      description:
         "From solo marketers to large teams or organizations, we provide seamless support to meet your needs.",
   },
   {
      title: "Content Safety and Confidentiality",
      description:
         " We prioritize your content's security with stringent measures. For added peace of mind, your ideas and content remain exclusively yours.",
   },
];

export const CONTENT_TYPES: Array<string> = [
   "blog",
   "articles",
   "website content",
   "product descriptions",
   "white papers",
   "ebooks",
   "case studies",
   "press releases",
];

export const WORD_COUNT: Array<string> = [
   "500 - 1000",
   "1001 - 2000",
   "2001 - 3000",
   "3001 - 5000",
   "5001 - 7000",
];

export const PLANS: Array<PricingCardProps> = [
   {
      planName: "Starter",
      amount: 38,
      features: [
         "Content proofreading",
         "Writers with 0-2 years experience",
         "Ideal for SEO Content",
         "Preferred for Blogs and Product Descriptions",
         "Two rounds of revisions",
         "Limited research",
         "Turnaround time of 5 business days",
      ],
   },

   {
      planName: "Professional",
      amount: 48,
      features: [
         "Content proofreading",
         "Writers with 0-2 years experience",
         "Ideal for SEO Content",
         "Preferred for Blogs and Product Descriptions",
         "Two rounds of revisions",
         "Limited research",
         "Turnaround time of 5 business days",
      ],
   },

   {
      planName: "Elite",
      amount: 58,
      features: [
         "Content proofreading",
         "Writers with 0-2 years experience",
         "Ideal for SEO Content",
         "Preferred for Blogs and Product Descriptions",
         "Two rounds of revisions",
         "Limited research",
         "Turnaround time of 5 business days",
      ],
   },
];

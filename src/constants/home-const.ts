import { HiOutlineUsers } from "react-icons/hi";
import { MdPlaylistPlay } from "react-icons/md";
import { MdScreenshotMonitor } from "react-icons/md";
import { WhatWeDOCardProps } from "@/components/home/what-we-do-card";
import { Edit } from "lucide-react";
import { TeamCardProps } from "@/components/home/team-card";
import { TestimonialCardProps } from "@/components/home/testimonial-card";
import { FrequentlyAskedQuestionsProps } from "@/sections/home/frequent-questions";
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
      name: "Ola Isaac ",
      position: "Lead Wordsmith",
      description:
         "I love to exquisitely craft content to enhance the quality of what readers consume. I have a keen eye for detail, and nothing escapes my notice.",
   },
   {
      src: "/team-2.svg",
      name: "Ola Opeyemi",
      position: "Chief Workflow Officer",
      description:
         "I am a creative visionary with exceptional organizational skills. My passion extends beyond achieving the final outcome; I am equally invested in the process and workflow that leads to success.",
   },
   {
      src: "/team-3.svg",
      name: "Isaac Opeyemi",
      position: "Lead Wordsmith Editor",
      description:
         "I am a passionate writer whose craft goes beyond stringing words together. With accurate words and a conversational style, I create connections, touch emotions, and inspire readers!",
   },
   {
      src: "/team-4.svg",
      name: "Adegboye Opeyemi",
      position: "Wordsmith",
      description:
         "I enjoy weaving words together and finding inspiration in the little things.",
   },
   {
      src: "/team-5.svg",
      name: "Oyewole Adedamola",
      position: "Wordsmith",
      description: "I craft compelling narratives that captivate readers.",
   },
   {
      src: "/team-6.svg",
      name: "simisola babatunde",
      position: "Wordsmith",
      description:
         "A wordsmith with a keen eye for detail and a knack for crafting compelling narratives, Simisola creates content that informs, inspires, and engages audience. ",
   },
   {
      src: "/team-7.svg",
      name: "Asenge Adeleye",
      position: "Wordsmith",
      description:
         "I am an outstanding writer who explores the depth of creativity with words.",
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

export const FAQ_DATA: Array<FrequentlyAskedQuestionsProps> = [
   {
      title: "What services does Exquisite Writers offer?",
      description:
         "Exquisite Writing Service offers a wide range of writing services, including: Blogs, Articles, Website Content, Product Descriptions, Ebooks, Press Releases, Technical Writing, White Papers, Case Studies, Social Media Content, Business Plans, Newsletters, Ghostwriting, Copywriting, Editing and Proofreading",
   },
   {
      title: "How can I request revisions?",
      description: `<p>Requesting revisions is simple. Once you receive your completed content, you can review it and request any necessary changes. Our revision policy includes:</p>
      <ul style="margin-left: 1.5rem; list-style-type: disc;">
         <li>Starter Tier: Up to 2 rounds of revisions</li>
         <li>Professional Tier: Up to 3 rounds of revisions</li>
         <li>Elite Tier: Unlimited revisions within 14 days of delivery</li>
      </ul>`,
   },
   {
      title: "Is the content checked for plagiarism?",
      description:
         "Yes, all content produced by Exquisite Writing Service is thoroughly checked for plagiarism. We use advanced plagiarism detection software to ensure the originality and uniqueness of every piece of content delivered to our clients.",
   },
   {
      title: "How do you ensure content security?",
      description:
         "We take content security very seriously. Our measures include: Secure file transfer protocols, Strict confidentiality agreements with our writers and staff, Regular data backups, Secure storage of all client data and content We ensure that your content and personal information are protected at all times.",
   },
   {
      title: "What if I need a service not listed?",
      description:
         "If you require a service that is not listed on our website, please contact us directly. We are always open to discussing custom writing projects and can often accommodate special requests. Our team will work with you to understand your specific needs and provide a tailored solution.",
   },
   {
      title: "Are there any community features?",
      description:
         "Yes, Exquisite Writing Service offers several community features, including: Regular webinars and workshops on various writing and content-creation topics, A blog with tips, advice, and industry news, A newsletter with updates, exclusive offers, and insights. These features are designed to help you get the most out of our services and connect with like-minded individuals",
   },
   {
      title: "How do I get started?",
      description: `<p>Getting started with Exquisite Writing Service is easy. Follow these steps:</p>
      <ul style="margin-left: 1.5rem; list-style-type: decimal;">
         <li>Visit our Website: Browse our services and choose the one that best suits your needs.</li>
         <li>Place an Order: Fill out our order form with the details of your project.</li>
         <li>Make a Payment: Securely process your payment through our platform.</li>
         <li>Collaborate: Work with our team to refine your requirements and complete your project.</li>
         <li>Receive Your Content: Review, request revisions if needed, and approve the final content.</li>
      </ul>`,
   },
];

export const OUR_COMMITMENTS: Array<CommitmentCardProps> = [
   {
      title: "Discover",
      description:
         "This initial phase focuses on understanding your unique content needs. We engage in detailed discussions to uncover the specific requirements, goals, and audience for your project.",
   },
   {
      title: "Define",
      description:
         "After gathering insights, we clearly outline the project’s scope, breaking down all necessary components. ",
   },
   {
      title: "Design",
      description:
         "In this stage, an action plan is created. It includes a timeline and the steps we'll take to execute the project, ensuring transparency and preparedness.",
   },
   {
      title: "Develop",
      description:
         "Here, our skilled writers start crafting the content, following your specifications and the strategic plan laid out during the design phase.",
   },
   {
      title: "Define",
      description:
         "The content goes through a rigorous editing process where we ensure adherence to your guidelines, followed by proofreading for quality assurance.",
   },
   {
      title: "Deliver",
      description:
         "Finally, the completed project is delivered on time, polished, and ready for your use. We ensure every detail is perfect, providing you with content that meets your high standards.",
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

// NOTE: The amount below is the base amount, but is subject to change based on max words selected in "Use - Home"
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
      amount: 88,
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
      amount: 158,
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

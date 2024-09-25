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
      title: "Blog & Article Writing",
      description:
         "Craft engaging blogs and articles designed to captivate and inform your audience.",
      iconContainerStyle: "bg-[#8FD200]",
   },
   {
      icon: MdScreenshotMonitor,
      title: "Editing and Proofreading services",
      description: "We ensure your content is error-free and polished.",
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
      title: "E book Creation",
      description:
         "Produce detailed eBooks tailored to your needs, from concept to completion.",
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
      name: "Trust Ibitomisi",
      position: "Lead Wordsmith Editor",
      description:
         "I am a passionate writer whose craft goes beyond stringing words together. With accurate words and a conversational style, I create connections, touch emotions, and inspire readers!",
   },
   {
      src: "/team-4.svg",
      name: "Khadija Ali",
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
      name: "Amua Chiara",
      position: "Wordsmith",
      description:
         "I'm Chiara, I think of myself as someone who loves exploration, enjoy creativity and an enthusiastic writer.",
   },
   {
      src: "/team-8.svg",
      name: "Adeleye Asenge",
      position: "Wordsmith",
      description:
         "I am an outstanding writer who explores the depth of creativity with words.",
   },
];

export const PAYMENT_FORM_PARAMS: string = "pf"

export const TESTIMONIALS: Array<TestimonialCardProps> = [
   {
      ratingNo: "5.0",
      rating: "5",
      date: "July 31, 2024",
      time: "4:03 PM",
      packagPlan: "Top - 10000 words",
      type: "Crafts, Hobbies, & Home",
      description: "Did a great writing job. Very happy with his work.",
   },
   {
      ratingNo: "5.0",
      rating: "5",
      date: "August 11, 2024",
      time: "7:20 AM",
      packagPlan: "Premium - 10000 words",
      type: "Self-Help",
      description:
         "I had EW work on a couple of projects for me and he has always done a wonderful job!",
   },
   {
      ratingNo: "5.0",
      rating: "5",
      date: "August 24, 2024",
      time: "8:35 AM",
      packagPlan: "Finance - 30000 words",
      type: "Business & Money",
      description:
         "Exquisite Writer met the deadline and delivered an outstanding manuscript. I will definitely have him write of my books. Thank tou so much.",
   },
   {
      ratingNo: "5.0",
      rating: "5",
      date: "July 24, 2024",
      time: "4:24 AM",
      packagPlan: "Premium - 20000 words",
      type: "Health & Fitness",
      description:
         "Exquisite Writer was great to work with, very prompt in his response to my feedback and questions. I appreciate his guidance through the process, especially with this being my first book to complete! I also appreciate the close attention to detail and quicknessto confirm objectives. Thanks Exquisite!",
   },
   {
      ratingNo: "5.0",
      rating: "5",
      date: "July 01, 2024",
      time: "2:26 AM",
      packagPlan: "Urban - 35000 words",
      type: "Sports & Outdoors",
      description:
         "Exquisite Writer was so easy to work with and the end product was exactly what I was looking for! It was so amazing to see the thoughts and words I shared formed and perfected into exactly what I was hoping for in my book!",
   },
   {
      ratingNo: "4.8",
      rating: 4.8,
      date: "July 12, 2024",
      time: "7:04 AM",
      packagPlan: "Urban - 30000 words",
      type: "Self-Help",
      description:
         "Exquisite Writer did an excellent job, diligently following the given recommendations. He respected the deadlines. A real professional.",
   },
   {
      ratingNo: "5.0",
      rating: "5",
      date: "July 05, 2024",
      time: "2:26 AM",
      packagPlan: "Urban - 30000 words",
      type: "Self-Help",
      description:
         "The Exquisite Writer was very professional, a fantastic communicator, and a pleasure to work with. He followed the book outline he was given and stuck to it. He was extremely efficient and time-concious.",
   },
   {
      ratingNo: "5.0",
      rating: "5",
      date: "July 30, 2024",
      time: "1:45 AM",
      packagPlan: "Premium - 25000 words",
      type: "Self-Help",
      description:
         "I have nothing but praise for Exquisite Writer! If he would allow it, I would love to have him write dor me again!",
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
      title: "Deploy",
      description:
         "The content goes through a rigorous editing process where we ensure adherence to your guidelines, followed by proofreading for quality assurance.",
   },
   {
      title: "Deliver",
      description:
         "Finally, the completed project is delivered on time, polished, and ready for your use. We ensure every detail is perfect, providing you with content that meets your high standards.",
   },
];

export type ContentType =
   | "blog"
   | "articles"
   | "website content"
   | "product description"
   | "ebooks"
   | "academic writing"
   | "business plan"
   | "editing and proofreading";

export const CONTENT_TYPES: Array<ContentType> = [
   "blog",
   "articles",
   "website content",
   "product description",
   "ebooks",
   "academic writing",
   "business plan",
   "editing and proofreading",
];

export const WORD_COUNT: Array<string> = [
   "500 - 1000",
   "1001 - 2000",
   "2001 - 3000",
   "3001 - 5000",
   "5001 - 7000",
   "7001 - 10000",
   "10001 - 15000",
   "15001 - 20000",
   "20001 - 30000",
   "30001 - 50000",
];

export const DESCRIPTION_COUNT: Array<string> = [
   "1- 100",
   "101 -200",
   "201 - 300",
   "301 - 400",
   "401 - 500",
   "501 - 600",
   "601 - 700",
   "701 - 800",
   "801 - 900",
   "901 - 1000",
];

// NOTE: The amount below is the base amount, but is subject to change based on max words selected in "use-home" hook.
export const PLANS: Array<PricingCardProps> = [
   {
      planName: "Starter",
      amount: 38,
      features: [
         "Content proofreading",
         "Writers with 0-2 years experience",
         "Ideal for SEO Content",
         "Preferred for Blogs and Product Descriptions",
         "One round of revision",
         "Limited research",
         "Turnaround time of 5 business days",
      ],
   },

   {
      planName: "Professional",
      amount: 88,
      features: [
         "In-depth content editing",
         "Writers with 2-5 years of experience",
         "SEO optimization included",
         "Suitable for all types of content",
         "Three rounds of revisions",
         "Moderate research",
         "Turnaround time of 3-4 business days",
      ],
   },

   {
      planName: "Elite",
      amount: 0,
      features: [
         "Comprehensive content review and editing",
         "Writers with 5+ years of experience",
         "Advanced SEO techniques",
         "Custom-tailored content for brand voice and audience",
         "Unlimited revisions",
         "Extensive research",
         "Turnaround time of 1-2 business days",
      ],
   },
];

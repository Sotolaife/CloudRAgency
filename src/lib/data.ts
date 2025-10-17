import { type Icon, LayoutDashboard, Megaphone, Target, Bot, LineChart, GanttChart, PenTool } from 'lucide-react';

export const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#portfolio' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '#contact' },
];

type Service = {
  icon: Icon;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: LayoutDashboard,
    title: 'High-Converting Websites',
    description: 'We design and develop lightning-fast, conversion-focused websites that captivate visitors and turn them into leads.',
  },
  {
    icon: Target,
    title: 'Visibility Systems',
    description: 'Our comprehensive SEO and content strategies ensure your brand appears at the top of search results, attracting qualified buyers.',
  },
  {
    icon: Megaphone,
    title: 'Paid Advertising',
    description: 'We create and manage targeted ad campaigns on Google and social media to generate immediate leads and brand awareness.',
  },
  {
    icon: Bot,
    title: 'AI-Powered Lead Nurturing',
    description: 'Automate your follow-up and nurture leads with intelligent systems that engage prospects 24/7, ensuring no opportunity is missed.',
  },
];

export const frameworkSteps = [
    {
      icon: PenTool,
      title: '1. Discovery & Strategy',
      description: 'We dive deep into your brand, audience, and goals to craft a bespoke marketing blueprint for success.'
    },
    {
      icon: LayoutDashboard,
      title: '2. Design & Development',
      description: 'Our team designs and builds a visually stunning, high-performance website tailored to your brand identity.'
    },
    {
      icon: LineChart,
      title: '3. SEO & Content Launch',
      description: 'We implement foundational SEO and launch a content strategy to start building your organic search dominance.'
    },
    {
      icon: GanttChart,
      title: '4. Optimize & Scale',
      description: 'Through continuous monitoring and data analysis, we refine your strategy to maximize ROI and scale your growth.'
    }
  ];

type PortfolioItem = {
  id: string;
  title: string;
  category: string;
  image: string;
  hint: string;
};

export const portfolio: PortfolioItem[] = [
  {
    id: 'portfolio-1',
    title: 'Luxe Properties Miami',
    category: 'Website Design',
    image: 'https://picsum.photos/seed/p1/600/400',
    hint: 'website laptop'
  },
  {
    id: 'portfolio-2',
    title: 'The Aspen Group',
    category: 'Visibility System',
    image: 'https://picsum.photos/seed/p2/600/400',
    hint: 'property listing'
  },
  {
    id: 'portfolio-3',
    title: 'Coastal Realty',
    category: 'Mobile Experience',
    image: 'https://picsum.photos/seed/p3/600/400',
    hint: 'mobile website'
  },
  {
    id: 'portfolio-4',
    title: 'Urban Nest',
    category: 'Lead-Gen Dashboard',
    image: 'https://picsum.photos/seed/p4/600/400',
    hint: 'analytics dashboard'
  },
];

type Testimonial = {
  quote: string;
  name: string;
  title: string;
  avatar: string;
  hint: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      'Cloud 9 completely transformed our online presence. Our lead quality has skyrocketed, and our website is finally a tool that works for us, not against us.',
    name: 'Sarah Johnson',
    title: 'Broker, Luxe Properties Miami',
    avatar: 'https://picsum.photos/seed/t1/100/100',
    hint: 'professional portrait'
  },
  {
    quote:
      'The visibility system they built for us is a game-changer. We are now ranking for keywords we never thought possible, bringing in consistent, high-quality organic traffic.',
    name: 'Michael Chen',
    title: 'Founder, The Aspen Group',
    avatar: 'https://picsum.photos/seed/t2/100/100',
    hint: 'person smiling'
  },
  {
    quote:
      'I was skeptical about another agency, but Cloud 9 delivered beyond my wildest expectations. Their process is seamless and the results speak for themselves. Highly recommend!',
    name: 'David Lee',
    title: 'Top Agent, Coastal Realty',
    avatar: 'https://picsum.photos/seed/t3/100/100',
    hint: 'man portrait'
  },
];

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  image: string;
  hint: string;
  content: string;
}

export const blogPosts: Post[] = [
  {
    slug: 'real-estate-seo-guide',
    title: 'The Ultimate SEO Guide for Realtors in 2024',
    description: 'Dominate local search and attract more seller leads with these proven SEO strategies.',
    date: 'July 15, 2024',
    image: 'https://picsum.photos/seed/b1/600/400',
    hint: 'digital marketing',
    content: '<p>In the competitive world of real estate, visibility is everything. This guide will walk you through the essential SEO strategies to get your website in front of motivated buyers and sellers in your local market. We\'ll cover everything from keyword research to local SEO and content creation.</p>'
  },
  {
    slug: 'high-converting-websites',
    title: '7 Elements Every High-Converting Real Estate Website Needs',
    description: 'Turn your website into a 24/7 lead generation machine. Learn the key components that drive action.',
    date: 'July 5, 2024',
    image: 'https://picsum.photos/seed/b3/600/400',
    hint: 'conversion funnel',
    content: '<p>Your website is more than just a digital business card. It should be your most effective sales tool. In this post, we break down the seven essential elements that separate a standard website from a high-converting lead magnet. From compelling calls-to-action to intuitive navigation, we cover it all.</p>'
  },
  {
    slug: 'social-media-for-realtors',
    title: 'Beyond Listings: Building a Powerful Brand on Social Media',
    description: 'Leverage social media to build trust, showcase your expertise, and create a community of loyal clients.',
    date: 'June 28, 2024',
    image: 'https://picsum.photos/seed/b2/600/400',
    hint: 'social media',
    content: '<p>Posting listings is just the start. To truly succeed on social media as a realtor, you need to build a brand. This article explores strategies for creating valuable content, engaging with your audience, and using platforms like Instagram and Facebook to become the go-to real estate expert in your area.</p>'
  },
];

export const caseStudies: Post[] = [
    {
        slug: 'luxe-properties-miami-growth',
        title: 'Case Study: How Luxe Properties Miami Doubled Their Leads in 6 Months',
        description: 'A deep dive into the strategy that transformed their online presence and lead generation.',
        date: 'August 1, 2024',
        image: 'https://picsum.photos/seed/cs1/1200/600',
        hint: 'growth chart',
        content: '<p>Luxe Properties Miami faced a common challenge: a beautiful portfolio but a website that failed to capture high-quality leads. Our team implemented a full-funnel strategy, including a new conversion-optimized website, a targeted local SEO campaign, and a lead nurturing system. The results were a 200% increase in qualified leads and a 50% reduction in cost-per-acquisition within six months.</p>'
    },
    {
        slug: 'aspen-group-seo-dominance',
        title: 'Case Study: Achieving #1 Rankings for The Aspen Group',
        description: 'From page three to the top spot: The SEO visibility system that conquered a competitive market.',
        date: 'July 20, 2024',
        image: 'https://picsum.photos/seed/cs2/1200/600',
        hint: 'luxury home',
        content: '<p>The Aspen Group, a luxury real estate firm, was struggling to gain traction in a saturated market. Our visibility system focused on hyper-local content, technical SEO, and building authority. Within a year, The Aspen Group secured top-3 rankings for their most valuable keywords, leading to a 300% increase in organic website traffic and a record-breaking year for sales.</p>'
    }
]

export const footerLinks = {
    company: [
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Blog', href: '/blog' },
    ],
    connect: [
        { name: 'Contact Us', href: '#contact' },
        { name: 'LinkedIn', href: '#' },
        { name: 'Twitter', href: '#' },
    ]
}

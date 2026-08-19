export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  benefits: string[];
  duration: string;
  price: string;
  imageUrl: string;
  iconName: string;
}

export interface DentistItem {
  id: string;
  name: string;
  qualification: string;
  experience: string;
  specialization: string;
  photoUrl: string;
  social: {
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
  bio: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  beforeUrl: string;
  afterUrl: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  rating: number;
  text: string;
  photoUrl: string;
}

export interface FacilityItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ContactDetails {
  address: string;
  phone: string;
  emergencyPhone: string;
  email: string;
  mapEmbedUrl: string;
  openingHours: { day: string; hours: string }[];
}

export const dentalServices: ServiceItem[] = [
  {
    id: "dental-cleaning",
    title: "Dental Cleaning",
    description: "Remove plaque, tartar, and surface stains to keep your teeth clean, gums healthy, and breath fresh.",
    longDescription: "Our professional dental cleaning involves a comprehensive scaling and polishing process that removes tartar (hardened plaque) that cannot be cleared by normal brushing. Utilizing state-of-the-art ultrasonic tools, we gently clean active build-up, evaluate gums for signs of periodontal disease, and apply a premium fluoride treatment to strengthen and protect your enamel.",
    benefits: [
      "Prevents gum disease and tooth decay",
      "Removes persistent coffee, tea, and tobacco stains",
      "Detects early warning signs of oral cancer or structural issues",
      "Freshens breath immediately with deep clean technology"
    ],
    duration: "45 - 60 minutes",
    price: "From $120",
    imageUrl: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800",
    iconName: "Sparkles"
  },
  {
    id: "teeth-whitening",
    title: "Teeth Whitening",
    description: "Achieve a dazzling, bright smile with our advanced in-office laser whitening treatments.",
    longDescription: "Our premium teeth whitening treatment uses medical-grade hydrogen peroxide gel activated by a safe laser light. This cosmetic procedure penetrates deep into the enamel to lift years of dark stains and discoloration caused by aging, coffee, or wine. In just a single session, you can walk out of our clinic with teeth up to 8 shades whiter.",
    benefits: [
      "Immediate results in under an hour",
      "Safe, clinically tested, and dentist-supervised procedure",
      "Custom shade matching for a natural-looking finish",
      "Includes a take-home touch-up kit for long-lasting brightness"
    ],
    duration: "60 minutes",
    price: "From $299",
    imageUrl: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
    iconName: "Sun"
  },
  {
    id: "dental-implants",
    title: "Dental Implants",
    description: "Permanent, natural-looking replacement for missing teeth to restore your beautiful smile and bite.",
    longDescription: "Dental implants are the gold standard for replacing missing teeth. A titanium post acts as a biological root, fusing directly with your jawbone over a few months. Once stable, we place a custom-crafted porcelain crown that matches your neighboring teeth perfectly, restoring full bite force and preventing bone loss.",
    benefits: [
      "Permanent solution that behaves exactly like a natural tooth",
      "Prevents bone loss in the jaw and preserves facial structure",
      "No slippage or clicking, unlike traditional dentures",
      "Restores 100% of natural chewing and speaking capability"
    ],
    duration: "Requires multiple visits",
    price: "From $1,500 / tooth",
    imageUrl: "https://images.unsplash.com/photo-1445527815219-ecbfec67492e?auto=format&fit=crop&q=80&w=800",
    iconName: "Shield"
  },
  {
    id: "braces-orthodontics",
    title: "Braces & Orthodontics",
    description: "Straighten misaligned teeth and correct bad bites with modern clear aligners or custom metal braces.",
    longDescription: "Whether you choose traditional low-profile metal braces or clear, removable Invisalign aligners, our orthodontic specialists design a customized roadmap for your teeth. Correcting crowding, gaps, overbites, and underbites not only elevates your confidence but dramatically improves long-term oral hygiene.",
    benefits: [
      "Corrects alignment and enhances overall facial aesthetics",
      "Improves jaw function, chewing, and speech patterns",
      "Reduces risks of uneven wear, tooth damage, and TMJ disorders",
      "Discreet options available including clear ceramic and Invisalign aligners"
    ],
    duration: "12 - 24 months plan",
    price: "From $3,200",
    imageUrl: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800",
    iconName: "Grid"
  },
  {
    id: "root-canal",
    title: "Root Canal Therapy",
    description: "Save damaged or infected teeth with painless root canal therapy performed under micro-optics.",
    longDescription: "A root canal is an essential procedure used to save a tooth whose pulp has become infected, inflamed, or dead. Under precise magnification, our specialists remove the infected tissue, sterilize the inner root canals, and seal the space with a biocompatible filling. We then strengthen the tooth with a beautiful custom crown.",
    benefits: [
      "Relieves persistent, severe toothaches and sensitivity",
      "Prevents the spread of infection to surrounding teeth and bone",
      "Eliminates the need for a tooth extraction",
      "High success rate with virtually pain-free modern techniques"
    ],
    duration: "1 - 2 sessions",
    price: "From $650",
    imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    iconName: "Activity"
  },
  {
    id: "smile-makeover",
    title: "Smile Makeover",
    description: "A comprehensive cosmetic transformation combining veneers, bonding, and contouring.",
    longDescription: "Our smile makeover is a fully personalized cosmetic package designed to build your dream smile. Combining digital smile design software, custom porcelain veneers, gum contouring, and whitening, we correct multiple chips, gaps, alignment issues, and discolorations to construct a radiant, balanced smile that fits your facial structure.",
    benefits: [
      "Dramatic boost in confidence and self-esteem",
      "Custom-designed to suit your skin tone, lip line, and symmetry",
      "Combines restorative and cosmetic treatments for optimal health",
      "Stain-resistant porcelain veneers offer permanent brilliance"
    ],
    duration: "2 - 3 visits",
    price: "Custom quotation",
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800",
    iconName: "Heart"
  },
  {
    id: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    description: "Specialized, friendly, and gentle dental care tailored specifically for infants, children, and teens.",
    longDescription: "Our pediatric care focuses on creating a positive, fear-free relationship with the dentist. We offer child-friendly checkups, cleanings, fluoride coatings, and dental sealants to protect young teeth from cavities. Our team is trained in child psychology to ensure a comfortable experience for children of all ages.",
    benefits: [
      "Creates positive oral habits and removes dental anxiety early on",
      "Specialized equipment and language designed for kids",
      "Sealants block food and plaque to prevent cavities by 80%",
      "Monitors jaw growth and teeth alignment as your child develops"
    ],
    duration: "30 - 45 minutes",
    price: "From $90",
    imageUrl: "https://images.unsplash.com/photo-1484981138541-3d074aa97716?auto=format&fit=crop&q=80&w=800",
    iconName: "Smile"
  },
  {
    id: "wisdom-tooth",
    title: "Wisdom Tooth Extraction",
    description: "Safe and surgical removal of impacted or painful wisdom teeth to protect dental alignment.",
    longDescription: "Wisdom teeth can become trapped beneath the gums (impacted) or grow at incorrect angles, causing severe pain, infections, cyst formation, and damage to surrounding teeth. Our oral surgeons perform safe extractions under local anesthesia or light sedation to ensure minimal discomfort and a fast recovery process.",
    benefits: [
      "Prevents crowding and shifting of straight teeth",
      "Stops gum infection, swelling, and chronic jaw pain",
      "Eliminates hard-to-clean areas prone to severe decay",
      "Modern surgical techniques for minimal postoperative recovery"
    ],
    duration: "45 - 90 minutes",
    price: "From $250 / tooth",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    iconName: "Scissors"
  }
];

export const dentistsList: DentistItem[] = [
  {
    id: "dr-sarah-johnson",
    name: "Dr. Sarah Johnson",
    qualification: "DDS, MSD (Northwestern University)",
    experience: "12+ Years Experience",
    specialization: "Lead Orthodontist & Clear Aligner Specialist",
    photoUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com"
    },
    bio: "Dr. Johnson is dedicated to transforming smiles using the latest advancements in clear aligner therapy and interceptive orthodontics. She has treated over 2,000 successful alignment cases."
  },
  {
    id: "dr-marcus-chen",
    name: "Dr. Marcus Chen",
    qualification: "DDS, PhD (Boston University)",
    experience: "15+ Years Experience",
    specialization: "Chief Oral Surgeon & Implantologist",
    photoUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800",
    social: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com"
    },
    bio: "Dr. Chen is a globally recognized expert in dental implant surgery and bone grafting. He publishes research in international oral surgery journals and focuses on painless implant techniques."
  },
  {
    id: "dr-emily-taylor",
    name: "Dr. Emily Taylor",
    qualification: "DDS (Columbia University)",
    experience: "8+ Years Experience",
    specialization: "Cosmetic Dentist & Pediatric Expert",
    photoUrl: "https://images.unsplash.com/photo-1591604021695-0c69b7c05981?auto=format&fit=crop&q=80&w=800",
    social: {
      twitter: "https://twitter.com",
      instagram: "https://instagram.com"
    },
    bio: "Dr. Taylor combines medical excellence with an artistic touch to create natural-looking smile restorations. Her friendly demeanor makes her highly popular with both adults and children."
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: "gallery-1",
    title: "Braces & Alignment",
    category: "Orthodontics",
    beforeUrl: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800",
    afterUrl: "/braces-after.jpg"
  },
  {
    id: "gallery-2",
    title: "Teeth Whitening Transformation",
    category: "Teeth Whitening",
    beforeUrl: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800",
    afterUrl: "/teeth-whitening-after.jpg"
  },
  {
    id: "gallery-3",
    title: "Full Implant & Crown Restorations",
    category: "Dental Implants",
    beforeUrl: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
    afterUrl: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800"
  }
];

export const testimonialsList: TestimonialItem[] = [
  {
    id: "rev-1",
    name: "James Henderson",
    role: "Tech Entrepreneur",
    rating: 5,
    text: "The clinic's equipment looks like something out of science fiction. Dr. Chen explained my dental implant procedure using a 3D scan and completed the surgery completely pain-free. Absolutely incredible service!",
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "rev-2",
    name: "Sophia Martinez",
    role: "Graphic Designer",
    rating: 5,
    text: "I was extremely self-conscious about my crooked front teeth. Dr. Johnson put me on Invisalign aligners, and within 14 months, my smile was completely straight. The interactive dental app let me track my progress weekly!",
    photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "rev-3",
    name: "Dr. Robert Vance",
    role: "University Professor",
    rating: 5,
    text: "Being a medical professional myself, I have very high standards for hygiene. Dental Clinic's multi-stage sterilization protocols and digital check-ins impressed me. The staff are warm, courteous, and efficient.",
    photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "rev-4",
    name: "Olivia Bennett",
    role: "Marketing Manager",
    rating: 5,
    text: "Dr. Taylor is the sweetest dentist I have ever met! She did a teeth whitening session for me that lifted years of coffee stains. The results were immediate, and she made me feel completely comfortable the whole time.",
    photoUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
  }
];

export const facilitiesList: FacilityItem[] = [
  {
    id: "fac-1",
    title: "Class-B Sterilization",
    description: "Hospital-grade autoclaves and multi-stage chemical cleansing cycles ensuring 100% contamination-free operations.",
    iconName: "Sparkles"
  },
  {
    id: "fac-2",
    title: "Ultra-Low Digital X-Ray",
    description: "90% less radiation exposure than traditional X-rays, providing immediate high-resolution digital imaging.",
    iconName: "Cpu"
  },
  {
    id: "fac-3",
    title: "3D Intraoral Scanner",
    description: "Replaces uncomfortable physical dental molds with a 3D digital camera to design aligners and crowns in minutes.",
    iconName: "Camera"
  },
  {
    id: "fac-4",
    title: "24/7 Emergency Care",
    description: "Dedicated standby staff and on-call surgeons ready to treat acute tooth pain, fractures, and oral trauma immediately.",
    iconName: "PhoneCall"
  },
  {
    id: "fac-5",
    title: "Valet & Secure Parking",
    description: "Worry-free visiting with our secure underground private parking lot and complimentary valet services.",
    iconName: "Car"
  },
  {
    id: "fac-6",
    title: "Wheelchair Accessibility",
    description: "Equipped with elevators, gentle ramps, and spacious operatories designed for patients of all mobility levels.",
    iconName: "Accessibility"
  }
];

export const faqsList: FAQItem[] = [
  {
    id: "faq-1",
    question: "Do you accept dental insurance, and how does billing work?",
    answer: "Yes, we accept major private dental insurance providers (PPO plans). Our clinic administrative team does direct insurance billing, meaning we process and file claims directly with your insurer. You only pay your co-pay or deductible amount on the day of treatment.",
    category: "Insurance & Payments"
  },
  {
    id: "faq-2",
    question: "How long does a dental implant procedure take from start to finish?",
    answer: "Typically, a dental implant procedure spans 3 to 6 months. The titanium post is placed first, requiring 3-4 months to safely fuse with your jawbone (osseointegration). Once healed, we attach the abutment and a custom porcelain crown. In cases with strong existing bone, immediate-load implants can be placed faster.",
    category: "Treatments"
  },
  {
    id: "faq-3",
    question: "What makes clear aligners (Invisalign) different from metal braces?",
    answer: "Invisalign aligners are virtually invisible, made of smooth medical-grade polyurethane, and can be removed when eating or brushing your teeth. Metal braces are fixed bracket systems that correct complex alignment issues slightly faster and do not rely on patient compliance to stay in place.",
    category: "Orthodontics"
  },
  {
    id: "faq-4",
    question: "How often should I get a professional dental cleaning?",
    answer: "We recommend a professional dental cleaning and comprehensive checkup once every 6 months. For patients with a history of gum disease or rapid plaque build-up, we might recommend visits every 3 to 4 months to prevent periodontal disease progression.",
    category: "General Health"
  },
  {
    id: "faq-5",
    question: "Is teeth whitening safe for sensitive teeth?",
    answer: "Yes. Our dental whitening treatments are formulated with active desensitizing agents, and we apply a protective gum barrier prior to starting. We also offer custom lower-strength gel options for patients prone to severe tooth sensitivity.",
    category: "Teeth Whitening"
  }
];

export const contactDetails: ContactDetails = {
  address: "742 Evergreen Terrace, Suite 101, Medical District, Springfield, IL 62704",
  phone: "+1 (555) 345-6789",
  emergencyPhone: "+1 (555) 911-DENT (Emergency)",
  email: "care@dental.com",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3065.2366838891544!2d-89.6582963!3d39.7891234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88753a3a41113b27%3A0xe54e3b7b209a3fc4!2sSpringfield%2C%20IL!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus",
  openingHours: [
    { day: "Monday - Friday", hours: "8:00 AM - 7:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Emergency Cases Only" }
  ]
};

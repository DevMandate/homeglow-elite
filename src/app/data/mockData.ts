export function getAvatar(name: string) {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=0B2545&color=fff&size=128`;
}

export const SERVICES = [
  {
    id: "sofa-cleaning",
    slug: "sofa-cleaning",
    name: "Sofa & Bed Cleaning",
    tagline: "Revive your upholstery to like-new condition",
    description: "Professional deep cleaning for sofas, couches, and beds. We remove dust mites, stains, odors, and allergens using our advanced steam cleaning technology.",
    shortDesc: "Deep clean your sofas and beds, removing dust mites, stains, and allergens.",
    icon: "Sofa",
    image: "https://res.cloudinary.com/dmvrgj0sy/image/upload/v1781166773/Max_zyi03x.jpg",
    price: "KSh 600 per seater",
    priceNum: 600,
    duration: "2–3 hours",
    benefits: ["Removes 99% of dust mites", "Eliminates pet hair & dander", "Deodorizes fabric", "Extends furniture life", "Safe for children & pets"],
    process: [
      { step: 1, title: "Inspection", desc: "We assess fabric type and staining before choosing the right technique." },
      { step: 2, title: "Pre-treatment", desc: "Stains are pre-treated with eco-friendly solutions." },
      { step: 3, title: "Steam Cleaning", desc: "High-temperature steam penetrates deep into fibers." },
      { step: 4, title: "Extraction", desc: "Powerful vacuuming extracts all loosened dirt and moisture." },
      { step: 5, title: "Deodorizing", desc: "Final deodorizing treatment leaves a fresh, clean scent." },
    ],
    category: "Upholstery",
    featured: true,
  },
  {
    id: "mattress-cleaning",
    slug: "mattress-cleaning",
    name: "Mattress Cleaning",
    tagline: "Sleep clean, sleep healthy",
    description: "Thorough mattress sanitization that removes dust mites, dead skin cells, sweat stains, and allergens for a healthier sleep environment.",
    shortDesc: "Sanitize your mattress for a healthier, allergen-free sleep experience.",
    icon: "BedDouble",
    image: "https://res.cloudinary.com/dmvrgj0sy/image/upload/v1781164739/dt3_hlmp9w.jpg",
    price: "From KSh 1,800",
    priceNum: 1800,
    duration: "1–2 hours",
    benefits: ["Kills dust mites & bacteria", "Removes sweat & urine stains", "UV sanitization available", "Improves sleep quality", "Reduces allergic reactions"],
    process: [
      { step: 1, title: "Assessment", desc: "Check for stains, odors, and infestation signs." },
      { step: 2, title: "Vacuuming", desc: "HEPA vacuum to remove surface dust and debris." },
      { step: 3, title: "Steam Treatment", desc: "Hot steam kills bacteria and dust mites instantly." },
      { step: 4, title: "Stain Removal", desc: "Targeted treatment for visible stains." },
      { step: 5, title: "Drying", desc: "Rapid drying to prevent mold growth." },
    ],
    category: "Upholstery",
    featured: true,
  },
  {
    id: "carpet-cleaning",
    slug: "carpet-cleaning",
    name: "Carpet Cleaning",
    tagline: "Restore vibrancy and freshness to your carpets",
    description: "Professional carpet cleaning using hot water extraction, removing embedded dirt, allergens, and tough stains while preserving carpet fibers.",
    shortDesc: "Hot water extraction deep cleaning that restores carpets to their original glory.",
    icon: "LayoutGrid",
    image: "https://res.cloudinary.com/dmvrgj0sy/image/upload/v1781167342/WhatsApp_Image_2026-06-11_at_11.36.05_1_marttg.jpg",
    price: "KSh 25 per sq. ft.",
    priceNum: 25,
    duration: "2–4 hours",
    benefits: ["Restores original color", "Removes embedded allergens", "Eliminates odors", "Dries within 4–6 hours", "Safe for all carpet types"],
    process: [
      { step: 1, title: "Pre-vacuuming", desc: "Thorough dry vacuuming to remove loose soil." },
      { step: 2, title: "Pre-conditioning", desc: "Apply pre-conditioner to break down embedded grime." },
      { step: 3, title: "Agitation", desc: "Machine agitation loosens deep-set dirt." },
      { step: 4, title: "Hot Water Extraction", desc: "High-pressure hot water rinse extracts all dirt." },
      { step: 5, title: "Drying", desc: "Air movers speed up drying for same-day use." },
    ],
    category: "Floors",
    featured: true,
  },
  {
    id: "general-house-cleaning",
    slug: "general-house-cleaning",
    name: "General House Cleaning",
    tagline: "A spotless home, every time",
    description: "Comprehensive house cleaning covering all rooms — kitchens, bathrooms, bedrooms, and living areas — for a consistently clean and tidy home.",
    shortDesc: "Complete top-to-bottom home cleaning for a consistently fresh living space.",
    icon: "Home",
    image: "https://res.cloudinary.com/dmvrgj0sy/image/upload/v1781166098/PstConstruction_1_hznfqg.png",
    price: "From KSh 2,000 per room",
    priceNum: 2000,
    duration: "3–5 hours",
    benefits: ["All rooms covered", "Kitchen deep clean", "Bathroom sanitization", "Flexible scheduling", "Recurring plans available"],
    process: [
      { step: 1, title: "Walkthrough", desc: "Client walkthrough to identify priorities." },
      { step: 2, title: "Kitchen", desc: "Clean surfaces, appliances, and sink." },
      { step: 3, title: "Bathrooms", desc: "Disinfect toilets, showers, and tiles." },
      { step: 4, title: "Bedrooms & Living", desc: "Dust, vacuum, and organize." },
      { step: 5, title: "Final Check", desc: "Quality inspection before handover." },
    ],
    category: "Residential",
    featured: false,
  },
  {
    id: "deep-cleaning",
    slug: "deep-cleaning",
    name: "Deep Home Cleaning",
    tagline: "The ultimate refresh for your home",
    description: "Intensive cleaning that goes beyond the surface — behind appliances, inside cabinets, grout lines, window tracks, and every hidden corner.",
    shortDesc: "The ultimate intensive clean reaching every corner of your home.",
    icon: "Sparkles",
    image: "https://res.cloudinary.com/dmvrgj0sy/image/upload/v1781164534/F.2_xyqqid.jpg",
    price: "From KSh 3,000 per room",
    priceNum: 3000,
    duration: "6–10 hours",
    benefits: ["Behind appliances cleaned", "Inside cabinets & drawers", "Grout & tile scrubbing", "Window tracks & sills", "Full sanitization"],
    process: [
      { step: 1, title: "Detailed Scope", desc: "Document every area to be deep cleaned." },
      { step: 2, title: "Kitchen Deep Clean", desc: "Inside ovens, fridges, behind appliances." },
      { step: 3, title: "Bathroom Grout", desc: "Scrub grout, descale fixtures, sanitize." },
      { step: 4, title: "All Rooms", desc: "Walls, baseboards, ceiling fans, vents." },
      { step: 5, title: "Inspection", desc: "Client walkthrough and sign-off." },
    ],
    category: "Residential",
    featured: true,
  },
  {
    id: "post-construction-cleaning",
    slug: "post-construction-cleaning",
    name: "Post-Construction Cleaning",
    tagline: "Construction done. We handle the mess.",
    description: "Specialized cleaning after construction or renovation — removing cement dust, paint splatters, adhesive residue, and construction debris.",
    shortDesc: "Specialized post-renovation clean-up removing dust, debris, and construction residue.",
    icon: "HardHat",
    image: "https://res.cloudinary.com/dmvrgj0sy/image/upload/v1781165549/PstConstruction_dphd8g.png",
    price: "From KSh 5,000 per room",
    priceNum: 5000,
    duration: "Full day",
    benefits: ["Removes cement dust", "Paint splatter removal", "Window cleaning", "Floor polishing", "Debris disposal"],
    process: [
      { step: 1, title: "Site Assessment", desc: "Assess scale of construction residue." },
      { step: 2, title: "Rough Clean", desc: "Remove large debris and dust." },
      { step: 3, title: "Detailed Clean", desc: "Clean windows, fixtures, and surfaces." },
      { step: 4, title: "Floor Treatment", desc: "Clean and polish all floor surfaces." },
      { step: 5, title: "Final Polish", desc: "Wipe-down and final inspection." },
    ],
    category: "Specialist",
    featured: true,
  },
  {
    id: "fumigation-pest-control",
    slug: "fumigation-pest-control",
    name: "Fumigation & Pest Control",
    tagline: "Protect your home from unwanted guests",
    description: "Licensed fumigation and pest control services for cockroaches, bedbugs, rodents, termites, and other pests using safe, certified chemicals.",
    shortDesc: "Licensed pest elimination services for a safe, pest-free environment.",
    icon: "Bug",
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&h=600&fit=crop&auto=format",
    price: "From KSh 2,000 per room",
    priceNum: 2000,
    duration: "2–3 hours",
    benefits: ["Licensed technicians", "Certified safe chemicals", "All pests covered", "Warranty provided", "Follow-up treatments"],
    process: [
      { step: 1, title: "Inspection", desc: "Identify pest type and infestation extent." },
      { step: 2, title: "Preparation", desc: "Client instructed on preparation steps." },
      { step: 3, title: "Treatment", desc: "Apply targeted chemical treatments." },
      { step: 4, title: "Sealing", desc: "Seal entry points to prevent re-entry." },
      { step: 5, title: "Follow-Up", desc: "Scheduled follow-up to confirm eradication." },
    ],
    category: "Specialist",
    featured: false,
  },
  {
    id: "airbnb-cleaning",
    slug: "airbnb-cleaning",
    name: "Airbnb Cleaning",
    tagline: "5-star cleanliness for 5-star reviews",
    description: "Fast, reliable turnover cleaning for short-stay rentals. We coordinate with your booking calendar to ensure properties are guest-ready every time.",
    shortDesc: "Turnover cleaning coordinated with your booking calendar for 5-star stays.",
    icon: "Building2",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop&auto=format",
    price: "From KSh 2,500 per room",
    priceNum: 2500,
    duration: "2–4 hours",
    benefits: ["Calendar sync available", "Linen change included", "Restocking service", "Photo documentation", "Guest-ready guarantee"],
    process: [
      { step: 1, title: "Checkout Check", desc: "Inspect unit after guest checkout." },
      { step: 2, title: "Linen Swap", desc: "Replace all bed linens and towels." },
      { step: 3, title: "Full Clean", desc: "Kitchen, bathrooms, and all rooms." },
      { step: 4, title: "Restocking", desc: "Restock toiletries, supplies, and amenities." },
      { step: 5, title: "Photo Report", desc: "Photo documentation sent to host." },
    ],
    category: "Commercial",
    featured: true,
  },
  {
    id: "shoe-cleaning",
    slug: "shoe-cleaning",
    name: "Professional Shoe Cleaning",
    tagline: "Restore your sneakers to factory fresh",
    description: "Professional shoe cleaning for all types — sneakers, leather shoes, suede, boots, and more. Drop-off and collection service available.",
    shortDesc: "Expert shoe restoration for sneakers, leather, suede, and all footwear types.",
    icon: "Footprints",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop&auto=format",
    price: "From KSh 500/pair",
    priceNum: 500,
    duration: "Same day",
    benefits: ["All shoe types", "Deep sole cleaning", "Color restoration", "Deodorizing", "Drop-off & collection"],
    process: [
      { step: 1, title: "Assessment", desc: "Check material, staining, and damage." },
      { step: 2, title: "Dry Brushing", desc: "Remove loose dirt and surface debris." },
      { step: 3, title: "Deep Clean", desc: "Type-specific cleaning solution applied." },
      { step: 4, title: "Sole & Edge", desc: "Deep scrub of outsoles and midsoles." },
      { step: 5, title: "Conditioning", desc: "Leather/suede conditioning and protection." },
    ],
    category: "Specialist",
    featured: false,
  },
];

export const SERVICE_AREAS = [
  "Nairobi CBD", "Westlands", "Kilimani", "Kileleshwa", "Lavington",
  "South B", "South C", "Ruaka", "Ruiru", "Syokimau", "Kitengela",
  "Parklands", "Karen", "Langata", "Eastleigh", "Upperhill",
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Valentine Wangui",
    location: "Juja",
    service: "Deep Home Cleaning",
    rating: 5,
    review: "HomeGlow transformed my apartment completely! I was skeptical at first but they cleaned every corner I'd forgotten existed. The team was professional, on time, and incredibly thorough. My home looks brand new.",
    avatar: getAvatar("Valentine Wangui"),
    date: "2024-05-15",
  },
  {
    id: 2,
    name: "Maalim Mohammed",
    location: "Westlands",
    service: "Carpet Cleaning",
    rating: 5,
    review: "My carpets had stains from years of use that I thought would never come out. The HomeGlow team used their extraction method and the carpets look completely restored. Absolutely brilliant work!",
    avatar: getAvatar("Maalim Mohammed"),
    date: "2024-05-10",
  },
  {
    id: 3,
    name: "Joy Mwangi",
    location: "Ruiru",
    service: "Airbnb Cleaning",
    rating: 5,
    review: "I manage 3 Airbnb units and HomeGlow has been a game changer. They coordinate seamlessly with my booking calendar, and guests consistently comment on how spotlessly clean the units are. Highly recommend!",
    avatar: getAvatar("Joy Mwangi"),
    date: "2024-05-08",
  },
  {
    id: 4,
    name: "Collins Aluvara",
    location: "Jogoo Road",
    service: "Sofa Cleaning",
    rating: 5,
    review: "Our sofa had dog hair and smells embedded deeply. After HomeGlow's treatment it looks and smells like we just bought it. The technician was polite, knowledgeable, and clearly passionate about his work.",
    avatar: getAvatar("Collins Aluvara"),
    date: "2024-04-28",
  },
  {
    id: 5,
    name: "Elijah Mwenda",
    location: "Kenol",
    service: "Post-Construction Cleaning",
    rating: 5,
    review: "We just finished a major renovation and the construction dust was overwhelming. HomeGlow sent a full team and within one day the entire house was spotless. Excellent value for the quality delivered.",
    avatar: getAvatar("Elijah Mwenda"),
    date: "2024-04-20",
  },
  {
    id: 6,
    name: "Lewis Njeru",
    location: "Juja",
    service: "Fumigation",
    rating: 5,
    review: "Had a serious cockroach problem that other companies failed to fix. HomeGlow's team identified the root cause, treated thoroughly, and the problem has been gone for 3 months now. Very professional!",
    avatar: getAvatar("Lewis Njeru"),
    date: "2024-04-15",
  },
];

export const BLOG_POSTS = [
  {
    id: 1,
    slug: "how-often-should-you-clean-your-mattress",
    title: "How Often Should You Clean Your Mattress?",
    excerpt: "Most people change their sheets regularly but neglect their mattress. Here's what the experts say about mattress cleaning frequency and why it matters for your health.",
    content: `Your mattress is one of the most used items in your home, yet one of the most neglected when it comes to cleaning. The average person spends about 8 hours per night on their mattress — that's one-third of your life!

## What Lives in Your Mattress?

Over time, your mattress accumulates:
- **Dust mites** — microscopic creatures that feed on dead skin cells
- **Dead skin cells** — you shed about 30,000–40,000 skin cells per hour
- **Sweat and body oils** — absorbed into the mattress over time
- **Pet dander** — if your pet shares the bed
- **Mold and mildew** — in humid environments

## How Often Should You Clean?

**Every 6 months:** Full professional cleaning
**Monthly:** Vacuum the surface with upholstery attachment
**Weekly:** Rotate the mattress 180°
**Immediately:** Address any spills or accidents

## Signs You Need Professional Cleaning

- Visible stains or discoloration
- Musty or unpleasant odor
- Waking up with allergy symptoms
- Yellow sweat stains

Professional mattress cleaning by HomeGlow uses hot steam extraction that kills 99.9% of dust mites and bacteria, leaving your mattress hygienically clean.`,
    category: "Health & Hygiene",
    author: "HomeGlow Team",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=500&fit=crop&auto=format",
    publishedAt: "2024-05-20",
    readTime: "4 min read",
    tags: ["mattress", "health", "cleaning tips"],
  },
  {
    id: 2,
    slug: "5-signs-your-carpet-needs-professional-cleaning",
    title: "5 Signs Your Carpet Needs Professional Cleaning",
    excerpt: "Carpets hide more than you think. Learn the telltale signs that your carpet is overdue for a professional deep clean.",
    content: `Carpets are one of the biggest air filters in your home — they trap dust, allergens, and pollutants from the air. But when they're full, they start releasing those particles back into your breathing space.

## 5 Signs It's Time

**1. Persistent Odors**
If your carpet still smells after regular vacuuming, it's trapped odors deep in the fibers that only hot water extraction can remove.

**2. Visible Traffic Lanes**
Dark pathways along your regular walking routes indicate embedded dirt that vacuuming can no longer reach.

**3. Allergy Flare-Ups**
If family members are experiencing increased sneezing, coughing, or eye irritation at home, your carpet could be the culprit.

**4. Matted or Flat Fibers**
Over time, carpet fibers get pressed down from foot traffic. Professional cleaning restores the pile and extends carpet life.

**5. It's Been More Than 12 Months**
Even if your carpet looks clean, professional cleaning every 12 months is recommended for health reasons.

HomeGlow's carpet cleaning service uses truck-mounted hot water extraction — the gold standard method recommended by carpet manufacturers.`,
    category: "Cleaning Tips",
    author: "HomeGlow Team",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop&auto=format",
    publishedAt: "2024-05-15",
    readTime: "3 min read",
    tags: ["carpet", "cleaning tips", "home maintenance"],
  },
  {
    id: 3,
    slug: "airbnb-host-guide-to-maintaining-5-star-cleanliness",
    title: "Airbnb Host's Guide to Maintaining 5-Star Cleanliness",
    excerpt: "Consistently clean properties lead to consistently excellent reviews. Here's how professional hosts maintain spotless Airbnb properties.",
    content: `As an Airbnb host, cleanliness is directly tied to your star rating — and your income. Studies show that cleanliness is the #1 factor guests consider when rating a property.

## The 5-Star Cleaning Standard

### Between Every Guest
- Change all bed linens and pillowcases
- Replace towels, washcloths, and bath mats
- Clean and sanitize all bathrooms
- Clean kitchen including appliances and inside microwave
- Wipe all surfaces and light switches
- Vacuum all floors and mop hard floors
- Empty all bins

### Weekly Deep Clean
- Clean inside refrigerator and oven
- Descale kettle and coffee machine
- Wipe down walls and doors
- Clean windows from inside

### Monthly Tasks
- Deep clean mattresses
- Wash sofa cushion covers
- Clean curtains/blinds
- Check for and treat any mold

## Why Professional Cleaning Pays Off

The difference between a 4-star and 5-star cleanliness rating can mean:
- 20–30% higher nightly rate
- Higher occupancy rates
- Superhost status
- More bookings from recommendations

HomeGlow offers dedicated Airbnb turnover cleaning coordinated with your iCal booking calendar, so your property is always guest-ready.`,
    category: "Airbnb Management",
    author: "HomeGlow Team",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=500&fit=crop&auto=format",
    publishedAt: "2024-05-10",
    readTime: "5 min read",
    tags: ["airbnb", "hosting", "cleaning tips"],
  },
  {
    id: 4,
    slug: "eco-friendly-cleaning-products-we-use",
    title: "The Eco-Friendly Cleaning Products We Use (And Why)",
    excerpt: "At HomeGlow, we've committed to using environmentally responsible cleaning products. Here's what we use and the benefits for your family.",
    content: `Choosing the right cleaning products matters not just for cleaning effectiveness, but for the health of your family and the environment.

## Our Commitment to Eco-Friendly Cleaning

HomeGlow has transitioned 100% of our residential cleaning to biodegradable, plant-derived cleaning formulas. Here's why:

### For Your Family's Health
Conventional cleaning products often contain volatile organic compounds (VOCs) that linger in indoor air long after cleaning. Our products are:
- Free from harsh chemicals
- Non-toxic if accidentally ingested
- Safe around children and pets
- No irritating fumes

### For the Environment
Our cleaning products are:
- Biodegradable within 28 days
- Packaged in recyclable containers
- Not tested on animals
- Free from phosphates and chlorine bleach

## Our Certified Products

**General Surfaces:** Plant-based multi-surface spray
**Bathrooms:** Citric acid-based descaler
**Floors:** pH-neutral floor cleaner
**Upholstery:** Enzyme-based fabric cleaner

## Does Green Mean Less Effective?

Absolutely not. Our eco-friendly formulations have been tested and proven to be as effective — sometimes more effective — than conventional chemical cleaners for home cleaning tasks.`,
    category: "Home Maintenance",
    author: "HomeGlow Team",
    image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&h=500&fit=crop&auto=format",
    publishedAt: "2024-05-05",
    readTime: "4 min read",
    tags: ["eco-friendly", "products", "sustainability"],
  },
  {
    id: 5,
    slug: "complete-guide-to-pest-control-in-nairobi",
    title: "Complete Guide to Pest Control in Nairobi",
    excerpt: "Nairobi's climate makes pest control an ongoing necessity for homeowners. This guide covers the most common pests and the most effective treatments.",
    content: `Nairobi's warm climate and urban density create ideal conditions for household pests. Understanding the common pests and when to call professionals can save you time, money, and stress.

## Most Common Pests in Nairobi Homes

### Cockroaches
The most common household pest in Nairobi. American cockroaches thrive in warm, humid environments and can spread more than 30 types of bacteria.

**Signs:** Droppings, egg cases, musty odor, seeing them during the day.
**Treatment:** Gel baits + insecticide spray + sealing entry points.

### Bedbugs
A growing problem in Nairobi, especially in apartments and rental properties. Bedbugs feed on blood and can cause significant discomfort.

**Signs:** Bite marks in lines or clusters, blood spots on sheets, dark spots on mattress seams.
**Treatment:** Heat treatment + insecticide spray + thorough vacuuming.

### Rodents (Rats & Mice)
Cause significant property damage and food contamination.

**Signs:** Droppings, gnaw marks, nesting materials.
**Treatment:** Trapping + rodenticide bait + exclusion.

### Termites
Silent destroyers that can cause serious structural damage before detection.

**Signs:** Mud tubes on walls, hollow-sounding wood, discarded wings.
**Treatment:** Chemical barrier treatment or baiting systems.

## When to Call a Professional

Always call a professional for:
- Any bedbug infestation
- Termite treatment
- Large-scale cockroach infestations
- Any pest in food service areas

HomeGlow's licensed pest control team uses only EPA-approved chemicals and provides warranties on all treatments.`,
    category: "Pest Control",
    author: "HomeGlow Team",
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&h=500&fit=crop&auto=format",
    publishedAt: "2024-04-30",
    readTime: "6 min read",
    tags: ["pest control", "fumigation", "nairobi"],
  },
  {
    id: 6,
    slug: "post-construction-cleaning-checklist",
    title: "The Ultimate Post-Construction Cleaning Checklist",
    excerpt: "Just finished a renovation? Here's the comprehensive checklist for getting your home clean and livable after construction.",
    content: `Construction and renovation leave behind a specific type of mess that requires specialized cleaning techniques. Here's what needs to be done.

## Why Regular Cleaning Won't Cut It

Construction debris includes:
- Fine cement/plaster dust that penetrates everywhere
- Paint splatters on surfaces not intended
- Adhesive residue from tiles and flooring
- Metal filings and sharp debris
- Silica dust (potentially hazardous to health)

## The Post-Construction Cleaning Order

### Stage 1: Rough Clean
- Remove all large debris, scrap materials
- Clear all rooms of construction materials
- Bag and dispose of all waste

### Stage 2: Dust Removal
- HEPA vacuum all surfaces (walls, ceilings, floors)
- Wipe down all surfaces with damp microfiber
- Pay special attention to light fixtures and HVAC vents

### Stage 3: Detailed Clean
- Clean inside all cabinets and drawers
- Remove paint splatters from glass, floors, fixtures
- Clean all windows inside and outside
- Wipe down all door frames and baseboards

### Stage 4: Floor Finishing
- Deep scrub all hard floors
- Steam clean any carpets
- Polish hardwood or tile as required

### Stage 5: Final Inspection
- Check all corners and hidden areas
- Ensure no sharp debris remains
- Wipe all light switches and outlets

HomeGlow brings specialized equipment and trained teams to handle post-construction clean-ups of any scale.`,
    category: "Home Maintenance",
    author: "HomeGlow Team",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=500&fit=crop&auto=format",
    publishedAt: "2024-04-25",
    readTime: "5 min read",
    tags: ["post-construction", "renovation", "deep cleaning"],
  },
];

export const PRICING = [
  { id: 1, service: "Sofa Cleaning (2-seater)", description: "Steam cleaning for 2-seater sofas", price: 1200, unit: "per sofa", status: "available" },
  { id: 2, service: "Sofa Cleaning (3-seater)", description: "Steam cleaning for 3-seater sofas", price: 1800, unit: "per sofa", status: "available" },
  { id: 3, service: "Sofa Cleaning (L-shape)", description: "Steam cleaning for L-shaped sofas", price: 2500, unit: "per sofa", status: "available" },
  { id: 4, service: "Mattress Cleaning (Single)", description: "Full sanitization of single mattress", price: 1800, unit: "per mattress", status: "available" },
  { id: 5, service: "Mattress Cleaning (Double)", description: "Full sanitization of double mattress", price: 2500, unit: "per mattress", status: "available" },
  { id: 6, service: "Mattress Cleaning (King)", description: "Full sanitization of king mattress", price: 3200, unit: "per mattress", status: "available" },
  { id: 7, service: "Carpet Cleaning", description: "Hot water extraction cleaning", price: 25, unit: "per sq ft", status: "available" },
  { id: 8, service: "General House Cleaning (1BR)", description: "Full house clean for 1-bedroom", price: 3000, unit: "per visit", status: "available" },
  { id: 9, service: "General House Cleaning (2BR)", description: "Full house clean for 2-bedroom", price: 4500, unit: "per visit", status: "available" },
  { id: 10, service: "General House Cleaning (3BR)", description: "Full house clean for 3-bedroom", price: 5000, unit: "per visit", status: "available" },
  { id: 11, service: "Deep Cleaning (1BR)", description: "Intensive deep clean for 1-bedroom", price: 7000, unit: "per visit", status: "available" },
  { id: 12, service: "Deep Cleaning (2BR)", description: "Intensive deep clean for 2-bedroom", price: 10000, unit: "per visit", status: "available" },
  { id: 13, service: "Deep Cleaning (3BR)", description: "Intensive deep clean for 3-bedroom", price: 16000, unit: "per visit", status: "available" },
  { id: 14, service: "Post-Construction (Small)", description: "Up to 1,000 sqft", price: 15000, unit: "per project", status: "available" },
  { id: 15, service: "Post-Construction (Large)", description: "Over 1,000 sqft — custom quote", price: 0, unit: "custom quote", status: "quote" },
  { id: 16, service: "Fumigation (1BR)", description: "Full fumigation for 1-bedroom", price: 2000, unit: "per session", status: "available" },
  { id: 17, service: "Fumigation (2BR)", description: "Full fumigation for 2-bedroom", price: 3000, unit: "per session", status: "available" },
  { id: 18, service: "Fumigation (3BR+)", description: "Full fumigation for 3-bedroom+", price: 4500, unit: "per session", status: "available" },
  { id: 19, service: "Airbnb Turnover (Studio)", description: "Turnover clean for studio/1BR", price: 2500, unit: "per turnover", status: "available" },
  { id: 20, service: "Airbnb Turnover (2BR+)", description: "Turnover clean for 2-bedroom+", price: 4000, unit: "per turnover", status: "available" },
  { id: 21, service: "Shoe Cleaning (Sneakers)", description: "Deep clean for sports shoes", price: 500, unit: "per pair", status: "available" },
  { id: 22, service: "Shoe Cleaning (Leather)", description: "Clean & condition leather shoes", price: 800, unit: "per pair", status: "available" },
  { id: 23, service: "Shoe Cleaning (Suede)", description: "Specialist suede shoe cleaning", price: 1200, unit: "per pair", status: "available" },
];

export const STATS = [
  { label: "Homes Cleaned", value: "500+", icon: "Home" },
  { label: "Happy Clients", value: "1,000+", icon: "Users" },
  { label: "Customer Satisfaction", value: "98%", icon: "Star" },
  { label: "Response Time", value: "< 24hrs", icon: "Clock" },
];

export const TEAM = [
  {
    id: 1,
    name: "Caleb Murambi",
    role: "Founder & CEO",
    bio: "With 5+ years in facility management, Caleb founded HomeGlow to bring professional-grade cleaning to Nairobi homes.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&auto=format",
  },
  {
    id: 2,
    name: "Mary Njoroge",
    role: "Operations Manager",
    bio: "Mary oversees all field operations, training, and quality control to ensure every clean meets our exacting standards.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&auto=format",
  },
  {
    id: 3,
    name: "Samuel Ochieng",
    role: "Head Technician",
    bio: "Samuel leads our specialist team and is certified in advanced upholstery and carpet restoration techniques.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format",
  },
  {
    id: 4,
    name: "Agnes Wambui",
    role: "Customer Experience",
    bio: "Agnes ensures every client interaction exceeds expectations, from first contact to post-service follow-up.",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=400&h=400&fit=crop&auto=format",
  },
];

export const GALLERY_ITEMS = [
  { id: 1, type: "video", category: "Sofa Cleaning", title: "Brown Fabric Sofa Cleaning", url: "https://res.cloudinary.com/dmvrgj0sy/image/upload/v1781166773/Max_zyi03x.jpg", thumb: "https://res.cloudinary.com/dmvrgj0sy/image/upload/v1781166773/Max_zyi03x.jpg" },
  { id: 2, type: "image", category: "Carpet Cleaning", title: "Persian Carpet Restoration", url: "https://res.cloudinary.com/dmvrgj0sy/image/upload/v1781168990/Carpetsb4_ykghlc.png", thumb: "https://res.cloudinary.com/dmvrgj0sy/image/upload/v1781168990/Carpetsb4_ykghlc.png" },
  { id: 3, type: "image", category: "Deep Cleaning", title: "Kitchen Deep Clean", url: "https://res.cloudinary.com/dmvrgj0sy/image/upload/v1781166098/PstConstruction_1_hznfqg.png", thumb: "https://res.cloudinary.com/dmvrgj0sy/image/upload/v1781166098/PstConstruction_1_hznfqg.png" },
  { id: 4, type: "image", category: "Airbnb Cleaning", title: "Airbnb Studio Turnover", url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop&auto=format", thumb: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop&auto=format" },
  { id: 5, type: "image", category: "Post Construction", title: "Post-Reno Clean", url: "https://res.cloudinary.com/dmvrgj0sy/image/upload/v1781165549/PstConstruction_dphd8g.png", thumb: "https://res.cloudinary.com/dmvrgj0sy/image/upload/v1781165549/PstConstruction_dphd8g.png" },
  { id: 6, type: "image", category: "Mattress Cleaning", title: "Mattress Deep Clean", url: "https://res.cloudinary.com/dmvrgj0sy/image/upload/v1781164739/dt3_hlmp9w.jpg", thumb: "https://res.cloudinary.com/dmvrgj0sy/image/upload/v1781164739/dt3_hlmp9w.jpg" },
  { id: 7, type: "image", category: "Fumigation", title: "Pest Treatment", url: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&h=600&fit=crop&auto=format", thumb: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400&h=300&fit=crop&auto=format" },
  { id: 8, type: "image", category: "Shoe Cleaning", title: "Sneaker Restoration", url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop&auto=format", thumb: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&auto=format" },
  { id: 9, type: "image", category: "Sofa Cleaning", title: "Fabric Sofa Steam Clean", url: "https://res.cloudinary.com/dmvrgj0sy/image/upload/v1781168253/after_q7teer.jpg", thumb: "https://res.cloudinary.com/dmvrgj0sy/image/upload/v1781168253/after_q7teer.jpg" },
  { id: 10, type: "image", category: "Deep Cleaning", title: "Bathroom Tile Scrub", url: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop&auto=format", thumb: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop&auto=format" },
  { id: 11, type: "image", category: "Carpet Cleaning", title: "Office Carpet Restoration", url: "https://res.cloudinary.com/dmvrgj0sy/image/upload/v1781167342/WhatsApp_Image_2026-06-11_at_11.36.05_1_marttg.jpg", thumb: "https://res.cloudinary.com/dmvrgj0sy/image/upload/v1781167342/WhatsApp_Image_2026-06-11_at_11.36.05_1_marttg.jpg" },
  { id: 12, type: "image", category: "Airbnb Cleaning", title: "Luxury Airbnb Prep", url: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=800&h=600&fit=crop&auto=format", thumb: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=400&h=300&fit=crop&auto=format" },
];

export const SUPPORT_TICKETS = [
  { id: "TKT-001", subject: "Booking reschedule request", status: "open", priority: "high", customer: "Sarah Wanjiku", email: "sarah@example.com", createdAt: "2024-05-20", message: "I need to reschedule my deep cleaning from Friday to Monday." },
  { id: "TKT-002", subject: "Invoice query", status: "resolved", priority: "medium", customer: "James Mwangi", email: "james@example.com", createdAt: "2024-05-18", message: "I received an invoice but the amount seems incorrect." },
  { id: "TKT-003", subject: "Quality complaint - carpet", status: "in-progress", priority: "high", customer: "Grace Akinyi", email: "grace@example.com", createdAt: "2024-05-17", message: "Some stains are still visible after cleaning." },
  { id: "TKT-004", subject: "Request for recurring service", status: "open", priority: "low", customer: "Peter Kamau", email: "peter@example.com", createdAt: "2024-05-16", message: "I'd like to set up weekly cleaning visits." },
];

export const BOOKINGS = [
  { id: "BK-001", customer: "Sarah Wanjiku", service: "Deep Home Cleaning", date: "2024-05-25", time: "09:00", location: "Kilimani", status: "confirmed", amount: 8000, phone: "+254796578077" },
  { id: "BK-002", customer: "James Mwangi", service: "Carpet Cleaning", date: "2024-05-24", time: "11:00", location: "Westlands", status: "pending", amount: 4500, phone: "+254 722 456 789" },
  { id: "BK-003", customer: "Grace Akinyi", service: "Airbnb Cleaning", date: "2024-05-23", time: "14:00", location: "Karen", status: "completed", amount: 2500, phone: "+254 733 567 890" },
  { id: "BK-004", customer: "Peter Kamau", service: "Sofa Cleaning", date: "2024-05-22", time: "10:00", location: "Lavington", status: "completed", amount: 3500, phone: "+254 744 678 901" },
  { id: "BK-005", customer: "Nancy Otieno", service: "Post-Construction", date: "2024-05-21", time: "08:00", location: "South B", status: "confirmed", amount: 15000, phone: "+254 755 789 012" },
  { id: "BK-006", customer: "David Odhiambo", service: "Fumigation", date: "2024-05-20", time: "09:30", location: "Ruiru", status: "cancelled", amount: 3000, phone: "+254 766 890 123" },
];

export const NEWSLETTER_SUBSCRIBERS = [
  { id: 1, name: "Sarah Wanjiku", email: "sarah@example.com", subscribedAt: "2024-05-20", status: "active" },
  { id: 2, name: "James Mwangi", email: "james@example.com", subscribedAt: "2024-05-15", status: "active" },
  { id: 3, name: "Grace Akinyi", email: "grace@example.com", subscribedAt: "2024-05-10", status: "active" },
  { id: 4, name: "Peter Kamau", email: "peter@example.com", subscribedAt: "2024-05-05", status: "unsubscribed" },
  { id: 5, name: "Nancy Otieno", email: "nancy@example.com", subscribedAt: "2024-04-28", status: "active" },
];

export const ADMIN_STATS = {
  totalBookings: 156,
  pendingBookings: 12,
  confirmedBookings: 38,
  completedBookings: 98,
  totalRevenue: 1285000,
  thisMonthRevenue: 142000,
  totalCustomers: 1043,
  newCustomers: 47,
  totalSubscribers: 892,
  openTickets: 8,
  avgRating: 4.9,
};

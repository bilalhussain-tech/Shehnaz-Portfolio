import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Search, Menu, X, Star, Heart, ArrowRight, Instagram, Facebook, Twitter, ShieldCheck, Truck, Zap, ChevronDown } from 'lucide-react';

const translations = {
  en: {
    home: "Home",
    skincare: "Skincare",
    makeup: "Makeup",
    haircare: "Haircare",
    fragrance: "Fragrance",
    brand: "SHEHNAZ",
    bag: "Bag",
    experience: "Super Store Experience",
    heroTitleBold: "The",
    heroTitleItalic: "Nouveau",
    heroTitleLast: "Ritual",
    heroSubtitle: "Elevating beauty through scientific curation and prestige aesthetics.",
    enterCollection: "Enter The Collection",
    new: "New",
    addToBag: "Add to Bag",
    yourBag: "Your Bag",
    bagEmpty: "The bag is empty",
    beginRitual: "Begin Ritual",
    estimatedTotal: "Estimated Total",
    checkout: "Proceed to Checkout",
    shippingIncluded: "Complimentary Concierge Shipping Included",
    curation: "The Curation",
    excellenceBold: "Selected",
    excellenceItalic: "Excellence",
    categoryDiscover: "Discover by category",
    explore: "Explore",
    filter: "Filter",
    edit: "Edit",
    clearFilters: "Clear Filters",
    bestsellers: "Iconic Bestsellers",
    comingSoon: "Our collection is coming soon.",
    authenticity: "Authenticity Guaranteed",
    authenticityDesc: "Direct provenance from global luxury houses.",
    logistics: "Privé Logistics",
    logisticsDesc: "Complimentary white-glove shipping on every order.",
    ethical: "Ethical Excellence",
    ethicalDesc: "Cruelty-free curation adhering to international standards.",
    blogTitle: "The Beauty Brief",
    blogSubtitle: "Routine & Rituals",
    readArticle: "Read Article",
    ingredientIQ: "Ingredient IQ",
    fullTransparency: "Full Transparency",
    iqDesc: "Curious about what goes into your skincare?",
    analyzeIngredients: "Analyzing formula...",
    selectProduct: "Select a product to analyze.",
    testimonials: "Testimonials",
    clientExperiences: "Client Experiences",
    footerDesc: "A digital destination for refined aesthetics. Curated in Pakistan.",
    concierge: "The Concierge",
    archive: "The Archive",
    rightsReserved: "© 2024 Shehnaz Super Store. All Rights Reserved.",
    selectLanguage: "Select Language",
    urdu: "Urdu",
    english: "English",
    skinEnthusiast: "Skin Enthusiast",
    makeupArtist: "Makeup Artist",
    loyalClient: "Loyal Client",
    testimonial1: "The selection at Shehnaz is unparalleled. I found effective medical-grade skincare that was previously impossible to source in Karachi.",
    testimonial2: "Their delivery service is impeccable. Everything arrives in pristine condition, and the packaging makes every order feel like a luxury gift.",
    testimonial3: "Finally, a trustworthy destination for authentic international brands. The Ingredient IQ feature is a game-changer for my sensitive skin.",
    currency: "PKR / International",
    filterCategory: "Filter Category",
    collections: "The Collections",
    the: "The",
    editSuffix: "Edit",
    backToStore: "Back to Store",
    trackOrderTitle: "Track Your Ritual",
    trackOrderContent: "To track your Shehnaz shipment, please enter your order number and email address below.",
    trackOrderNote: "*Note: Tracking information may take up to 24 hours to update after dispatch.*",
    orderNumber: "Order Number",
    emailAddress: "Email Address",
    trackNow: "Track Now",
    shippingReturnsTitle: "Shipping & Returns",
    shippingReturnsContent: "We offer complimentary white-glove delivery on all orders over Rs. 25,000. \n\n**Standard Delivery:** 3-5 Business Days\n**Express Delivery:** 1-2 Business Days\n\n**Return Policy:** Unopened and unused items can be returned within 14 days of delivery for a full refund in original packaging.",
    giftServicesTitle: "Art of Gifting",
    giftServicesContent: "Every Shehnaz order arrives in our signature cream-and-gold gift box. We offer personalized calligraphy notes and curated gift sets for special occasions.",
    contactUsTitle: "Contact Us",
    contactUsContent: "Our beauty specialists are available Monday to Saturday, 9:00 AM - 9:00 PM (PKT).\n\n**Email:** care@shehnazsuperstore.pk\n**WhatsApp:** 03053360595, 03126647750",
    ourStoryTitle: "The Shehnaz Legacy",
    ourStoryContent: "Founded on the principle of scientific elegance, Shehnaz Super Store has been Pakistan's premier destination for luxury beauty for over a decade. We curate only the most effective formulas from the world's most prestigious beauty houses.",
    beautyBlogTitle: "The Beauty Brief",
    beautyBlogContent: "Explore our latest articles on skincare science, seasonal makeup trends, and fragrance layering techniques. From expert interviews to routine guides, we help you master your beauty ritual.",
    storesTitle: "Our Boutiques",
    storesContent: "**Karachi:** Dolmen Mall Clifton, Second Floor\n**Lahore:** Emporium Mall, Ground Floor\n**Islamabad:** Centaurus Mall, First Floor",
    privacyPolicyTitle: "Privacy & Security",
    privacyPolicyContent: "At Shehnaz, your privacy is paramount. We use industry-standard encryption to protect your personal and payment information. We never share your data with third parties without your explicit consent.",
    trackOrder: "Track Order",
    shippingReturns: "Shipping & Returns",
    giftServices: "Gift Services",
    contactUs: "Contact Us",
    ourStory: "Our Story",
    beautyBlog: "Beauty Blog",
    stores: "Stores",
    privacyPolicy: "Privacy Policy"
  },
  ur: {
    home: "ہوم",
    skincare: "سکن کیئر",
    makeup: "میک اپ",
    haircare: "ہیئر کیئر",
    fragrance: "خوشبو",
    brand: "شہناز",
    bag: "بیگ",
    experience: "سپر اسٹور کا تجربہ",
    heroTitleBold: "جدید",
    heroTitleItalic: "خوبصورتی",
    heroTitleLast: "کا طریقہ",
    heroSubtitle: "سائنسی انتخاب کے ذریعے خوبصورتی کو نکھارنا۔",
    enterCollection: "کلیکشن میں داخل ہوں",
    new: "نیا",
    addToBag: "بیگ میں شامل کریں",
    yourBag: "آپ کا بیگ",
    bagEmpty: "بیگ خالی ہے",
    beginRitual: "خریداری شروع کریں",
    estimatedTotal: "کل تخمینہ",
    checkout: "آرڈر مکمل کریں",
    shippingIncluded: "مفت کونسیرج شپنگ شامل ہے",
    curation: "انتخاب",
    excellenceBold: "منتخب کردہ",
    excellenceItalic: "اعلی معیار",
    categoryDiscover: "زمرہ کے لحاظ سے دریافت کریں",
    explore: "دریافت کریں",
    filter: "فلٹر",
    edit: "ایڈٹ",
    clearFilters: "فلٹر ختم کریں",
    bestsellers: "مشہور اشیاء",
    comingSoon: "ہماری کلیکشن جلد آ رہی ہے۔",
    authenticity: "اصلیت کی ضمانت",
    authenticityDesc: "عالمی لگژری ہاؤسز سے براہ راست۔",
    logistics: "خصوصی شپنگ",
    logisticsDesc: "ہر آرڈر پر مفت شپنگ۔",
    ethical: "اخلاقی فضیلت",
    ethicalDesc: "بین الاقوامی معیار کے مطابق۔",
    blogTitle: "بیوٹی بریف",
    blogSubtitle: "روٹین اور طریقے",
    readArticle: "مزید پڑھیں",
    ingredientIQ: "اجزاء کا علم",
    fullTransparency: "مکمل شفافیت",
    iqDesc: "جاننا چاہتے ہیں کہ آپ کے سکن کیئر میں کیا ہے؟",
    analyzeIngredients: "تجزیہ ہو رہا ہے...",
    selectProduct: "تجزیہ کے لیے انتخاب کریں۔",
    testimonials: "تاثرات",
    clientExperiences: "کلائنٹ کے تجربات",
    footerDesc: "نفیس جمالیات کے لیے ایک ڈیجیٹل منزل۔ پاکستان میں منتخب کردہ۔",
    concierge: "کونسیرج",
    archive: "آرکائیو",
    rightsReserved: "© 2024 شہناز سپر اسٹور۔ جملہ حقوق محفوظ ہیں۔",
    selectLanguage: "زبان منتخب کریں",
    urdu: "اردو",
    english: "English",
    skinEnthusiast: "جلد کی شوقین",
    makeupArtist: "میک اپ آرٹسٹ",
    loyalClient: "وفادار کلائنٹ",
    testimonial1: "شہناز میں انتخاب لاجواب ہے۔ مجھے وہ میڈیکل گریڈ سکن کیئر ملی جو پہلے کراچی میں حاصل کرنا ناممکن تھی۔",
    testimonial2: "ان کی ڈیلیوری سروس بہترین ہے۔ سب کچھ بہترین حالت میں پہنچتا ہے اور پیکیجنگ ہر آرڈر کو تحفہ بنا دیتی ہے۔",
    testimonial3: "آخر کار، مستند بین الاقوامی برانڈز کے لیے ایک قابل اعتماد جگہ۔ ان کا اجزاء کا تجزیہ میری جلد کے لیے کمال ہے۔",
    currency: "PKR / بین الاقوامی",
    filterCategory: "زمرہ فلٹر",
    collections: "کلیکشنز",
    the: "دی",
    editSuffix: "ایڈٹ",
    backToStore: "اسٹور پر واپس جائیں",
    trackOrderTitle: "اپنا آرڈر ٹریک کریں",
    trackOrderContent: "اپنا شہناز آرڈر ٹریک کرنے کے لیے، براہ کرم نیچے اپنا آرڈر نمبر اور ای میل درج کریں۔",
    trackOrderNote: "*نوٹ: تفصیلات اپ ڈیٹ ہونے میں 24 گھنٹے لگ سکتے ہیں۔*",
    orderNumber: "آرڈر نمبر",
    emailAddress: "ای میل ایڈریس",
    trackNow: "ابھی ٹریک کریں",
    shippingReturnsTitle: "شپنگ اور واپسی",
    shippingReturnsContent: "ہم 25,000 روپے سے زائد کے تمام آرڈرز پر مفت شپنگ پیش کرتے ہیں۔ \n\n**معیاری ترسیل:** 3-5 کاروباری دن\n**ایکسپریس ترسیل:** 1-2 کاروباری دن\n\n**واپسی کی پالیسی:** غیر استعمال شدہ اشیاء ترسیل کے بعد 14 دنوں کے اندر واپس کی جا سکتی ہیں۔",
    giftServicesTitle: "تحائف کی سروس",
    giftServicesContent: "ہر شہناز آرڈر ہمارے مخصوص باکس میں پہنچتا ہے۔ ہم خاص مواقع کے لیے ذاتی پیغامات اور تحائف کے سیٹ بھی پیش کرتے ہیں۔",
    contactUsTitle: "ہم سے رابطہ کریں",
    contactUsContent: "ہمارے بیوٹی اسپیشلسٹ پیر سے ہفتہ، صبح 9:00 بجے سے رات 9:00 بجے تک دستیاب ہیں۔\n\n**ای میل:** care@shehnazsuperstore.pk\n**واٹس ایپ:** 03053360595, 03126647750",
    ourStoryTitle: "شہناز کی کہانی",
    ourStoryContent: "سائنسی خوبصورتی کے اصول پر قائم، شہناز سپر اسٹور گزشتہ ایک دہائی سے پاکستان میں لگژری بیوٹی کی اولین منزل رہا ہے۔ ہم صرف دنیا کے معتبر برانڈز سے بہترین فارمولے منتخب کرتے ہیں۔",
    beautyBlogTitle: "بیوٹی بریف",
    beautyBlogContent: "سکن کیئر سائنس، میک اپ کے رجحانات اور خوشبوؤں کے بارے میں ہمارے تازہ ترین مضامین پڑھیں۔ ماہرین کے انٹرویوز سے لے کر روٹین گائیڈز تک، ہم آپ کی خوبصورتی کے سفر میں مدد کرتے ہیں۔",
    storesTitle: "ہمارے اسٹورز",
    storesContent: "**کراچی:** ڈولمین مال کلفٹن، دوسری منزل\n**لاہور:** ایمپوریم مال، گراؤنڈ فلور\n**اسلام آباد:** سینٹورس مال، پہلی منزل",
    privacyPolicyTitle: "رازداری اور سیکیورٹی",
    privacyPolicyContent: "شہناز میں، آپ کی رازداری ہمارے لیے سب سے اہم ہے۔ ہم آپ کی ذاتی معلومات کی حفاظت کے لیے جدید ترین ٹیکنالوجی استعمال کرتے ہیں۔",
    trackOrder: "آرڈر ٹریک کریں",
    shippingReturns: "شپنگ اور واپسی",
    giftServices: "تحائف کی سروس",
    contactUs: "ہم سے رابطہ کریں",
    ourStory: "ہماری کہانی",
    beautyBlog: "بیوٹی بلاگ",
    stores: "اسٹورز",
    privacyPolicy: "پرائیویسی پالیسی"
  }
};

type Language = 'en' | 'ur';
import { products, blogPosts } from './data/products';
import { Product, CartItem } from './types';
import { cn } from './lib/utils';
import ReactMarkdown from 'react-markdown';

// --- Components ---

const Navbar = ({ 
  cartCount, 
  onOpenCart, 
  activeCategory, 
  onSelectCategory,
  t
}: { 
  cartCount: number; 
  onOpenCart: () => void;
  activeCategory: string | null;
  onSelectCategory: (cat: string | null) => void;
  t: (key: keyof typeof translations['en']) => string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-brand-pearl/40 backdrop-blur-xl transition-all duration-700 hover:bg-brand-pearl/80">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center gap-12">
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
              {isOpen ? <X size={20} strokeWidth={1} /> : <Menu size={20} strokeWidth={1} />}
            </button>
            <div className="hidden md:flex gap-10 text-[11px] uppercase tracking-wider font-bold text-brand-charcoal">
              <button 
                onClick={() => onSelectCategory(null)} 
                className={cn(
                  "hover:opacity-60 transition-all duration-500 relative py-2 group",
                  activeCategory === null && "text-brand-charcoal"
                )}
              >
                {t('home')}
                <span className={cn(
                  "absolute bottom-0 left-0 w-0 h-[1px] bg-brand-charcoal transition-all duration-500 group-hover:w-full",
                  activeCategory === null && "w-full"
                )} />
              </button>
              {['Skincare', 'Makeup', 'Haircare', 'Fragrance'].map((cat) => (
                <button 
                  key={cat}
                  onClick={() => onSelectCategory(cat)} 
                  className={cn(
                    "hover:opacity-60 transition-all duration-500 relative py-2 group",
                    activeCategory === cat && "text-brand-charcoal"
                  )}
                >
                  {t(cat.toLowerCase() as any)}
                  <span className={cn(
                    "absolute bottom-0 left-0 w-0 h-[1px] bg-brand-charcoal transition-all duration-500 group-hover:w-full",
                    activeCategory === cat && "w-full"
                  )} />
                </button>
              ))}
            </div>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 cursor-pointer group" onClick={() => onSelectCategory(null)}>
            <h1 className="text-2xl md:text-3xl font-serif tracking-widest text-brand-charcoal transition-all duration-700 group-hover:tracking-widest">
              {t('brand')}
            </h1>
          </div>

          <div className="flex items-center gap-10">
            <button className="hidden md:block group">
              <Search size={18} strokeWidth={1} className="text-brand-charcoal/60 group-hover:text-brand-charcoal transition-colors" />
            </button>
            <button onClick={onOpenCart} className="relative group flex items-center gap-2">
              <span className="hidden md:block text-[10px] uppercase tracking-wider text-brand-charcoal/60 group-hover:text-brand-charcoal transition-all">{t('bag')}</span>
              <ShoppingBag size={18} strokeWidth={1} className="group-hover:text-brand-charcoal transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-brand-charcoal text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
            <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-brand-cream border-b border-brand-charcoal/10 px-8 py-10 flex flex-col gap-8 uppercase tracking-wider text-xs font-bold"
          >
            <button className="text-left" onClick={() => { onSelectCategory(null); setIsOpen(false); }}>{t('home')}</button>
            <button className="text-left" onClick={() => { onSelectCategory('Skincare'); setIsOpen(false); }}>{t('skincare')}</button>
            <button className="text-left" onClick={() => { onSelectCategory('Makeup'); setIsOpen(false); }}>{t('makeup')}</button>
            <button className="text-left" onClick={() => { onSelectCategory('Haircare'); setIsOpen(false); }}>{t('haircare')}</button>
            <button className="text-left" onClick={() => { onSelectCategory('Fragrance'); setIsOpen(false); }}>{t('fragrance')}</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onAction, t }: { onAction: () => void, t: (key: keyof typeof translations['en']) => string }) => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-stone">
    <div className="absolute inset-0 z-0 overflow-hidden">
      <motion.img
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 15, ease: "linear" }}
        src="https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=2000&auto=format&fit=crop"
        alt="Beauty Hero"
        className="w-full h-full object-cover opacity-60 mix-blend-multiply"
        referrerPolicy="no-referrer"
      />
    </div>
    
    <div className="relative z-10 text-center max-w-5xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="block uppercase tracking-widest text-[10px] md:text-[11px] font-medium text-brand-charcoal/40 mb-10">{t('experience')}</span>
        <h2 className="text-[12vw] md:text-[10vw] font-serif leading-[0.85] text-brand-charcoal mb-16 tracking-tighter">
          {t('heroTitleBold')} <br /> <span className="italic">{t('heroTitleItalic')}</span> <br /> {t('heroTitleLast')}
        </h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="flex flex-col items-center gap-12"
        >
          <p className="text-sm md:text-base uppercase tracking-wider text-brand-charcoal/60 max-w-sm leading-loose text-center font-medium">
            {t('heroSubtitle')}
          </p>
          <button 
            onClick={onAction}
            className="group relative flex items-center justify-center w-64 h-16 bg-brand-charcoal text-white text-[10px] uppercase tracking-widest font-bold overflow-hidden transition-all duration-700"
          >
            <span className="relative z-10 group-hover:scale-110 transition-transform duration-700">{t('enterCollection')}</span>
            <div className="absolute inset-0 bg-brand-champagne translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1]" />
          </button>
        </motion.div>
      </motion.div>
    </div>

    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
      <div className="w-px h-24 bg-brand-charcoal" />
    </div>
  </section>
);


const ProductCard = ({ product, onAddToCart, t }: { product: Product; onAddToCart: (p: Product) => void, t: (key: keyof typeof translations['en']) => string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col h-full bg-transparent"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-brand-stone">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        
        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-brand-charcoal/0 group-hover:bg-brand-charcoal/5 transition-colors duration-700" />
        
        {product.isNewArrival && (
          <span className="absolute top-6 left-6 text-[9px] uppercase tracking-widest font-bold text-brand-charcoal mix-blend-difference">
            {t('new')}
          </span>
        )}
        
        <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1]">
          <button
            onClick={() => onAddToCart(product)}
            className="w-full bg-brand-charcoal text-white py-4 text-[10px] uppercase tracking-wider font-bold hover:bg-brand-champagne transition-colors duration-500"
          >
            {t('addToBag')} — Rs. {product.price.toLocaleString()}
          </button>
        </div>
      </div>

      <div className="mt-8 flex flex-col flex-1">
        <div className="flex flex-col gap-2">
          <span className="text-[9px] uppercase tracking-widest text-brand-charcoal/40 font-bold">
            {product.brand}
          </span>
          <h3 className="text-lg font-serif tracking-tight text-brand-charcoal leading-tight group-hover:text-brand-champagne transition-colors duration-500">
            {product.name}
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

const Cart = ({ 
  isOpen, 
  onClose, 
  items, 
  onUpdateQuantity,
  t
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  t: (key: keyof typeof translations['en']) => string;
}) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-charcoal/20 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full max-w-lg bg-brand-pearl z-[70] shadow-2xl flex flex-col font-sans"
          >
            <div className="p-10 md:p-16 border-b border-brand-charcoal/5 flex justify-between items-center">
              <h2 className="text-[11px] uppercase tracking-widest font-bold">{t('yourBag')} ({items.length})</h2>
              <button onClick={onClose} className="hover:rotate-90 transition-transform duration-500"><X size={20} strokeWidth={1} /></button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-10 md:p-16">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center gap-10 text-brand-charcoal/40 italic">
                  <ShoppingBag size={64} strokeWidth={0.5} />
                  <p className="text-xs uppercase tracking-widest">{t('bagEmpty')}</p>
                  <button onClick={onClose} className="text-brand-charcoal border-b border-brand-charcoal text-[10px] tracking-widest uppercase pb-1">{t('beginRitual')}</button>
                </div>
              ) : (
                <div className="flex flex-col gap-12">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-8 group">
                      <div className="w-24 h-32 bg-brand-stone flex-shrink-0 overflow-hidden">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                      </div>
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div>
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="text-[12px] uppercase tracking-wider font-bold max-w-[150px] leading-relaxed">{item.name}</h4>
                            <span className="text-xs font-serif italic">Rs. {item.price.toLocaleString()}</span>
                          </div>
                          <p className="text-[10px] text-brand-charcoal/40 uppercase tracking-widest font-bold">{item.brand}</p>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex border border-brand-charcoal/10 rounded-full px-4 py-1.5 items-center gap-6">
                            <button onClick={() => onUpdateQuantity(item.id, -1)} className="text-sm opacity-40 hover:opacity-100 transition-opacity">-</button>
                            <span className="text-[11px] font-bold">{item.quantity}</span>
                            <button onClick={() => onUpdateQuantity(item.id, 1)} className="text-sm opacity-40 hover:opacity-100 transition-opacity">+</button>
                          </div>
                          <button onClick={() => onUpdateQuantity(item.id, -item.quantity)} className="text-[9px] text-brand-charcoal/40 uppercase tracking-widest hover:text-brand-charcoal transition-colors border-b border-transparent hover:border-brand-charcoal">{t('clearFilters')}</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="p-10 md:p-16 border-t border-brand-charcoal/5 bg-brand-stone/30">
              <div className="flex justify-between items-center mb-10">
                <span className="uppercase tracking-widest text-[11px] text-brand-charcoal/40 font-bold">{t('estimatedTotal')}</span>
                <span className="text-2xl font-serif">Rs. {total.toLocaleString()}</span>
              </div>
              <button 
                disabled={items.length === 0}
                className="w-full bg-brand-charcoal text-white py-6 uppercase tracking-widest text-[11px] font-bold disabled:opacity-20 hover:bg-brand-champagne transition-all duration-700"
              >
                {t('checkout')}
              </button>
              <p className="text-center text-[10px] text-brand-charcoal/30 mt-8 uppercase tracking-widest italic">
                {t('shippingIncluded')}
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const SectionHeader = ({ title, subtitle, t }: { title: string; subtitle: string, t: (key: keyof typeof translations['en']) => string }) => (
  <div className="mb-24 md:mb-32">
    <span className="text-[9px] md:text-[11px] uppercase tracking-widest text-brand-charcoal/30 font-bold mb-6 block text-center md:text-left">{subtitle}</span>
    <h2 className="text-5xl md:text-8xl font-serif font-light text-brand-charcoal text-center md:text-left tracking-tighter leading-[0.9]">{title}</h2>
  </div>
);

// --- App ---

const InfoPage = ({ id, title, content, onBack, t }: { id?: string; title: string; content: string; onBack: () => void, t: (key: keyof typeof translations['en']) => string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="py-32 px-4 md:px-8 max-w-4xl mx-auto min-h-[60vh]"
  >
    <button onClick={onBack} className="text-[10px] uppercase tracking-widest font-bold flex items-center gap-2 mb-12 hover:text-brand-gold transition-colors">
      <ArrowRight size={14} className="rotate-180" /> {t('backToStore')}
    </button>
    <h2 className="text-5xl md:text-7xl font-serif mb-12">{title}</h2>
    <div className="prose prose-sm md:prose-base prose-brand max-w-none font-light text-brand-charcoal/80 leading-relaxed space-y-6">
      <ReactMarkdown>{content}</ReactMarkdown>
      
      {id === 'Track Order' && (
        <div className="mt-12 py-12 border-y border-brand-charcoal/10 flex flex-col gap-8 not-prose">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-3">
              <label className="text-[10px] uppercase tracking-widest font-bold text-brand-charcoal/60">{t('orderNumber')}</label>
              <input 
                type="text" 
                placeholder="SH-000000"
                className="bg-white border border-brand-charcoal/10 px-6 py-4 text-sm focus:outline-none focus:border-brand-gold transition-colors"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-[10px] uppercase tracking-widest font-bold text-brand-charcoal/60">{t('emailAddress')}</label>
              <input 
                type="email" 
                placeholder="email@example.com"
                className="bg-white border border-brand-charcoal/10 px-6 py-4 text-sm focus:outline-none focus:border-brand-gold transition-colors"
              />
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-brand-charcoal text-white text-[10px] uppercase tracking-[0.3em] font-bold py-5 px-10 self-start"
          >
            {t('trackNow')}
          </motion.button>
        </div>
      )}

      {id === 'Track Order' && (
        <div className="mt-8">
          <ReactMarkdown>{t('trackOrderNote')}</ReactMarkdown>
        </div>
      )}
    </div>
  </motion.div>
);

const FOOTER_LINKS_CONCIERGE = [
  { id: 'Track Order', label: 'trackOrder', titleKey: 'trackOrderTitle', contentKey: 'trackOrderContent' },
  { id: 'Shipping & Returns', label: 'shippingReturns', titleKey: 'shippingReturnsTitle', contentKey: 'shippingReturnsContent' },
  { id: 'Gift Services', label: 'giftServices', titleKey: 'giftServicesTitle', contentKey: 'giftServicesContent' },
  { id: 'Contact Us', label: 'contactUs', titleKey: 'contactUsTitle', contentKey: 'contactUsContent' },
];

const FOOTER_LINKS_ARCHIVE = [
  { id: 'Our Story', label: 'ourStory', titleKey: 'ourStoryTitle', contentKey: 'ourStoryContent' },
  { id: 'Beauty Blog', label: 'beautyBlog', titleKey: 'beautyBlogTitle', contentKey: 'beautyBlogContent' },
  { id: 'Stores', label: 'stores', titleKey: 'storesTitle', contentKey: 'storesContent' },
  { id: 'Privacy Policy', label: 'privacyPolicy', titleKey: 'privacyPolicyTitle', contentKey: 'privacyPolicyContent' },
];

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activeInfoPage, setActiveInfoPage] = useState<string | null>(null);
  const [showLangMenu, setShowLangMenu] = useState(false);

  const t = useMemo(() => (key: keyof typeof translations['en']) => (translations[lang] as any)[key] || (translations['en'] as any)[key] || key, [lang]);

  const productRef = React.useRef<HTMLDivElement>(null);

  const handleSelectCategory = (cat: string | null) => {
    setSelectedCategory(cat);
    setActiveInfoPage(null);
    // Add a slight delay to ensure the state update renders before scrolling
    setTimeout(() => {
      productRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }, 100);
  };

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(0, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const analyzeIngredients = async (product: Product) => {
    setIsAnalyzing(true);
    setAnalysis(null);
    try {
      const response = await fetch('/api/analyze-ingredients', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ingredients: product.ingredients, productName: product.name }),
      });
      const data = await response.json();
      setAnalysis(data.analysis);
    } catch (err) {
      console.error(err);
      setAnalysis("Consult our beauty experts for detailed ingredient consultation.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const filteredProducts = selectedCategory 
    ? products.filter(p => p.category === selectedCategory) 
    : products.filter(p => p.isBestseller);

  const currentInfoPage = useMemo(() => {
    if (!activeInfoPage) return null;
    const allLinks = [...FOOTER_LINKS_CONCIERGE, ...FOOTER_LINKS_ARCHIVE];
    return allLinks.find(link => link.id === activeInfoPage);
  }, [activeInfoPage]);

  return (
    <div className={cn("min-h-screen bg-brand-cream selection:bg-brand-gold/30", lang === 'ur' ? 'font-sans' : 'font-sans')} dir={lang === 'ur' ? 'rtl' : 'ltr'}>
      <Navbar 
        cartCount={cartItems.reduce((s, i) => s + i.quantity, 0)} 
        onOpenCart={() => setIsCartOpen(true)} 
        activeCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
        t={t}
      />
         <main className="pt-20">
        <AnimatePresence mode="wait">
          {currentInfoPage ? (
            <InfoPage 
              key="info"
              id={activeInfoPage}
              title={t(currentInfoPage.titleKey as any)}
              content={t(currentInfoPage.contentKey as any)}
              onBack={() => setActiveInfoPage(null)}
              t={t}
            />
          ) : (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {!selectedCategory && <Hero onAction={() => handleSelectCategory('Skincare')} t={t} />}
              
              {/* Navigation Categories / Bento Grid */}
              <section className={cn("py-32 px-6 md:px-12 max-w-[1800px] mx-auto transition-all duration-700", selectedCategory && "opacity-0 invisible h-0 py-0 overflow-hidden")}>
                <div className="flex flex-col md:flex-row justify-between items-end mb-24">
                  <div className="max-w-xl">
                    <span className="text-[11px] uppercase tracking-widest text-brand-charcoal/40 font-bold mb-6 block">{t('curation')}</span>
                    <h2 className="text-4xl md:text-7xl font-serif text-brand-charcoal leading-[1.1]">{t('excellenceBold')} <br /> <span className="italic">{t('excellenceItalic')}</span></h2>
                  </div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-brand-charcoal/60 mt-8 md:mt-0">{t('categoryDiscover')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-[120vh]">
                  {[
                    { name: 'Skincare', image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=800&auto=format&fit=crop', id: 'Skincare', span: 'md:col-span-4' },
                    { name: 'Makeup', image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop', id: 'Makeup', span: 'md:col-span-8' },
                    { name: 'Haircare', image: 'https://images.unsplash.com/photo-1522337360710-c038469c6a7d?q=80&w=800&auto=format&fit=crop', id: 'Haircare', span: 'md:col-span-7' },
                    { name: 'Fragrance', image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop', id: 'Fragrance', span: 'md:col-span-5' },
                  ].map((cat) => (
                    <motion.div
                      key={cat.id}
                      onClick={() => handleSelectCategory(cat.id)}
                      className={cn(
                        "relative group cursor-pointer overflow-hidden bg-brand-stone",
                        cat.span
                      )}
                    >
                      <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-all duration-[2s] ease-out group-hover:scale-110" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-brand-charcoal/10 group-hover:bg-brand-charcoal/0 transition-all duration-1000" />
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-1000">
                        <span className="text-[11px] font-bold uppercase tracking-widest mb-4">{t('explore')}</span>
                        <h3 className="text-5xl font-serif">{t(cat.name.toLowerCase() as any)}</h3>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Dynamic Product Grid */}
              <section ref={productRef} className="py-32 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-px bg-brand-champagne" />
                        <span className="text-[10px] md:text-[11px] uppercase tracking-widest text-brand-champagne font-bold">
                          {selectedCategory ? `${t('filterCategory')}: ${t(selectedCategory.toLowerCase() as any)}` : t('collections')}
                        </span>
                      </div>
                      <h2 className="text-5xl md:text-7xl font-serif font-light leading-tight">
                        {selectedCategory ? <span>{t('the')} <span className="italic">{t(selectedCategory.toLowerCase() as any)}</span> {t('editSuffix')}</span> : t('bestsellers')}
                      </h2>
                    </div>
                    
                    {selectedCategory && (
                      <motion.button 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        onClick={() => setSelectedCategory(null)}
                        className="group flex items-center gap-4 text-xs uppercase tracking-widest font-bold bg-brand-cream px-8 py-4 border border-brand-charcoal/10 hover:bg-brand-charcoal hover:text-white transition-all duration-500"
                      >
                        <X size={14} className="group-hover:rotate-90 transition-transform" />
                        {t('clearFilters')}
                      </motion.button>
                    )}
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div 
                      key={selectedCategory || 'all'}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16"
                    >
                      {filteredProducts.length > 0 ? (
                        filteredProducts.map(product => (
                          <ProductCard key={product.id} product={product} onAddToCart={addToCart} t={t} />
                        ))
                      ) : (
                        <div className="col-span-full py-40 text-center flex flex-col items-center gap-6">
                          <div className="w-16 h-px bg-brand-charcoal/20" />
                          <p className="font-serif italic text-2xl text-brand-charcoal/40">{t('comingSoon')}</p>
                          <button onClick={() => setSelectedCategory(null)} className="text-[10px] font-bold uppercase tracking-widest underline decoration-brand-champagne underline-offset-8">{t('clearFilters')}</button>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </section>

              {/* Trust Features Bar */}
              <section className="py-40 px-6 md:px-12 bg-white">
                <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-24 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-brand-charcoal/5">
                  <div className="flex flex-col items-center md:items-start text-center md:text-left gap-10 group px-12 first:pl-0">
                    <div className="text-brand-charcoal group-hover:scale-110 transition-transform duration-700">
                      <ShieldCheck size={48} strokeWidth={0.5} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif mb-4 tracking-tight">{t('authenticity')}</h3>
                      <p className="text-[10px] font-bold text-brand-charcoal/40 leading-loose uppercase tracking-widest max-w-xs transition-all">
                        {t('authenticityDesc')}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center md:items-start text-center md:text-left gap-10 group px-12 pt-12 md:pt-0">
                    <div className="text-brand-charcoal group-hover:scale-110 transition-transform duration-700">
                      <Truck size={48} strokeWidth={0.5} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif mb-4 tracking-tight">{t('logistics')}</h3>
                      <p className="text-[10px] font-bold text-brand-charcoal/40 leading-loose uppercase tracking-widest max-w-xs transition-all">
                        {t('logisticsDesc')}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center md:items-start text-center md:text-left gap-10 group px-12 pt-12 md:pt-0">
                    <div className="text-brand-charcoal group-hover:scale-110 transition-transform duration-700">
                      <Zap size={48} strokeWidth={0.5} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif mb-4 tracking-tight">{t('ethical')}</h3>
                      <p className="text-[10px] font-bold text-brand-charcoal/40 leading-loose uppercase tracking-widest max-w-xs transition-all">
                        {t('ethicalDesc')}
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Blog / Routine Tips */}
              <section className="py-24 max-w-7xl mx-auto px-4 md:px-8">
                <SectionHeader title="The Beauty Brief" subtitle="Routine & Rituals" t={t} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {blogPosts.map(post => (
                    <div key={post.id} className="group cursor-pointer" onClick={() => setActiveInfoPage('Beauty Blog')}>
                      <div className="aspect-[16/9] overflow-hidden mb-6">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                      </div>
                      <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold mb-2 block">{post.category}</span>
                      <h3 className="text-3xl font-light mb-4 group-hover:text-brand-gold transition-colors">{post.title}</h3>
                      <p className="text-sm font-light text-brand-charcoal/60 mb-6">{post.excerpt}</p>
                      <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold">
                        Read Article <ArrowRight size={14} />
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Detailed Ingredient Transparency Feature */}
              <section className="py-24 bg-brand-charcoal/5">
                <div className="max-w-3xl mx-auto px-4 text-center">
                  <SectionHeader title="Ingredient IQ" subtitle="Full Transparency" t={t} />
                  <p className="text-lg font-light mb-12">
                    Curious about what goes into your skincare? Select a product to see a deep dive analysis of its active components.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {products.map(p => (
                      <button
                        key={p.id}
                        onClick={() => {
                          setSelectedProduct(p);
                          analyzeIngredients(p);
                        }}
                        className={cn(
                          "px-6 py-2 border border-brand-charcoal/20 text-xs uppercase tracking-widest transition-all",
                          selectedProduct?.id === p.id ? "bg-brand-charcoal text-white" : "hover:border-brand-charcoal"
                        )}
                      >
                        {p.name}
                      </button>
                    ))}
                  </div>
                  
                  <motion.div
                    initial={false}
                    animate={{ height: selectedProduct ? 'auto' : 0, opacity: selectedProduct ? 1 : 0 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-white p-8 md:p-12 text-left border border-brand-charcoal/5 shadow-xl">
                      {isAnalyzing ? (
                        <div className="flex flex-col items-center gap-4 py-8">
                          <div className="w-12 h-12 border-2 border-brand-champagne border-t-transparent rounded-full animate-spin" />
                          <p className="text-sm italic animate-pulse">{t('analyzeIngredients')}</p>
                        </div>
                      ) : (
                        <div className="prose prose-brand max-w-none prose-sm">
                          <ReactMarkdown>
                            {analysis || t('selectProduct')}
                          </ReactMarkdown>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              </section>

              {/* Customer Testimonials */}
              <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                  <div className="text-center mb-20">
                    <span className="text-[10px] md:text-[11px] uppercase tracking-widest text-brand-champagne font-bold mb-4 block">{t('testimonials')}</span>
                    <h2 className="text-4xl md:text-6xl font-serif font-light">{t('clientExperiences')}</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                      { name: lang === 'ur' ? "عائشہ خان" : "Ayesha Khan", role: t('skinEnthusiast'), text: t('testimonial1') },
                      { name: lang === 'ur' ? "زینب ملک" : "Zainab Malik", role: t('makeupArtist'), text: t('testimonial2') },
                      { name: lang === 'ur' ? "ثانیہ احمد" : "Sania Ahmed", role: t('loyalClient'), text: t('testimonial3') }
                    ].map((review, i) => (
                      <div key={i} className="flex flex-col bg-brand-stone/30 p-10 relative group">
                        <div className="flex text-brand-champagne mb-6">
                          {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
                        </div>
                        <p className="text-lg font-light italic mb-8 flex-1 leading-relaxed text-brand-charcoal/80">"{review.text}"</p>
                        <div>
                          <p className="font-serif font-bold text-lg">{review.name}</p>
                          <p className="text-[10px] md:text-[11px] uppercase tracking-widest text-brand-champagne font-bold mt-1">{review.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="bg-brand-charcoal text-brand-pearl py-40 px-6 md:px-12 overflow-hidden">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-24 mb-40">
            <div className="max-w-md">
              <h2 className="text-4xl md:text-6xl font-serif tracking-widest mb-12">{t('brand')}</h2>
              <p className="text-[11px] uppercase tracking-wider text-brand-pearl/40 leading-loose mb-12">
                {t('footerDesc')}
              </p>
              <div className="flex gap-10">
                <Instagram size={18} strokeWidth={1} className="hover:text-brand-champagne cursor-pointer transition-colors" />
                <Facebook size={18} strokeWidth={1} className="hover:text-brand-champagne cursor-pointer transition-colors" />
                <Twitter size={18} strokeWidth={1} className="hover:text-brand-champagne cursor-pointer transition-colors" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-16 md:gap-32 leading-loose">
              <div>
                <h4 className="text-[10px] md:text-[11px] uppercase tracking-widest font-bold mb-10 text-brand-pearl/20 italic">{t('concierge')}</h4>
                <ul className="flex flex-col gap-6 text-[10px] md:text-[11px] uppercase tracking-wider text-brand-pearl/60 font-bold">
                  {FOOTER_LINKS_CONCIERGE.map(link => (
                    <li key={link.id} onClick={() => { setActiveInfoPage(link.id); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-brand-pearl cursor-pointer transition-all hover:translate-x-2">{t(link.label as any)}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-[10px] md:text-[11px] uppercase tracking-widest font-bold mb-10 text-brand-pearl/20 italic">{t('archive')}</h4>
                <ul className="flex flex-col gap-6 text-[10px] md:text-[11px] uppercase tracking-wider text-brand-pearl/60 font-bold">
                  {FOOTER_LINKS_ARCHIVE.map(link => (
                    <li key={link.id} onClick={() => { setActiveInfoPage(link.id); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-brand-pearl cursor-pointer transition-all hover:translate-x-2">{t(link.label as any)}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 pt-12 border-t border-white/10 text-[11px] uppercase tracking-wider text-brand-pearl/20 font-bold">
            <p>{t('rightsReserved')}</p>
            <div className="flex gap-16 relative">
              <div className="relative">
                <button 
                  onClick={() => setShowLangMenu(!showLangMenu)}
                  className="hover:text-brand-pearl cursor-pointer transition-colors flex items-center gap-2"
                >
                  {t('selectLanguage')} <ChevronDown size={14} className={cn("transition-transform duration-500", showLangMenu && "rotate-180")} />
                </button>
                <AnimatePresence>
                  {showLangMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute bottom-full mb-4 left-0 bg-brand-pearl text-brand-charcoal p-4 rounded-lg shadow-2xl flex flex-col gap-4 min-w-[150px] z-50 overflow-hidden"
                    >
                      <button 
                        onClick={() => { setLang('en'); setShowLangMenu(false); }}
                        className={cn("text-[10px] uppercase tracking-widest font-bold hover:text-brand-champagne transition-colors py-2 text-left px-2", lang === 'en' && "text-brand-champagne bg-brand-charcoal/5")}
                      >
                        {t('english')}
                      </button>
                      <button 
                        onClick={() => { setLang('ur'); setShowLangMenu(false); }}
                        className={cn("text-[10px] uppercase tracking-widest font-bold hover:text-brand-champagne transition-colors py-2 text-left px-2", lang === 'ur' && "text-brand-champagne bg-brand-charcoal/5")}
                      >
                        {t('urdu')}
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        t={t}
      />
    </div>
  );
}

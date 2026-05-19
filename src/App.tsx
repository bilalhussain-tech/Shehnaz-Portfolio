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
    brand: "Shehnaz",
    bag: "Cart",
    search: "Search Shehnaz",
    categories: "CATEGORIES",
    account: "Account",
    wishlist: "Wishlist",
    viewAll: "View All",
    addToCart: "Add to Cart",
    new: "NEW",
    off: "% OFF",
    trackNow: "Track Now",
    orderNumber: "Order Number",
    emailAddress: "Email Address",
    trackOrderNote: "*Note: Tracking information may take up to 24 hours to update after dispatch.*",
    trackOrder: "Track Order",
    contactUs: "Contact Us",
    ourStory: "Our Story",
    beautyBlog: "Beauty Blog",
    privacyPolicy: "Privacy Policy",
    rightsReserved: "© 2024 Shehnaz. All Rights Reserved.",
    currency: "Rs.",
    price: "Price",
    total: "Total",
    checkout: "Checkout",
    bagEmpty: "Your cart is empty",
    // Info Page Contents
    trackOrderTitle: "Track Your Order",
    trackOrderContent: "To track your Shehnaz shipment, please enter your order number and email address below.",
    shippingReturns: "Shipping & Returns",
    shippingReturnsTitle: "Shipping & Returns Policy",
    shippingReturnsContent: "We offer flat-rate shipping across Pakistan. Returns are accepted within 7 days of delivery if the product is unused and in original packaging.",
    giftServices: "Gift Services",
    giftServicesTitle: "Premium Gift Wrapping",
    giftServicesContent: "Make your gifts extra special with our premium packaging and personalized notes service.",
    contactUsTitle: "Support Center",
    contactUsContent: "Our customer service team is here to help you. Reach out via WhatsApp or Email.",
    ourStoryTitle: "Our Journey",
    ourStoryContent: "Shehnaz has been Pakistan's premier destination for luxury beauty for over a decade, bringing the best authentic products from around the world.",
    beautyBlogTitle: "Beauty Insights",
    beautyBlogContent: "Discover the latest trends in skincare, makeup, and lifestyle curated by our experts.",
    stores: "Our Stores",
    storesTitle: "Shehnaz Superstore Locations",
    storesContent: "Visit our flagship stores in Karachi, Lahore and Islamabad for an immersive shopping experience.",
    privacyPolicyTitle: "Privacy & Data Protection",
    privacyPolicyContent: "Your data security is our priority. We handle your information with the utmost care and respect.",
  },
  ur: {
    home: "ہوم",
    skincare: "سکن کیئر",
    makeup: "میک اپ",
    haircare: "ہیئر کیئر",
    fragrance: "خوشبو",
    brand: "شہناز",
    bag: "کارٹ",
    search: "شہناز تلاش کریں",
    categories: "زمرہ جات",
    account: "اکاؤنٹ",
    wishlist: "وش لسٹ",
    viewAll: "سب دیکھیں",
    addToCart: "کارٹ میں شامل کریں",
    new: "نیا",
    off: "فیصد رعایت",
    trackNow: "ٹریک کریں",
    orderNumber: "آرڈر نمبر",
    emailAddress: "ای میل پتہ",
    trackOrderNote: "*نوٹ: ڈسپچ کے بعد ٹریکنگ معلومات اپ ڈیٹ ہونے میں 24 گھنٹے تک لگ سکتے ہیں۔*",
    trackOrder: "آرڈر ٹریک کریں",
    contactUs: "ہم سے رابطہ کریں",
    ourStory: "ہماری کہانی",
    beautyBlog: "بیوٹی بلاگ",
    privacyPolicy: "پرائیویسی پالیسی",
    rightsReserved: "© 2024 شہناز۔ جملہ حقوق محفوظ ہیں۔",
    currency: "روپے",
    price: "قیمت",
    total: "کل رقم",
    checkout: "چیک آؤٹ",
    bagEmpty: "آپ کا کارٹ خالی ہے",
    trackOrderTitle: "اپنا آرڈر ٹریک کریں",
    trackOrderContent: "اپنی شہناز کھیپ کو ٹریک کرنے کے لئے، براہ کرم نیچے اپنا آرڈر نمبر اور ای میل درج کریں۔",
    shippingReturns: "شپنگ اور واپسی",
    shippingReturnsTitle: "شپنگ اور واپسی کی پالیسی",
    shippingReturnsContent: "ہم پورے پاکستان میں فلیٹ ریٹ شپنگ فراہم کرتے ہیں۔",
    giftServices: "گفٹ سروسز",
    giftServicesTitle: "پریمیم گفٹ ریپنگ",
    giftServicesContent: "ہمارے پریمیم پیکیجنگ کے ساتھ اپنے تحائف کو مزید خاص بنائیں۔",
    contactUsTitle: "سپورٹ سینٹر",
    contactUsContent: "ہماری کسٹمر سروس ٹیم آپ کی مدد کے لیے حاضر ہے۔",
    ourStoryTitle: "ہمارا سفر",
    ourStoryContent: "شہناز گزشتہ ایک دہائی سے پاکستان میں لگژری بیوٹی کی اولین منزل رہا ہے۔",
    beautyBlogTitle: "بیوٹی بلاگ",
    beautyBlogContent: "سکن کیئر اور میک اپ میں تازہ ترین رجحانات دریافت کریں۔",
    stores: "ہمارے اسٹورز",
    storesTitle: "شہناز اسٹور کی فہرست",
    storesContent: "بہترین خریداری کے تجربے کے لئے ہمارے اسٹورز کا دورہ کریں۔",
    privacyPolicyTitle: "پرائیویسی پالیسی",
    privacyPolicyContent: "آپ کے ڈیٹا کی حفاظت ہماری ترجیح ہے۔",
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
  onSelectCategory,
  t
}: { 
  cartCount: number; 
  onOpenCart: () => void;
  onSelectCategory: (cat: string | null) => void;
  t: (key: keyof typeof translations['en']) => string;
}) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-brand-maroon shadow-lg">
      <div className="max-w-[1400px] mx-auto">
        {/* Top Bar */}
        <div className="flex justify-between items-center h-16 md:h-20 px-4 md:px-6">
          {/* Logo */}
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => onSelectCategory(null)}>
            <div className="text-white font-black text-2xl md:text-3xl italic tracking-tighter">
              {t('brand')}<span className="text-sm not-italic ml-1">.pk</span>
            </div>
          </div>

          {/* Search Bar - Hidden on small, shown on md+ */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-12">
            <div className="relative w-full flex">
              <button className="bg-brand-charcoal text-white px-6 flex items-center gap-2 text-xs font-bold rounded-l-md active:bg-black transition-colors">
                <Menu size={16} />
                {t('categories')}
                <ChevronDown size={14} />
              </button>
              <input 
                type="text" 
                placeholder={t('search')}
                className="w-full bg-white px-6 h-12 text-sm focus:outline-none"
              />
              <button className="bg-white border-l border-brand-light px-4 text-brand-charcoal rounded-r-md">
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* Nav Icons */}
          <div className="flex items-center gap-4 md:gap-8 text-white">
            <button className="flex flex-col items-center hover:opacity-80 transition-opacity">
              <Menu className="md:hidden" size={24} />
              <div className="hidden md:flex flex-col items-center">
                <span className="text-[10px] font-bold uppercase">{t('account')}</span>
                <span className="text-[9px] opacity-70">Hello, Sign In</span>
              </div>
            </button>
            <button className="hidden md:flex flex-col items-center hover:opacity-80 transition-opacity">
              <Heart size={20} />
              <span className="text-[10px] font-bold uppercase">{t('wishlist')}</span>
              <span className="text-[9px] opacity-70">0 item</span>
            </button>
            <button 
              onClick={onOpenCart}
              className="flex items-center gap-2 md:gap-3 bg-brand-charcoal/20 px-3 py-2 rounded-md hover:bg-brand-charcoal/30 transition-colors relative"
            >
              <div className="relative">
                <ShoppingBag size={24} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-white text-brand-maroon text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
              <div className="hidden md:flex flex-col items-start leading-none">
                <span className="text-[10px] font-bold uppercase">{t('bag')}</span>
                <span className="text-[9px] opacity-70">0 item</span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden px-4 pb-4">
          <div className="relative flex">
            <input 
              type="text" 
              placeholder={t('search')}
              className="w-full bg-white px-4 h-10 text-sm rounded-md focus:outline-none"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-brand-charcoal">
              <Search size={18} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Banners = () => (
  <section className="px-4 md:px-6 pt-4 max-w-[1400px] mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="md:col-span-2 overflow-hidden rounded-xl h-64 md:h-80 relative group cursor-pointer">
        <img 
          src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1000&q=80" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          alt="Banner 1" 
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
        <div className="absolute bottom-10 left-10 text-white">
          <h3 className="text-3xl font-black italic tracking-tighter">FLAT 15% OFF</h3>
          <p className="text-xs font-bold uppercase tracking-widest mt-2">Shop Now</p>
        </div>
      </div>
      <div className="overflow-hidden rounded-xl h-64 md:h-80 relative group cursor-pointer">
        <img 
          src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          alt="Banner 2" 
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
        <div className="absolute top-10 left-10 text-white">
          <h3 className="text-2xl font-black italic tracking-tighter">UPTO 35% OFF</h3>
        </div>
      </div>
      <div className="overflow-hidden rounded-xl h-64 md:h-80 relative group cursor-pointer">
        <img 
          src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1000&q=80" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          alt="Banner 3" 
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
        <div className="absolute bottom-10 right-10 text-white text-right">
          <h3 className="text-2xl font-black italic tracking-tighter">UPTO 50% OFF</h3>
        </div>
      </div>
    </div>
  </section>
);

const RetailProductCard = ({ product, onAddToCart, t }: { product: Product; onAddToCart: (p: Product) => void, t: (key: keyof typeof translations['en']) => string }) => {
  const discount = Math.floor(Math.random() * 20) + 5; // Simulating a discount
  const originalPrice = Math.floor(product.price * (1 + discount / 100));

  return (
    <div className="bg-white rounded-lg p-4 flex flex-col group relative hover:shadow-xl transition-shadow border border-transparent hover:border-brand-maroon/10 h-full">
      {/* Off Tag */}
      <div className="absolute top-3 left-3 z-10 bg-brand-maroon text-white text-[10px] font-black px-2 py-1 rounded">
        {discount}{t('off')}
      </div>

      <div className="aspect-square mb-4 relative overflow-hidden rounded-md">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <button 
          onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}
          className="absolute bottom-3 right-3 bg-brand-maroon text-white p-2 rounded-full shadow-lg translate-y-12 group-hover:translate-y-0 transition-transform duration-300"
        >
          <ShoppingBag size={18} />
        </button>
      </div>

      <div className="flex flex-col flex-1">
        <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">{product.brand}</p>
        <h3 className="text-xs md:text-sm font-medium line-clamp-2 mb-3 text-gray-800 h-10">
          {product.name}
        </h3>
        
        <div className="mt-auto">
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={10} fill={i < Math.floor(product.rating) ? "#ffc107" : "none"} stroke={i < Math.floor(product.rating) ? "#ffc107" : "#e0e0e0"} />
            ))}
            <span className="text-[10px] text-gray-400">({product.reviewsCount})</span>
          </div>
          
          <div className="flex items-baseline gap-2">
            <span className="text-sm md:text-lg font-black text-brand-maroon">Rs. {product.price.toLocaleString()}</span>
            <span className="text-[10px] md:text-xs text-gray-400 line-through">Rs. {originalPrice.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductSection = ({ title, products, onAddToCart, t }: { title: string, products: Product[], onAddToCart: (p: Product) => void, t: any }) => (
  <section className="py-8 px-4 md:px-6 max-w-[1400px] mx-auto">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl md:text-2xl font-black text-gray-800">{title}</h2>
      <button className="bg-brand-maroon text-white text-[10px] font-bold px-4 py-2 rounded-md hover:bg-brand-maroon/90 transition-colors uppercase tracking-wider">
        {t('viewAll')}
      </button>
    </div>
    <div className="bg-white rounded-2xl overflow-hidden p-4 md:p-8 shadow-sm">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8">
        {products.map(product => (
          <RetailProductCard key={product.id} product={product} onAddToCart={onAddToCart} t={t} />
        ))}
      </div>
    </div>
  </section>
);

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
            className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm"
          />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-6 md:p-8 border-b flex justify-between items-center bg-brand-maroon text-white">
              <h2 className="text-xl font-black italic tracking-tighter uppercase">{t('bag')}</h2>
              <button onClick={onClose} className="hover:rotate-90 transition-transform">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-gray-400 gap-4">
                  <ShoppingBag size={64} strokeWidth={0.5} />
                  <p className="text-sm font-bold uppercase tracking-widest">{t('bagEmpty')}</p>
                </div>
              ) : (
                items.map(item => (
                  <div key={item.id} className="flex gap-4 group">
                    <div className="w-20 h-24 bg-gray-100 rounded-md overflow-hidden relative">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-gray-800 line-clamp-1">{item.name}</h4>
                      <p className="text-[10px] text-gray-400 uppercase font-bold mb-2">Rs. {item.price.toLocaleString()}</p>
                      <div className="flex items-center gap-3">
                        <button onClick={() => onUpdateQuantity(item.id, -1)} className="w-6 h-6 border flex items-center justify-center rounded-full hover:bg-brand-maroon hover:text-white transition-colors">-</button>
                        <span className="text-xs font-bold w-6 text-center">{item.quantity}</span>
                        <button onClick={() => onUpdateQuantity(item.id, 1)} className="w-6 h-6 border flex items-center justify-center rounded-full hover:bg-brand-maroon hover:text-white transition-colors">+</button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-black">Rs. {(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="p-8 border-t bg-gray-50">
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-black uppercase text-gray-500">{t('total')}</span>
                <span className="text-2xl font-black text-brand-maroon text-right">Rs. {total.toLocaleString()}</span>
              </div>
              <button 
                disabled={items.length === 0}
                className="w-full bg-brand-maroon text-white py-5 rounded-lg text-sm font-black uppercase tracking-wider disabled:opacity-50 hover:bg-brand-maroon/90 transition-colors shadow-lg shadow-brand-maroon/20"
              >
                {t('checkout')}
              </button>
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
    className="py-12 px-4 md:px-8 max-w-4xl mx-auto min-h-[60vh]"
  >
    <button onClick={onBack} className="text-xs font-bold flex items-center gap-2 mb-10 text-gray-500 hover:text-brand-maroon transition-colors">
      <ArrowRight size={14} className="rotate-180" /> Back to Store
    </button>
    <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-8 uppercase tracking-tighter italic">{title}</h2>
    <div className="prose prose-sm md:prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
      <ReactMarkdown>{content}</ReactMarkdown>
      
      {id === 'Track Order' && (
        <div className="mt-12 py-10 px-8 bg-white rounded-2xl shadow-lg border border-brand-light flex flex-col gap-6 not-prose">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-black uppercase text-gray-400">{t('orderNumber')}</label>
              <input 
                type="text" 
                placeholder="NH-000000"
                className="bg-gray-50 border border-gray-200 px-6 py-4 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-maroon/10 focus:border-brand-maroon transition-all"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-black uppercase text-gray-400">{t('emailAddress')}</label>
              <input 
                type="email" 
                placeholder="email@example.com"
                className="bg-gray-50 border border-gray-200 px-6 py-4 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-maroon/10 focus:border-brand-maroon transition-all"
              />
            </div>
          </div>
          <button
            className="bg-brand-maroon text-white text-xs font-black uppercase tracking-widest py-5 px-10 rounded-xl hover:bg-brand-maroon/90 transition-colors shadow-lg shadow-brand-maroon/20 self-start"
          >
            {t('trackNow')}
          </button>
        </div>
      )}

      {id === 'Track Order' && (
        <div className="mt-8 text-xs font-bold text-gray-400 italic">
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
    <div className="min-h-screen bg-[#f0f2f5] font-sans selection:bg-brand-maroon selection:text-white" dir={lang === 'ur' ? 'rtl' : 'ltr'}>
      <Navbar 
        cartCount={cartItems.reduce((s, i) => s + i.quantity, 0)} 
        onOpenCart={() => setIsCartOpen(true)} 
        onSelectCategory={handleSelectCategory}
        t={t}
      />

      <main className="pt-24 md:pt-32 pb-20">
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
              {/* Banners */}
              <Banners />

              {/* Product Sections */}
              <ProductSection 
                title="Skincare Bestsellers" 
                products={products.filter(p => p.category === 'Skincare').slice(0, 6)}
                onAddToCart={addToCart}
                t={t}
              />

              <ProductSection 
                title="Makeup Must-Haves" 
                products={products.filter(p => p.category === 'Makeup').slice(0, 6)}
                onAddToCart={addToCart}
                t={t}
              />

              <ProductSection 
                title="Fragrance Secrets" 
                products={products.filter(p => p.category === 'Fragrance').slice(0, 6)}
                onAddToCart={addToCart}
                t={t}
              />

              {/* Trust Bar */}
              <section className="bg-white py-12 px-6 max-w-[1400px] mx-auto rounded-2xl shadow-sm grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="flex flex-col items-center text-center gap-4">
                  <ShieldCheck size={32} className="text-brand-maroon" />
                  <div>
                    <h3 className="text-sm font-bold">100% Authentic</h3>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Direct provenance</p>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center gap-4">
                  <Truck size={32} className="text-brand-maroon" />
                  <div>
                    <h3 className="text-sm font-bold">Fast Delivery</h3>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Across Pakistan</p>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center gap-4">
                  <Zap size={32} className="text-brand-maroon" />
                  <div>
                    <h3 className="text-sm font-bold">Secure Payment</h3>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Encrypted checkout</p>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center gap-4">
                  <Menu size={32} className="text-brand-maroon" />
                  <div>
                    <h3 className="text-sm font-bold">Huge Selection</h3>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Premium brands</p>
                  </div>
                </div>
              </section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cartItems} 
        onUpdateQuantity={updateQuantity}
        t={t}
      />

      {/* Footer */}
      <footer className="bg-gray-900 pt-20 pb-10 text-white">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-black italic tracking-tighter mb-6">{t('brand')}<span className="text-sm not-italic ml-1">.pk</span></h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Shehnaz is Pakistan's premier online shopping destination, providing the most authentic and diverse range of products.
            </p>
            <div className="flex gap-4">
              <Instagram className="w-5 h-5 cursor-pointer hover:text-brand-maroon transition-colors" />
              <Facebook className="w-5 h-5 cursor-pointer hover:text-brand-maroon transition-colors" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-brand-maroon transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest mb-10 text-brand-maroon italic">Support</h4>
            <ul className="flex flex-col gap-6 text-xs text-gray-400 font-bold">
              {FOOTER_LINKS_CONCIERGE.map(link => (
                <li key={link.id} onClick={() => { setActiveInfoPage(link.id); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white cursor-pointer transition-all">{t(link.label as any)}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-widest mb-10 text-brand-maroon italic">Exploration</h4>
            <ul className="flex flex-col gap-6 text-xs text-gray-400 font-bold">
              {FOOTER_LINKS_ARCHIVE.map(link => (
                <li key={link.id} onClick={() => { setActiveInfoPage(link.id); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white cursor-pointer transition-all">{t(link.label as any)}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-widest mb-10 text-brand-maroon italic">{t('contactUs')}</h4>
            <div className="space-y-6">
              <div className="flex flex-col gap-1">
                <span className="text-gray-500 font-black uppercase tracking-tighter text-[10px]">Email</span>
                <span className="text-xs font-bold">care@shehnazsuperstore.pk</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-gray-500 font-black uppercase tracking-tighter text-[10px]">WhatsApp</span>
                <span className="text-xs font-bold leading-relaxed">03053360595, 03126647750</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 px-6 max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold font-mono">
            {t('rightsReserved')}
          </p>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setLang(lang === 'en' ? 'ur' : 'en')}
              className="text-[10px] font-bold uppercase tracking-widest border border-white/20 px-4 py-2 hover:bg-white hover:text-gray-900 transition-all font-mono"
            >
              {lang === 'en' ? 'Urdu' : 'English'}
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

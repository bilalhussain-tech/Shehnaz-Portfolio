import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Search, Menu, X, Star, Heart, ArrowRight, Instagram, Facebook, Twitter, ShieldCheck, Truck, Zap } from 'lucide-react';
import { products, blogPosts } from './data/products';
import { Product, CartItem } from './types';
import { cn } from './lib/utils';
import ReactMarkdown from 'react-markdown';

// --- Components ---

const Navbar = ({ 
  cartCount, 
  onOpenCart, 
  activeCategory, 
  onSelectCategory 
}: { 
  cartCount: number; 
  onOpenCart: () => void;
  activeCategory: string | null;
  onSelectCategory: (cat: string | null) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-brand-cream/80 backdrop-blur-md border-b border-brand-charcoal/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-8">
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="hidden md:flex gap-8 text-[11px] uppercase tracking-[0.2em] font-medium">
              <button 
                onClick={() => onSelectCategory('Skincare')} 
                className={cn("hover:text-brand-gold transition-colors", activeCategory === 'Skincare' && "text-brand-gold")}
              >
                Skincare
              </button>
              <button 
                onClick={() => onSelectCategory('Makeup')} 
                className={cn("hover:text-brand-gold transition-colors", activeCategory === 'Makeup' && "text-brand-gold")}
              >
                Makeup
              </button>
              <button 
                onClick={() => onSelectCategory('Fragrance')} 
                className={cn("hover:text-brand-gold transition-colors", activeCategory === 'Fragrance' && "text-brand-gold")}
              >
                Fragrance
              </button>
            </div>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 cursor-pointer" onClick={() => onSelectCategory(null)}>
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-brand-charcoal hover:scale-105 transition-transform">
              SHEHNAZ
            </h1>
          </div>

          <div className="flex items-center gap-6">
            <button className="hidden md:block">
              <Search size={20} className="text-brand-charcoal/70" />
            </button>
            <button onClick={onOpenCart} className="relative group">
              <ShoppingBag size={20} className="group-hover:text-brand-gold transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
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
            className="md:hidden bg-brand-cream border-b border-brand-charcoal/10 px-8 py-8 flex flex-col gap-6 uppercase tracking-widest text-sm"
          >
            <button className="text-left" onClick={() => { onSelectCategory('Skincare'); setIsOpen(false); }}>Skincare</button>
            <button className="text-left" onClick={() => { onSelectCategory('Makeup'); setIsOpen(false); }}>Makeup</button>
            <button className="text-left" onClick={() => { onSelectCategory('Fragrance'); setIsOpen(false); }}>Fragrance</button>
            <button className="text-left" onClick={() => { onSelectCategory(null); setIsOpen(false); }}>Discover All</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onAction }: { onAction: () => void }) => (
  <section className="relative h-[80vh] md:h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2000&auto=format&fit=crop"
        alt="Beauty Hero"
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-brand-charcoal/20" />
    </div>
    
    <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl text-white"
      >
        <span className="uppercase tracking-[0.4em] text-xs font-semibold mb-4 block">New Collective 2024</span>
        <h2 className="text-6xl md:text-8xl font-light leading-[0.9] mb-8">
          Eternal <br /> <span className="italic font-serif">Luminescence</span>
        </h2>
        <p className="text-lg md:text-xl font-light mb-10 text-white/80 max-w-lg">
          Experience the pinnacle of luxury skincare. Formulated with rare botanical extracts and advanced molecular science.
        </p>
        <div className="flex gap-4">
          <button 
            onClick={onAction}
            className="bg-white text-brand-charcoal px-8 py-4 uppercase tracking-widest text-xs font-bold hover:bg-brand-gold hover:text-white transition-all shadow-xl"
          >
            Shop The Collection
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);


const ProductCard = ({ product, onAddToCart }: { product: Product; onAddToCart: (p: Product) => void }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div className="aspect-[3/4] overflow-hidden bg-zinc-100 relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        {product.isNewArrival && (
          <span className="absolute top-4 left-4 bg-brand-gold text-white text-[10px] uppercase tracking-widest px-2 py-1">New</span>
        )}
        <AnimatePresence>
          {isHovered && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              onClick={() => onAddToCart(product)}
              className="absolute bottom-4 left-4 right-4 bg-brand-charcoal text-white py-3 uppercase tracking-widest text-[10px] font-bold shadow-2xl"
            >
              Quick Add — Rs. {product.price.toLocaleString()}
            </motion.button>
          )}
        </AnimatePresence>
        <button className="absolute top-4 right-4 text-brand-charcoal/40 hover:text-brand-gold transition-colors">
          <Heart size={20} />
        </button>
      </div>
      <div className="mt-4 flex flex-col gap-1 text-center md:text-left">
        <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">{product.brand}</span>
        <h3 className="text-base font-medium">{product.name}</h3>
        <div className="flex items-center justify-center md:justify-start gap-1">
          <div className="flex text-brand-gold">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={10} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
            ))}
          </div>
          <span className="text-[10px] text-brand-charcoal/40">({product.reviewsCount}) — Rs. {product.price.toLocaleString()}</span>
        </div>
      </div>
    </motion.div>
  );
};

const Cart = ({ 
  isOpen, 
  onClose, 
  items, 
  onUpdateQuantity 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
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
            className="fixed inset-0 bg-brand-charcoal/40 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-brand-cream z-[70] shadow-2xl flex flex-col font-sans"
          >
            <div className="p-8 border-b border-brand-charcoal/10 flex justify-between items-center">
              <h2 className="text-xl uppercase tracking-widest font-medium">Your Bag ({items.length})</h2>
              <button onClick={onClose}><X size={24} /></button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-8">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center gap-6 text-brand-charcoal/50 italic">
                  <ShoppingBag size={48} strokeWidth={1} />
                  <p>Your bag is empty</p>
                  <button onClick={onClose} className="text-brand-charcoal underline text-sm tracking-widest uppercase">Start Shopping</button>
                </div>
              ) : (
                <div className="flex flex-col gap-8">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-24 h-32 bg-zinc-100 flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div>
                          <div className="flex justify-between items-start">
                            <h4 className="text-sm font-medium">{item.name}</h4>
                            <span className="text-sm">Rs. {item.price.toLocaleString()}</span>
                          </div>
                          <p className="text-[10px] text-brand-gold uppercase mt-1 font-bold">{item.brand}</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex border border-brand-charcoal/10 rounded-full px-3 py-1 items-center gap-4">
                            <button onClick={() => onUpdateQuantity(item.id, -1)} className="text-lg">-</button>
                            <span className="text-sm font-medium">{item.quantity}</span>
                            <button onClick={() => onUpdateQuantity(item.id, 1)} className="text-lg">+</button>
                          </div>
                          <button onClick={() => onUpdateQuantity(item.id, -item.quantity)} className="text-xs text-red-500 uppercase tracking-widest">Remove</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="p-8 border-t border-brand-charcoal/10 bg-white/50">
              <div className="flex justify-between items-center mb-6">
                <span className="uppercase tracking-widest text-sm text-brand-charcoal/60">Subtotal</span>
                <span className="text-xl font-medium">Rs. {total.toLocaleString()}</span>
              </div>
              <button 
                disabled={items.length === 0}
                className="w-full bg-brand-charcoal text-white py-4 uppercase tracking-[0.2em] text-xs font-bold disabled:opacity-50 hover:bg-brand-gold transition-colors"
              >
                Checkout
              </button>
              <p className="text-center text-[10px] text-brand-charcoal/40 mt-4 italic">
                Shipping and taxes calculated at checkout
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const SectionHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="mb-12 md:mb-16">
    <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gold font-bold mb-2 block">{subtitle}</span>
    <h2 className="text-4xl md:text-5xl font-light">{title}</h2>
  </div>
);

// --- App ---

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const productRef = React.useRef<HTMLDivElement>(null);

  const handleSelectCategory = (cat: string | null) => {
    setSelectedCategory(cat);
    // Add a slight delay to ensure the state update renders before scrolling
    setTimeout(() => {
      productRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

  return (
    <div className="min-h-screen bg-brand-cream selection:bg-brand-gold/30">
      <Navbar 
        cartCount={cartItems.reduce((s, i) => s + i.quantity, 0)} 
        onOpenCart={() => setIsCartOpen(true)} 
        activeCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />
      
      <main className="pt-20">
        {!selectedCategory && <Hero onAction={() => handleSelectCategory('Skincare')} />}
        
        {/* Navigation Categories / Bento Grid */}
        <section className={cn("py-20 px-4 md:px-8 max-w-7xl mx-auto transition-all duration-700", selectedCategory && "opacity-60 scale-95 origin-top")}>
          <SectionHeader title="Curated Collections" subtitle="Explore Our World" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { name: 'Skincare', image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop', id: 'Skincare' },
              { name: 'Makeup', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800&auto=format&fit=crop', id: 'Makeup' },
              { name: 'Haircare', image: 'https://images.unsplash.com/photo-1527799822367-a2886701f662?q=80&w=800&auto=format&fit=crop', id: 'Haircare' },
              { name: 'Fragrance', image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop', id: 'Fragrance' },
            ].map((cat) => (
              <motion.div
                key={cat.id}
                whileHover={{ y: -10 }}
                onClick={() => handleSelectCategory(cat.id)}
                className={cn(
                  "relative h-96 group cursor-pointer overflow-hidden transition-all duration-500",
                  selectedCategory === cat.id ? "ring-2 ring-brand-gold ring-offset-4 ring-offset-brand-cream" : ""
                )}
              >
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-brand-charcoal/20 group-hover:bg-brand-charcoal/10 transition-colors" />
                <div className="absolute bottom-10 left-10 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-3xl font-serif mb-2">{cat.name}</h3>
                  <div className="flex items-center gap-2 text-xs tracking-[0.3em] uppercase opacity-0 group-hover:opacity-100 mt-2 transition-all">
                    Discover Selection <ArrowRight size={12} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Dynamic Product Grid */}
        <section ref={productRef} className="py-32 bg-white relative overflow-hidden">
          {/* Subtle Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-[120px] -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-charcoal/5 rounded-full blur-[120px] -ml-48 -mb-48" />

          <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
              <div>
                <span className="text-[10px] uppercase tracking-[0.5em] text-brand-gold font-bold mb-4 block">
                  {selectedCategory ? `Filter: ${selectedCategory}` : "Curated Selections"}
                </span>
                <h2 className="text-5xl md:text-7xl font-serif font-light leading-tight">
                  {selectedCategory ? <span>The <span className="italic">{selectedCategory}</span> Edit</span> : "Iconic Bestsellers"}
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
                  Clear Filters
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
                    <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
                  ))
                ) : (
                  <div className="col-span-full py-40 text-center flex flex-col items-center gap-6">
                    <div className="w-16 h-px bg-brand-charcoal/20" />
                    <p className="font-serif italic text-2xl text-brand-charcoal/40">Our {selectedCategory} collection is coming soon.</p>
                    <button onClick={() => setSelectedCategory(null)} className="text-xs uppercase tracking-widest underline decoration-brand-gold underline-offset-8">Explore Bestsellers</button>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Shop by Concern / Values */}
        <section className="py-24 px-4 md:px-8 bg-brand-charcoal text-brand-cream">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
            <div className="flex flex-col gap-6 text-center md:text-left">
              <ShieldCheck size={32} className="mx-auto md:mx-0 text-brand-gold" />
              <h3 className="text-2xl font-serif">100% Authentic</h3>
              <p className="text-sm font-light text-brand-cream/60 leading-relaxed">
                Direct partnerships with luxury beauty houses guarantee the provenance and purity of every product we carry.
              </p>
            </div>
            <div className="flex flex-col gap-6 text-center md:text-left">
              <Truck size={32} className="mx-auto md:mx-0 text-brand-gold" />
              <h3 className="text-2xl font-serif">Concierge Delivery</h3>
              <p className="text-sm font-light text-brand-cream/60 leading-relaxed">
                Complimentary white-glove shipping on orders over $150. Wrapped in our signature sustainable packaging.
              </p>
            </div>
            <div className="flex flex-col gap-6 text-center md:text-left">
              <Zap size={32} className="mx-auto md:mx-0 text-brand-gold" />
              <h3 className="text-2xl font-serif">Expert Guidance</h3>
              <p className="text-sm font-light text-brand-cream/60 leading-relaxed">
                Our AI-powered beauty advisor and on-call chemists are here to decode your skincare routine.
              </p>
            </div>
          </div>
        </section>

        {/* Blog / Routine Tips */}
        <section className="py-24 max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeader title="The Beauty Brief" subtitle="Routine & Rituals" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {blogPosts.map(post => (
              <div key={post.id} className="group cursor-pointer">
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
            <SectionHeader title="Ingredient IQ" subtitle="Full Transparency" />
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
                    <div className="w-12 h-12 border-2 border-brand-gold border-t-transparent rounded-full animate-spin" />
                    <p className="text-sm italic animate-pulse">Our experts are analyzing the formula...</p>
                  </div>
                ) : (
                  <div className="prose prose-brand max-w-none prose-sm">
                    <ReactMarkdown>
                      {analysis || "Select a product above to analyze its ingredients."}
                    </ReactMarkdown>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-brand-charcoal text-brand-cream border-t border-white/5 py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-3xl font-semibold tracking-tight mb-8">SHEHNAZ</h2>
              <p className="text-sm font-light text-brand-cream/60 max-w-sm mb-12 leading-relaxed">
                Empowering your beauty ritual through curated excellence and scientific transparency. Join our world of luxury.
              </p>
              <div className="flex gap-6">
                <Instagram size={20} className="hover:text-brand-gold cursor-pointer" />
                <Facebook size={20} className="hover:text-brand-gold cursor-pointer" />
                <Twitter size={20} className="hover:text-brand-gold cursor-pointer" />
              </div>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 text-brand-gold">Concierge</h4>
              <ul className="flex flex-col gap-4 text-sm font-light text-brand-cream/80">
                <li className="hover:text-brand-gold cursor-pointer">Track Order</li>
                <li className="hover:text-brand-gold cursor-pointer">Shipping & Returns</li>
                <li className="hover:text-brand-gold cursor-pointer">Gift Services</li>
                <li className="hover:text-brand-gold cursor-pointer">Contact Us</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 text-brand-gold">Discover</h4>
              <ul className="flex flex-col gap-4 text-sm font-light text-brand-cream/80">
                <li className="hover:text-brand-gold cursor-pointer">Our Story</li>
                <li className="hover:text-brand-gold cursor-pointer">Beauty Blog</li>
                <li className="hover:text-brand-gold cursor-pointer">Stores</li>
                <li className="hover:text-brand-gold cursor-pointer">Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-white/5 text-[10px] uppercase tracking-widest text-brand-cream/40">
            <p>© 2024 Shehnaz Super Store. All Rights Reserved.</p>
            <div className="flex gap-12">
              <span>Urdu / English</span>
              <span>PKR</span>
            </div>
          </div>
        </div>
      </footer>

      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cartItems}
        onUpdateQuantity={updateQuantity}
      />
    </div>
  );
}

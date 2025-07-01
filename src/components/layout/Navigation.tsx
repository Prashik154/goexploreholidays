'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, X, Menu, ChevronDownIcon, Book, Trees, Sunset, Zap } from 'lucide-react';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    {
      label: 'Destinations',
      href: '#',
      subItems: [
        { 
          label: 'Ranthambore', 
          href: '/destinations/ranthambore', 
          description: 'Tiger territory with ancient forts',
          icon: <Trees className="size-5 shrink-0 text-green-700" />
        },
        { 
          label: 'Bandhavgarh', 
          href: '/destinations/bandhavgarh', 
          description: 'Highest tiger density in India',
          icon: <Sunset className="size-5 shrink-0 text-green-700" />
        },
        { 
          label: 'Tadoba', 
          href: '/destinations/tadoba', 
          description: 'Land of the tiger and wild dogs',
          icon: <Zap className="size-5 shrink-0 text-green-700" />
        },
        { 
          label: 'Kanha', 
          href: '/destinations/kanha', 
          description: 'Inspiration for Jungle Book',
          icon: <Book className="size-5 shrink-0 text-green-700" />
        },
      ]
    },
    {
      label: 'Safari Packages',
      href: '#',
      subItems: [
        { 
          label: 'Weekend Getaways', 
          href: '/packages/weekend', 
          description: '2-3 day quick escapes',
          icon: <Sunset className="size-5 shrink-0 text-green-700" />
        },
        { 
          label: 'Luxury Safaris', 
          href: '/packages/luxury', 
          description: 'Premium lodges & private jeeps',
          icon: <Zap className="size-5 shrink-0 text-green-700" />
        },
      ]
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-green-800 text-white text-center py-2 text-sm">
        <p>Book 3+ safaris and get 15% off! Limited time offer</p>
      </div>

      {/* Main Navigation */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white shadow-md'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image 
                src="/images/tigers/logo.jpg"  
                alt="logo" 
                width={64} 
                height={64} 
                className="bg-gray-200 border-2 rounded-xl w-16 h-16" 
              />
              <div className="ml-3">
                <h1 className="text-xl font-bold text-green-800">WildTrails</h1>
                <p className="text-xs text-gray-600">Jungle Safari Experts</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              <NavigationMenu>
                <NavigationMenuList>
                  {navItems.map((item) => (
                    <NavigationMenuItem key={item.label}>
                      {item.subItems ? (
                        <>
                          <NavigationMenuTrigger className="font-medium text-black hover:text-green-700">
                            {item.label}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent className="bg-white border border-gray-200 rounded-lg shadow-lg">
                            <ul className="w-80 p-3">
                              {item.subItems.map((subItem) => (
                                <li key={subItem.label}>
                                  <NavigationMenuLink asChild>
                                    <Link
                                      href={subItem.href}
                                      className="flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-amber-50"
                                    >
                                      {subItem.icon}
                                      <div>
                                        <div className="text-sm font-semibold text-gray-900">
                                          {subItem.label}
                                        </div>
                                        <p className="text-sm leading-snug text-gray-500 mt-1">
                                          {subItem.description}
                                        </p>
                                      </div>
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          </NavigationMenuContent>
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          className="px-4 py-2 font-medium text-black hover:text-green-700"
                        >
                          {item.label}
                        </Link>
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </nav>

            {/* Right Controls */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-gray-700 hover:text-green-700"
              >
                <Search className="w-5 h-5" />
              </button>
              
              <Link 
                href="/contact" 
                className="hidden md:inline-block px-4 py-2 font-medium text-black hover:text-green-700"
              >
                Contact
              </Link>
              
              <Link
                href="/booking"
                className="hidden md:inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-1.5 rounded-md font-medium transition-colors text-sm"
              >
                Book Now
              </Link>
              
              <button
                className="lg:hidden p-2 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="border-t bg-white py-4">
            <div className="container mx-auto px-4 flex">
              <input
                type="text"
                placeholder="Search destinations, animals, or packages..."
                className="flex-1 p-3 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="bg-green-600 text-white px-6 rounded-r-lg">
                Search
              </button>
              <button 
                className="ml-2 p-2 text-gray-500 hover:text-gray-700"
                onClick={() => setSearchOpen(false)}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Menu */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent className="overflow-y-auto" side="right">
          <SheetHeader>
            <SheetTitle>
              <Link href="/" className="flex items-center gap-2">
                <Image 
                  src="/images/tigers/logo.jpg"  
                  alt="logo" 
                  width={40} 
                  height={40} 
                  className="bg-gray-200 border-2 rounded-xl w-10 h-10" 
                />
                <span className="text-lg font-semibold">WildTrails</span>
              </Link>
            </SheetTitle>
          </SheetHeader>
          <div className="my-6 flex flex-col gap-6">
            <Accordion type="single" collapsible className="flex w-full flex-col gap-4">
              {navItems.map((item) => (
                <AccordionItem key={item.label} value={item.label} className="border-b-0">
                  {item.subItems ? (
                    <>
                      <AccordionTrigger className="py-0 font-semibold hover:no-underline text-black">
                        {item.label}
                      </AccordionTrigger>
                      <AccordionContent className="mt-2">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-amber-50"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.icon}
                            <div>
                              <div className="text-sm font-semibold text-gray-900">
                                {subItem.label}
                              </div>
                              <p className="text-sm leading-snug text-gray-500 mt-1">
                                {subItem.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </AccordionContent>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="font-semibold py-3 text-black"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
            <div className="flex flex-col gap-3">
              <Button asChild variant="outline">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Contact Us
                </Link>
              </Button>
              <Button asChild>
                <Link href="/booking" onClick={() => setMobileMenuOpen(false)}>
                  Book Now
                </Link>
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
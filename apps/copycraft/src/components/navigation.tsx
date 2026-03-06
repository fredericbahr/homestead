import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Start", id: "start" },
    { href: "/angebote", label: "Angebote", id: "servies" },
    { href: "/ueber-mich", label: "Über mich", id: "about" },
  ];

  return (
    <nav className="border-border/40 bg-background/80 relative top-0 z-50 flex w-full items-center justify-between border-b px-6 py-6 shadow-sm backdrop-blur-lg md:px-12">
      <a className="text-primary flex items-center gap-3 transition-opacity hover:opacity-80" href="/">
        <i className="ph ph-feather text-xl" />
        <span className="font-heading text-foreground text-2xl">Buchstabenfeder</span>
      </a>

      {/* Desktop Nav */}
      <div className="hidden items-center gap-8 font-medium md:flex">
        {navLinks.map((link) => (
          <a
            className={`relative w-fit transition-colors text-muted-foreground hover:text-primary"`}
            data-testid={`link-${link.id}`}
            href={link.href}
            key={link.id}
          >
            <motion.div whileHover={{ scale: 1.05 }}>{link.label}</motion.div>
          </a>
        ))}
        <a href="/kontakt">
          <Button>Kontakt</Button>
        </a>
      </div>

      {/* Mobile Nav Toggle */}
      <button
        className="bg-primary/10 text-foreground hover:bg-primary/25 rounded-full px-2 py-1 transition-colors md:hidden"
        data-testid="button-menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <i className="ph ph-x" /> : <i className="ph ph-list" />}
      </button>

      {/* Mobile Nav Menu */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="bg-white border-border/60 absolute top-full right-4 left-4 z-2 mt-2 flex w-[calc(100%-2rem)] flex-col gap-6 rounded-2xl border p-8 shadow-2xl md:hidden"
            exit={{ opacity: 0, y: -20 }}
            initial={{ opacity: 0, y: -20 }}
            key="mobile-menu"
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {navLinks.map((link, idx) => (
              <motion.a
                animate={{ opacity: 1, x: 0 }}
                className={`w-fit text-center text-lg font-medium transition-colors duration-300 text-foreground hover:text-primary"`}
                data-testid={`link-${link.id}-mobile`}
                exit={{ opacity: 0, x: -20 }}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                key={link.id}
                onClick={() => setIsOpen(false)}
                transition={{
                  delay: idx * 0.08,
                  duration: 0.25,
                  ease: "easeOut",
                }}
                whileHover={{ x: 4 }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.div
              animate={{ opacity: 1 }}
              className="border-border/40 border-t pt-6"
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              transition={{
                delay: navLinks.length * 0.08 + 0.1,
                duration: 0.25,
              }}
            >
              <a className="block w-full" href="/join" onClick={() => setIsOpen(false)}>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button>Buche ein Gespräch</Button>
                </motion.div>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

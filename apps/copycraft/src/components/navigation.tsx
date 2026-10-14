import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Button } from "./ui/button.tsx";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Start", title: "Start" },
    { href: "/angebote", label: "Angebote", title: "Angebote" },
    { href: "/ueber-mich", label: "Über mich", title: "Über mich" },
  ];

  return (
    <header>
      <nav className="relative top-0 z-50 flex w-full items-center justify-between border-border/40 border-b bg-background/80 px-6 py-6 shadow-sm backdrop-blur-lg md:px-12">
        <a className="flex items-center gap-3 text-primary transition-opacity hover:opacity-80" href="/">
          <i className="ph ph-feather text-xl" />
          <span className="font-heading text-2xl text-foreground">Buchstabenfeder</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 font-medium md:flex">
          {navLinks.map((link) => (
            <a
              className={`relative w-fit text-muted-foreground transition-colors hover:text-primary"`}
              href={link.href}
              key={link.href}
              title={link.title}
            >
              <motion.div whileHover={{ scale: 1.05 }}>{link.label}</motion.div>
            </a>
          ))}

          <div>
            <Button href="/kontakt" title="Kontaktiere mich direkt">
              Kontakt
            </Button>
          </div>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
          className="rounded-full bg-primary/10 px-2 py-1 text-foreground transition-colors hover:bg-primary/25 md:hidden"
          data-testid="button-menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          title={isOpen ? "Menü schließen" : "Menü öffnen"}
          type="button"
        >
          {isOpen ? <i className="ph ph-x" /> : <i className="ph ph-list" />}
        </button>

        {/* Mobile Nav Menu */}
        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-full right-4 left-4 z-2 mt-2 flex w-[calc(100%-2rem)] flex-col gap-6 rounded-2xl border border-border/60 bg-white p-8 shadow-2xl md:hidden"
              exit={{ opacity: 0, y: -20 }}
              initial={{ opacity: 0, y: -20 }}
              key="mobile-menu"
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {navLinks.map((link, idx) => (
                <motion.a
                  animate={{ opacity: 1, x: 0 }}
                  className={`w-fit text-center font-medium text-foreground text-lg transition-colors duration-300 hover:text-primary"`}
                  exit={{ opacity: 0, x: -20 }}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  key={link.href}
                  onClick={() => setIsOpen(false)}
                  title={link.title}
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
                <a className="block w-full" href="/kontakt" onClick={() => setIsOpen(false)}>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button>Buche ein Gespräch</Button>
                  </motion.div>
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

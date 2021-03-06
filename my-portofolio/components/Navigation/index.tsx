import React, { FC } from "react";
import Logo from "../Logo";
import { NavLink } from "@/interfaces";
import NavLinks from "./NavLinks";
import MenuToggle from "./MenuToggle";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import MenuLinks from "./MenuLinks";
import SocialLinks from "../SocialLinks";

const links: NavLink[] = [
  { title: "about", location: "/", external: false },
  { title: "projects", location: "/projects", external: false },
  { title: "hobbies ", location: "/hobbies", external: false },
  { title: "blog", location: "https://dev.to/vulture990", external: true },
];

const Navigation: FC = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  return (
    <>
      <nav className="flex py-6 items-center justify-between bg-white">
          <Logo />
        <motion.div
          className="flex flex-row sm:hidden"
          initial={false}
          animate={isOpen ? "open" : "closed"}
        >
          <SocialLinks className="inline-flex mr-3" />
          <MenuToggle toggle={() => toggleOpen()} />
        </motion.div>
        <div className="hidden sm:block  font-serif font-light">
          <NavLinks links={links} />
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <MenuLinks links={links} toggle={() => toggleOpen()} key={"menu"} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;

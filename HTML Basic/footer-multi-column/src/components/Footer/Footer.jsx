import React from "react";
import { cn } from "../../lib/utils";
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookBoxLine,
  RiGithubLine,
  RiTwitterXLine,
} from "react-icons/ri";
import abstractlyLogo from "../../assets/abstractly-logo.png";

const shopCategories = [
  {
    title: "Unisex",
    href: "#",
  },
  {
    title: "Women",
    href: "#",
  },
  {
    title: "Men",
    href: "#",
  },
];

const shopCollections = [
  {
    title: "Latest arrivals",
    href: "#",
  },
  {
    title: "Urban Oasis",
    href: "#",
  },
  {
    title: "Cozy Comfort",
    href: "#",
  },
  {
    title: "Fresh Fusion",
    href: "#",
  },
];

const footerSocials = [
  {
    icon: RiYoutubeLine,
    url: "https://youtube.com",
    name: "Link to Stylenest's youtube profile",
  },
  {
    icon: RiInstagramLine,
    url: "https://instagram.com",
    name: "Link to Stylenest's instagram profile",
  },
  {
    icon: RiFacebookBoxLine,
    url: "https://facebook.com",
    name: "Link to Stylenest's facebook profile",
  },
  {
    icon: RiGithubLine,
    url: "https://github.com",
    name: "Link to Stylenest's github profile",
  },
  {
    icon: RiTwitterXLine,
    url: "https://twitter.com",
    name: "Link to Stylenest's twitter profile",
  },
];
const Footer = () => {
  return (
    <footer className="mx-auto flex max-w-[1216px] flex-col gap-16 py-16 text-black">
      {/* <div className="flex flex-col flex-1 w-full p-24 g-16"> */}
      <div className="grid grid-cols-12 gap-x-4 gap-y-16">
        <div className="col-span-8 flex flex-col gap-2">
          <div className="text-xl font-semibold text-neutral-900">
            Join our newsletter
          </div>
          <div className="text-neutral-600">
            We’ll send you a nice letter once per week. No spam.
          </div>
        </div>
        <div className="col-span-4">
          <input type="text" />
          <button>Subscribe</button>
        </div>
        <div className="col-span-4 flex flex-col items-start gap-8">
          <img
            src={abstractlyLogo}
            alt="Stylenest's Logo"
            className="block h-8 w-auto"
          />
          <div className="text-neutral-600">
            Craft stunning style journeys that weave more joy into every thread.
          </div>
        </div>
        <div className="col-span-3 col-start-7 flex flex-col gap-4">
          <div className="text-sm text-neutral-500">SHOP CATEGORIES</div>
          <div className="flex flex-col gap-3">
            {shopCategories.map((category) => (
              <div key={category.title}>
                <a href={category.href} className="text-neutral-600!">
                  {category.title}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-3 flex flex-col gap-4">
          <div className="text-sm text-neutral-500">SHOP COLLECTIONS</div>
          <div className="flex flex-col gap-3">
            {shopCollections.map((collection) => (
              <div key={collection.title}>
                <a href={collection.href} className="text-neutral-600!">
                  {collection.title}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-between border-t border-neutral-200 pt-8">
        <div className="text-neutral-500">
          &copy; {new Date().getFullYear()} StyleNest, Inc. All rights reserved.
        </div>
        <div className="flex gap-6">
          {footerSocials.map(({ icon: Icon, name }) => (
            <a
              className="flex size-6 items-center justify-center text-neutral-400!"
              key={name}
            >
              <Icon></Icon>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

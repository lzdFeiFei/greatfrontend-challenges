import { cn } from "../../lib/utils";
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookBoxLine,
  RiGithubLine,
  RiTwitterXLine,
} from "react-icons/ri";
import abstractlyLogo from "../../assets/abstractly-logo.png";
import Newsletter from "./NewsletterForm";

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
    <footer
      className={cn(
        "mx-auto flex w-full max-w-[1216px] flex-col px-4",
        "gap-12 py-12",
        "md:py-16",
        "lg:py-24"
      )}
    >
      <div
        className={cn(
          "grid grid-cols-4 gap-x-4 gap-y-12",
          "md:grid-cols-6 md:gap-x-8 md:gap-y-16",
          "lg:grid-cols-12"
        )}
      >
        <div
          className={cn(
            "col-span-4 flex flex-col gap-2 md:col-span-6 lg:col-span-8"
          )}
        >
          <div className="text-xl font-semibold text-neutral-900">
            Join our newsletter
          </div>
          <div className="text-neutral-600">
            We’ll send you a nice letter once per week. No spam.
          </div>
        </div>
        <div className={cn("col-span-4", "md:col-span-6", "lg:col-span-4")}>
          <Newsletter></Newsletter>
        </div>
        <div
          className={cn(
            "col-span-4 flex flex-col items-start gap-6",
            "md:col-span-3 md:gap-8",
            "lg:col-span-4"
          )}
        >
          <img
            src={abstractlyLogo}
            alt="Stylenest's Logo"
            className="block h-8 w-auto"
          />
          <div className="text-neutral-600">
            Craft stunning style journeys that weave more joy into every thread.
          </div>
        </div>

        <div className="col-span-3 hidden md:block lg:hidden" />

        <div
          className={cn(
            "col-span-4 flex flex-col gap-4",
            "md:col-span-3",
            "lg:col-start-7"
          )}
        >
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
        <div className={cn("col-span-4 flex flex-col gap-4", "md:col-span-3")}>
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
      <div
        className={cn(
          "flex flex-1 flex-col gap-8 border-t border-neutral-200 pt-8",
          "md:flex-row",
          "lg: justify-between"
        )}
      >
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

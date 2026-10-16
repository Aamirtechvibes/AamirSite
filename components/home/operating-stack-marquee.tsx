import Image from "next/image";

import { Marquee } from "@/components/ui/marquee";

type StackItem =
  | {
      type: "item";
      label: string;
      image: string;
    }
  | {
      type: "separator";
      label: "•";
    };

const stackItems: StackItem[] = [
  {
    type: "item",
    label: "Full-Stack Developer",
    image: "https://ik.imagekit.io/aamir010/Portofolio/full_stack.jpg?updatedAt=1774594369076",
  },
  {
    type: "item",
    label: "Agentic AI",
    image:
      "https://ik.imagekit.io/aamir010/Portofolio/N8n%20Sticker%20Sticker.jpeg?updatedAt=1774593333385",
  },
  {
    type: "item",
    label: "Machine Learning",
    image: "https://ik.imagekit.io/aamir010/Portofolio/machince_learning_logo.png",
  },
  {
    type: "separator",
    label: "•",
  },
  {
    type: "item",
    label: "Next.js",
    image:
      "https://ik.imagekit.io/aamir010/Portofolio/Next_js%20Logo%20PNG%20Vector%20(SVG)%20Free%20Download.jpeg?updatedAt=1774594367422",
  },
  {
    type: "item",
    label: "React",
    image:
      "https://ik.imagekit.io/aamir010/Portofolio/React%20logo%20in%20(_SVG)%20vector%20free%20download.jpeg?updatedAt=1774594367914",
  },
  {
    type: "item",
    label: "MongoDB",
    image:
      "https://ik.imagekit.io/aamir010/Portofolio/Home%20_%20LeafyGreen%20Design%20System%20_%20MongoDB.jpeg?updatedAt=1774594513903",
  },
  {
    type: "item",
    label: "Express",
    image:
      "https://ik.imagekit.io/aamir010/Portofolio/Express%20Js%20Sticker.jpeg?updatedAt=1774594334490",
  },
  {
    type: "item",
    label: "JavaScript",
    image: "https://ik.imagekit.io/aamir010/Portofolio/Javascript.jpeg?updatedAt=1774594334490",
  },
  {
    type: "separator",
    label: "•",
  },
  {
    type: "item",
    label: "Prompt Engineering",
    image:
      "https://ik.imagekit.io/aamir010/Portofolio/Supabase%20Logo%20PNG%20Vector%20(SVG)%20Free%20Download.jpeg?updatedAt=1774594368590",
  },
  {
    type: "item",
    label: "Cybersecurity",
    image:
      "https://ik.imagekit.io/aamir010/Portofolio/30%20an%CC%83os%20de%20Linux,%20la%20eterna%20alternativa%20a%20Windows.jpeg?updatedAt=1774594313364",
  },
  {
    type: "item",
    label: "Git",
    image: "https://ik.imagekit.io/aamir010/Portofolio/_.jpeg?updatedAt=1774594313395",
  },
  {
    type: "item",
    label: "GitHub",
    image:
      "https://ik.imagekit.io/aamir010/Portofolio/Introduction%20to%20Git.jpeg?updatedAt=1774594334485",
  },
  {
    type: "item",
    label: "Android Dev",
    image: "https://ik.imagekit.io/aamir010/Portofolio/android.png?updatedAt=1774594710858",
  },
  {
    type: "item",
    label: "Python",
    image:
      "https://ik.imagekit.io/aamir010/Portofolio/Python%20Programming%20Language%20Icon%20PNG%20&%20SVG%20Design%20For%20T-Shirts.jpeg?updatedAt=1774594367896",
  },
];

function StackSignal({ item }: { item: StackItem }) {
  if (item.type === "separator") {
    return <div className="whitespace-nowrap text-xs text-slate-400 mx-2 md:text-sm">{item.label}</div>;
  }

  return (
    <div className="flex items-center gap-2 whitespace-nowrap text-sm text-slate-600 md:text-base">
      <div className="relative h-5 w-5 shrink-0 overflow-hidden rounded-md bg-white ring-1 ring-slate-200 md:h-6 md:w-6">
       <Image
        src={item.image}
        alt=""
        fill
        sizes="24px"
        className="object-contain opacity-80"
      />
      </div>
       <span>{item.label}</span>
    </div>
  );
}

export function OperatingStackMarquee() {
  return (
    <section className="relative py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="border-t border-slate-200/70 pt-4">
          <p className="text-[0.68rem] font-medium uppercase tracking-[0.28em] text-slate-600">
            Operating Stack
          </p>

          <Marquee
            className="mt-4 [--duration:32s] [--gap:1rem] md:[--gap:2rem]"
            pauseOnHover
            repeat={2}
          >
            {stackItems.map((item, index) => (
              <StackSignal
                key={`${item.type === "separator" ? item.label : item.label}-${index}`}
                item={item}
              />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

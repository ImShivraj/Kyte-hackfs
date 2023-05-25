import { useState } from "react";
import { Tab } from "@headlessui/react";
import clsx from "clsx";

export default function SortTabs() {
  let [categories] = useState(["All Posts", "Text", "Image", "Audio", "Video"]);

  return (
    <div className="w-full max-w-md px-2 sm:px-0  mx-auto py-4">
      <Tab.Group>
        <Tab.List className="flex justify-between w-full space-x-1 rounded-xl mx-auto w  px-auto">
          {categories.map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                clsx(
                  "w-full rounded-full py-2.5 text-sm font-medium leading-5 ",
                  "ring-white ring-opacity-60 ring-offset-0 focus:outline-none focus:ring-0 ",
                  selected
                    ? "bg-black text-white shadow"
                    : "text-black  border border-black hover:bg-white/[0.12]  "
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        {/* <Tab.Panels className="mt-2">
          {categories.map((idx) => (
            <Tab.Panel
              key={idx}
              className={clsx(
                "rounded-xl bg-white p-3",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              <ul></ul>
            </Tab.Panel>
          ))}
        </Tab.Panels> */}
      </Tab.Group>
    </div>
  );
}

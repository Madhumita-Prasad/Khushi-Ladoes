import {  Star, User } from "lucide-react"; // Imported icons from Lucide
import React from "react";

const Features = () => {
  return (
    <section className="text-gray-600 body-font bg-[#fafaf9] mt-10">
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-wrap justify-center sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          {/* First Feature */}
          {/* <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
              <Calendar className="w-10 h-10" />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Event Management
              </h2>
              <p className="leading-relaxed text-base h-20">
                We help organize and manage events with precision and creativity, ensuring a memorable experience.
              </p>
            </div>
          </div> */}

          {/* Second Feature */}
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
              <Star className="w-10 h-10" />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Suggestions
              </h2>
              <p className="leading-relaxed text-base h-20">
                You can suugest us to add items at our store.
              </p>
            </div>
          </div>

          {/* Third Feature */}
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
              <User className="w-10 h-10" />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Customer Support
              </h2>
              <p className="leading-relaxed text-base h-20">
                You can contact us through the given social media platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
type FeatureCardProps = {
  title: string;
  description: string;
  icon: string | StaticImageData;
};

const FeatureCard: FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <div className="p-8 space-y-3 border-2 border-[#467BA5] dark:border-blue-300 rounded-xl">
      <span className="inline-block text-blue-500 dark:text-[#467BA5]">
        <Image src={icon} alt={title} />
      </span>

      <h1 className="text-2xl font-semibold  capitalize dark:text-white">
        {title}
      </h1>

      <p className="text-gray-500 dark:text-gray-300">{description}</p>
    </div>
  );
};

export default FeatureCard;

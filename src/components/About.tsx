interface AboutProps {
  tagline: string;
  about: string;
}

export default function About({ tagline, about }: AboutProps) {
  return (
    <section className="mt-12 space-y-6">
      <div>
        <p className="text-lg text-gray-600 font-light leading-relaxed">
          {tagline}
        </p>
      </div>
      
      <div className="border-l-2 border-gray-200 pl-6">
        <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4">
          About
        </h2>
        <p className="text-gray-700 leading-relaxed max-w-2xl">
          {about}
        </p>
      </div>
    </section>
  );
}
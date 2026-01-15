
import React from 'react';

const MemoriesGallery: React.FC = () => {
  const images = [
    { src: 'https://picsum.photos/seed/love1/600/800', size: 'large', caption: 'Laughter shared.' },
    { src: 'https://picsum.photos/seed/love2/600/400', size: 'small', caption: 'Quiet moments.' },
    { src: 'https://picsum.photos/seed/love3/600/400', size: 'small', caption: 'Hand in hand.' },
    { src: 'https://picsum.photos/seed/love4/600/800', size: 'large', caption: 'Everlasting joy.' },
    { src: 'https://picsum.photos/seed/love5/600/400', size: 'small', caption: 'Through it all.' },
    { src: 'https://picsum.photos/seed/love6/600/400', size: 'small', caption: 'Our legacy.' },
  ];

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-serif text-center mb-16">Capturing the Magic</h2>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, i) => (
            <div key={i} className="relative group overflow-hidden rounded-3xl break-inside-avoid">
              <img 
                src={img.src} 
                alt={img.caption}
                className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6">
                <p className="text-white font-serif text-xl italic">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemoriesGallery;

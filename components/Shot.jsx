import clsx from 'clsx';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

export default function Shot({ project }) {
  const { image_url, title, slug, day } = project;

  const [isSmallImgLoaded, setIsSmallImgLoaded] = useState(false);
  const [isLargeImgLoaded, setIsLargeImgLoaded] = useState(false);

  useEffect(() => {
    // small image
    const img = new Image();
    img.src = `/_next/image?url=${image_url}&w=640&q=1`;
    img.onload = () => {
      setIsSmallImgLoaded(true);
    };

    // large image
    const img_large = new Image();
    img_large.src = `/_next/image?url=${image_url}&w=1280&q=75`;
    img_large.onload = () => {
      setIsLargeImgLoaded(true);
    };
  }, []);

  return (
    <div>
      <Link href={`project/${slug}/index.html`}>
        <a>
          <div
            className='placeholder rounded bg-gray-200 relative bg-cover bg-no-repeat overflow-hidden'
            data-large={`/_next/image?url=${image_url}&w=1280&q=100`}
          >
            <img
              src={`/_next/image?url=${image_url}&w=640&q=1`}
              alt={title}
              className={clsx('img-small', isSmallImgLoaded && 'loaded')}
            />
            <img
              src={`/_next/image?url=${image_url}&w=1280&q=75`}
              alt={title}
              className={clsx('img-large', isLargeImgLoaded && 'loaded')}
            />
            <div className='intrinsic-placeholder' />
          </div>
        </a>
      </Link>
      <div className='flex items-center justify-between'>
        <p className='heading py-2 font-semibold text-sm'>
          D{day} {title}
        </p>
      </div>
    </div>
  );
}

import useBaseUrl from '@docusaurus/useBaseUrl';
import React, { FC } from 'react';

export type AvatarProps = {
  src: string;
  alt: string;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'auto' | 'sync';
};

export const Avatar: FC<AvatarProps> = ({ src, alt, loading, decoding }) => {
  return (
    <div
      className="avatar avatar__photo-link avatar__photo avatar__photo--lg"
      style={{ margin: '1rem 0' }}
    >
      <img
        title={alt}
        loading={loading}
        decoding={decoding}
        alt={alt}
        src={useBaseUrl(src)}
      />
    </div>
  );
};

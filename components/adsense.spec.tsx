import React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Adsense } from './Ads';
import Image from 'next/image';

describe('Adsense', () => {
  it('should be instantiable', () => {
    const { container } = render(<Adsense client="ca-pub-4515639184646084" slot="6793505140" className="ads-class" />);
    expect(container.firstChild).toMatchSnapshot();
  });
  it('should allow children', () => {
    const { container } = render(
      <Adsense client="ca-pub-4515639184646084" slot="6793505140" className="ads-class">
        <Image src="" width={180} height={80} alt="placeholder" />
      </Adsense>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  it('should call window adsbygoogle', () => {
    (window as any).adsbygoogle = [];
    render(<Adsense client="ca-pub-4515639184646084" slot="6793505140" />);
    expect((window as any).adsbygoogle).toHaveLength(1);
    (window as any).adsbygoogle = undefined;
  });
});

import React, { useEffect } from 'react';

declare function AN_Item_ready(): void;

const Listings = () => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = "https://www.auctionnudge.com/feed/item/js/theme/responsive/page/init/img_size/120/show_logo/1/lang/english/SellerID/redfifty/siteid/3/MaxEntries/8";
    script.async = true;
    script.addEventListener('load', () => {
      AN_Item_ready();
    })

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return <div id="auction-nudge-items" className="auction-nudge"></div>
}

export { Listings };


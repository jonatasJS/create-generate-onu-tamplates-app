import Script from 'next/script';
import React, { useEffect } from 'react'

export type AdsenseTypes = {
	pId: string;
}

export type AdBannerTypes = {
	dataAdSlot: string;
	dataAdFormat: string;
	dataFullWidthResponsive: boolean;
};

export const AdSense = ({ pId }: AdsenseTypes) => {
	return (
		<Script
			async
			src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${pId}`}
			crossOrigin='anonymous'
			strategy='afterInteractive'
		/>
	)
}

export const AdBanner = ({
	dataAdSlot,
	dataAdFormat,
	dataFullWidthResponsive,
}: AdBannerTypes) => {
	useEffect(() => {
		try {
			((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
				{}
			);
		} catch (error: any) {
			console.log(error.message);
		}
	}, []);

	return (
		<ins
			className="adsbygoogle"
			style={{ display: "block", height: "auto", width: "auto" }}
			data-ad-client="ca-pub-5593915309329672"
			data-ad-slot={dataAdSlot}
			data-ad-format={dataAdFormat}
			data-full-width-responsive={dataFullWidthResponsive.toString()}
		></ins>
	);
};

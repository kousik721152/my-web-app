import React from "react";
import theme from "theme";
import { Theme, Link } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
		<Helmet>
			<title>
				Ashimary Wigs | Shop Stylish & Natural Looking Wigs
			</title>
			<meta name={"description"} content={"Shop Ashimary Wigs for high-quality, natural-looking women's wigs. Find the perfect style, color, and length. Free shipping available!"} />
			<meta property={"og:title"} content={"<meta property=\"og:title\" content=\"Ashimary Wigs: Premium Quality Women's Wigs\" />"} />
			<meta property={"og:description"} content={"<meta property=\"og:description\" content=\"Shop Ashimary Wigs for the best selection of human hair wigs.  Find your perfect style today!\" />"} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/679fa0609e74900024008f99/images/Create%20an%20Image%20on%20Ashimary%20Hair__%20Ashimary%20Hair,%20Category%20Womens%20wig,%20Image%20used%20for%20Android%20App%20as%20a%20Fevicon.jpg?v=2025-02-02T20:12:07.475Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/679fa0609e74900024008f99/images/Untitled%20design.png?v=2025-02-02T19:11:43.985Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/679fa0609e74900024008f99/images/apple-touch%20icon%20Ashimary.png?v=2025-02-02T19:12:34.294Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/679fa0609e74900024008f99/images/apple-touch%20icon%20Ashimary.png?v=2025-02-02T19:12:34.294Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/679fa0609e74900024008f99/images/apple-touch%20icon%20Ashimary.png?v=2025-02-02T19:12:34.294Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/679fa0609e74900024008f99/images/apple-touch%20icon%20Ashimary.png?v=2025-02-02T19:12:34.294Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/679fa0609e74900024008f99/images/Win%2010%20icon%20Ashimary.png?v=2025-02-02T19:18:51.989Z"} />
		</Helmet>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"679fa0609e74900024008f97"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
			<script place={"endOfHead"} rawKey={"679fd93d596e66716015b778"} />
			<link place={"endOfHead"} rawKey={"679fd98ca5abd2781278d795"} />
			<style place={"endOfHead"} rawKey={"679fda4a4ff096955d5d43ef"} />
			<script place={"endOfHead"} rawKey={"679fdb22885d7edbc4a10470"} />
			<link place={"endOfHead"} rawKey={"679fdb61b818d12c90972210"} />
		</RawHtml>
	</Theme>;
});
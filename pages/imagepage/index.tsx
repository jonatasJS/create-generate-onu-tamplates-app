import Link from "next/link";
import Image from "next/image";
import useWindowDimensions from "../../utils/hooks/useWindowDimensions";

export default function ImagePage() {
  const { height, width } = useWindowDimensions();

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				height: height+"px",
				width: width+"px",
				backgroundColor: "white"
			}}
		>
				<Link href="">
					<img
						width={width}
						height={height}
						src={`https://random.imagecdn.app/${height}/${width}/`}
						alt="Image"
					/>
				</Link>
		</div>
	);
}

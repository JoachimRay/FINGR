import Svg, {Path, type SvgProps} from "react-native-svg";

// Source: assets/icons/x.svg (Figma "x" icon, 26×26).
export function XIcon({width = 26, height = 26, ...props}: SvgProps) {
	return (
		<Svg width={width} height={height} viewBox="0 0 26 26" fill="none" {...props}>
			<Path
				d="M19.5 6.5L6.5 19.5M6.5 6.5L19.5 19.5"
				stroke="#690119"
				strokeWidth={1.8}
				strokeLinecap="round"
			/>
		</Svg>
	);
}

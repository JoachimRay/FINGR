import Svg, {Path, type SvgProps} from "react-native-svg";

// Source: assets/icons/arrow-up-right.svg (Figma "arrow-up-right", 18×18).
export function ArrowUpRightIcon({width = 18, height = 18, ...props}: SvgProps) {
	return (
		<Svg width={width} height={height} viewBox="0 0 18 18" fill="none" {...props}>
			<Path
				d="M12.7494 12.7494V5.2506H5.2506M12.7494 5.2506L5.2506 12.7494"
				stroke="white"
				strokeWidth={1.8}
				strokeLinecap="round"
			/>
		</Svg>
	);
}

import Svg, {Path, type SvgProps} from "react-native-svg";

// Source: assets/icons/sliders-horizontal.svg (Figma "sliders-horizontal", 20×20).
export function SlidersIcon({width = 20, height = 20, ...props}: SvgProps) {
	return (
		<Svg width={width} height={height} viewBox="0 0 20 20" fill="none" {...props}>
			<Path
				d="M8.33333 4.16667H2.5M10 15.8333H2.5M11.6667 2.5V5.83333M13.3333 14.1667V17.5M17.5 10H10M17.5 15.8333H13.3333M17.5 4.16667H11.6667M6.66667 8.33333V11.6667M6.66667 10H2.5"
				stroke="#690119"
				strokeWidth={1.8}
				strokeLinecap="round"
			/>
		</Svg>
	);
}

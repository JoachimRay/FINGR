import Svg, {Path, type SvgProps} from "react-native-svg";

// Source: assets/icons/pinky-mark.svg (Figma "i-dot • pinky mark", 12×11).
export function PinkyMarkIcon({width = 12, height = 11, ...props}: SvgProps) {
	return (
		<Svg width={width} height={height} viewBox="0 0 12 11" fill="none" {...props}>
			<Path
				d="M6 10.12C3.15 8.21333 1.35 6.16 1.8 3.96C2.25 1.90667 4.95 1.46667 5.85 3.37333C6.3 4.25333 7.2 4.54667 7.8 3.81333"
				stroke="#690119"
				strokeWidth={1.125}
				strokeLinecap="round"
			/>
			<Path
				d="M6 10.12C8.85 8.21333 10.65 6.16 10.2 3.96C9.75 1.90667 7.05 1.46667 6.15 3.37333C5.7 4.25333 4.8 4.54667 4.2 3.81333"
				stroke="#D79D90"
				strokeWidth={1.125}
				strokeLinecap="round"
			/>
			<Path
				d="M7.8 4.25333C8.04853 4.25333 8.25 4.05634 8.25 3.81333C8.25 3.57033 8.04853 3.37333 7.8 3.37333C7.55147 3.37333 7.35 3.57033 7.35 3.81333C7.35 4.05634 7.55147 4.25333 7.8 4.25333Z"
				fill="#A83646"
			/>
			<Path
				d="M4.2 4.25333C4.44853 4.25333 4.65 4.05634 4.65 3.81333C4.65 3.57033 4.44853 3.37333 4.2 3.37333C3.95147 3.37333 3.75 3.57033 3.75 3.81333C3.75 4.05634 3.95147 4.25333 4.2 4.25333Z"
				fill="#A83646"
			/>
		</Svg>
	);
}

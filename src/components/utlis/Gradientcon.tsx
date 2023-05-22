import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

type Props = {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  width?: string;
  height?: string;
  margin?: string;
};

const GradientIcon = ({ Icon, width, height, margin }: Props) => (
  <>
    <svg width={0} height={0}>
      <linearGradient id="linearColors" x1={1} y1={0} x2={1} y2={1}>
        <stop offset={0} stopColor="#FE06C7" />
        <stop offset={1} stopColor="#9313F8" />
      </linearGradient>
    </svg>
    <Icon sx={{ fill: "url(#linearColors)", width, height, margin }} />
  </>
);

export default GradientIcon;
